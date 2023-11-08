import { IUserInfo } from '@/types/auth';
import jwt from 'jsonwebtoken';
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-import-module-exports */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import Post from '@/models/Post';

import User from '@/models/User';
import jwtMiddleware from '@/middleware/jwtMiddleware';
import errorHandler from '@/handler/errorHandler';
import { ACCESS_TOKEN_EXPRIRES_IN, JWT_SECRET } from '@/constants/backend';
import { cookies } from 'next/headers';
import { generateToken } from '@/utils/backend/auth';

// TODO: apiHandler로 감싸기
// module.exports = apiHandler({
//   POST: createPostHandler,
//   GET: getPostHandler,
// });

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    await jwtMiddleware(req);

    const accessToken = req.headers.get('Authorization')?.split(' ')[1] || '';

    let newAccessToken;

    if (!accessToken) {
      throw new Error('토큰이 제공되지 않았습니다.');
    }

    let decodedAccessToken;

    try {
      decodedAccessToken = jwt.verify(accessToken, JWT_SECRET as string) as IUserInfo;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        // accessToken이 만료되었을 때 refreshToken을 사용하여 새로운 accessToken 발급 시도
        const refreshToken = cookies().get('refreshToken')?.value;

        if (!refreshToken) {
          throw new Error('refreshToken이 제공되지 않았습니다.');
        }
        let decodedRefreshToken;
        try {
          decodedRefreshToken = jwt.verify(refreshToken, JWT_SECRET as string) as IUserInfo;
        } catch (e: any) {
          // refreshToken이 유효하지않을때 로그아웃 로직
          const response = NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
          response.cookies.delete('refreshToken'); // refreshToken 쿠키를 삭제
          const decoded = jwt.decode(refreshToken);

          // 타입 가드
          if (typeof decoded === 'object' && decoded !== null && 'userid' in decoded) {
            const userid = decoded?.userid;
            await User.findOneAndUpdate(
              { userid }, // 조건에 맞는 문서를 찾음
              { $unset: { refreshToken: '' } } // refreshToken 필드를 삭제
            );
            return response;
          }
        }

        if (decodedRefreshToken) {
          const tokenPayload = {
            userid: decodedRefreshToken.userid,
            email: decodedRefreshToken.email,
          };
          // 응답 헤더에 새로운 accessToken 초기화
          newAccessToken = generateToken({
            payload: tokenPayload,
            secret: JWT_SECRET as string,
            expiresIn: ACCESS_TOKEN_EXPRIRES_IN,
          });
          decodedAccessToken = jwt.verify(newAccessToken, JWT_SECRET as string) as IUserInfo;
        }
      } else {
        throw error; // 다른 에러 처리
      }
    }

    const userObj =
      decodedAccessToken && (await User.findOne({ userid: decodedAccessToken.userid }));

    if (!userObj) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const reqBody = await req.json();
    const { title, subtitle, body, thumbnail, tags } = reqBody;

    const post = await Post.create({
      post_id: Date.now().toString(),
      title,
      subtitle,
      body,
      thumbnail,
      user: userObj,
      tags,
    });

    const response = NextResponse.json(post || {});

    if (newAccessToken) response.headers.set('X-Access-Token', newAccessToken);
    return response;
  } catch (error: any) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    if (postId) {
      const post = await Post.findOne({
        post_id: postId,
      });
      return NextResponse.json(post || {});
    }

    const postList = await Post.find();
    return NextResponse.json(postList || {});
  } catch (error: any) {
    return errorHandler(error);
  }
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');

  try {
    await connectDb();

    await Post.deleteOne({ post_id: postId });
    return NextResponse.json({ message: 'success' });
  } catch (error: any) {
    return errorHandler(error);
  }
}

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

    let accessToken = req.headers.get('authorization')?.split(' ')[1] || '';
    let decodedAccessToken;
    if (!accessToken) {
      throw new Error('토큰이 제공되지 않았습니다.');
    }

    try {
      decodedAccessToken = jwt.verify(accessToken, JWT_SECRET as string) as IUserInfo;
    } catch (error) {
      // 토큰이 만료되었을 경우

      if (error instanceof jwt.TokenExpiredError) {
        const refreshToken = cookies().get('refreshToken')?.value ?? '';
        const decodedRefreshToken = jwt.verify(refreshToken, JWT_SECRET as string) as IUserInfo;

        accessToken = generateToken({
          payload: decodedRefreshToken,
          secret: JWT_SECRET as string,
          expiresIn: ACCESS_TOKEN_EXPRIRES_IN,
        });

        // 응답 헤더에 토큰을 추가
        req.headers.set('accesstoken', accessToken);
      } else {
        // 다른 오류 처리

        throw error;
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

    return NextResponse.json(post || {});
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

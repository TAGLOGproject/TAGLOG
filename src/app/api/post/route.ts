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
interface UpdateAndCreatePostRequestBody {
  title?: string;
  subtitle?: string;
  body?: string;
  thumbnail?: string;
  tags?: string[];
}
export async function POST(req: NextRequest) {
  try {
    await connectDb();
    await jwtMiddleware(req);

    let newAccessToken;
    let decodedAccessToken;

    try {
      const accessToken = req.headers.get('Authorization')?.split(' ')[1] || '';
      if (!accessToken) {
        throw new Error('missing token');
      }
      decodedAccessToken = jwt.verify(accessToken, JWT_SECRET as string) as IUserInfo;
    } catch (error: any) {
      // accessToken이 만료되었거나 api request에 token이 없을때 처리 (front에서 api 요청을 안하긴 함.)
      if (error instanceof jwt.TokenExpiredError || error.name === 'missing token') {
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
        errorHandler(error);
      }
    }

    const userObj =
      decodedAccessToken && (await User.findOne({ userid: decodedAccessToken.userid }));

    if (!userObj) {
      throw new Error('user not found');
    }

    const reqBody = (await req.json()) as UpdateAndCreatePostRequestBody;
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
    // return NextResponse.redirect(new URL('/', req.url)); // front에서 리다이렉트
    return errorHandler(error);
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
      if (!post) {
        throw new Error('post not found');
      }
      return NextResponse.json(post);
    }

    const postList = await Post.find();
    return NextResponse.json(postList || {});
  } catch (error: any) {
    return errorHandler(error);
  }
}

export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');

  try {
    await connectDb();

    const existingPost = await Post.findOne({
      post_id: postId,
    });

    if (!existingPost) {
      throw new Error('Post not found');
    }

    const reqBody = (await req.json()) as UpdateAndCreatePostRequestBody;

    existingPost.title = reqBody.title;
    existingPost.subtitle = reqBody.subtitle;
    existingPost.body = reqBody.body;
    existingPost.thumbnail = reqBody.thumbnail;
    existingPost.tags = reqBody.tags;

    // Save the updated post
    const updatedPost = await existingPost.save();
    return NextResponse.json(updatedPost);
  } catch (error: any) {
    // Handle errors
    return errorHandler(error);
  }
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');

  try {
    await connectDb();

    const result = await Post.deleteOne({ post_id: postId });
    // 삭제된 문서의 수가 0인지 확인
    if (result.deletedCount === 0) {
      throw new Error('Post not found');
    }

    // 문서가 성공적으로 삭제되었으므로 성공 메시지 반환
    return NextResponse.json({ message: 'Post successfully deleted' });
  } catch (error: any) {
    // 에러 처리기로 에러를 전달
    return errorHandler(error);
  }
}

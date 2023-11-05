import jwt from 'jsonwebtoken';
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-import-module-exports */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import Post from '@/models/Post';

import User from '@/models/User';
import jwtMiddleware from '@/middleware/jwtMiddleware';
import errorHandler from '@/handler/errorHandler';
import { JWT_SECRET } from '@/constants/backend';

// TODO: apiHandler로 감싸기
// module.exports = apiHandler({
//   POST: createPostHandler,
//   GET: getPostHandler,
// });

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    await jwtMiddleware(req);

    const userObj = await User.findOne({ userid: req.headers.get('userid') as string });
    const accessToken = req.headers.get('authorization')?.split(' ')[1] || '';
    if (!accessToken) {
      throw new Error('토큰이 제공되지 않았습니다.');
    }
    console.log('accessToken', accessToken);
    // const decoded = jwt.verify(token, JWT_SECRET as string) as {
    //   userid: string;
    //   email: string;
    //   iat: number;
    //   exp: number;
    // };

    const decoded = jwt.verify(accessToken, JWT_SECRET as string);
    console.log('check', decoded);

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
    console.log('error', error);
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
      return NextResponse.json(post || {});
    }

    const postList = await Post.find();
    return NextResponse.json(postList || {});
  } catch (error) {
    return error;
  }
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');

  try {
    await connectDb();

    await Post.deleteOne({ post_id: postId });
    return NextResponse.json({ message: 'success' });
  } catch (error) {
    return NextResponse.error().json();
  }
}

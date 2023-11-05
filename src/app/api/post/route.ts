/* eslint-disable no-use-before-define */
/* eslint-disable import/no-import-module-exports */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import Post from '@/models/Post';

import User from '@/models/User';
import jwtMiddleware from '@/middleware/jwtMiddleware';
import errorHandler from '@/handler/errorHandler';

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

    if (!userObj) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const reqBody = await req.json();

    const post = await Post.create({
      post_id: Date.now().toString(),
      title: reqBody.title,
      subtitle: reqBody.subtitle,
      body: reqBody.body,
      thumbnail: reqBody.thumbnail,
      user: userObj,
      tags: reqBody.tags,
    });

    return NextResponse.json(post || {});
  } catch (error: any) {
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

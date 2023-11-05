/* eslint-disable no-use-before-define */
/* eslint-disable import/no-import-module-exports */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import Post from '@/models/Post';
import { cookies } from 'next/headers';
import User from '@/models/User';
import apiHandler from '../api-handler';

module.exports = apiHandler({
  POST: createPostHandler,
  GET: getPostHandler,
});

async function createPostHandler(req: Request) {
  console.log('req: ', await req.json());
  try {
    await connectDb();

    const userObj = await User.findOne({ userid: req.headers.get('userid') as string });
    // console.log('userObj: ', userObj, '&&&&&&&&&&&&&&', req.headers.get('userid'));
    const reqBody = await req.json();
    // console.log('reqBody', reqBody);

    const post = await Post.create({
      post_id: Date.now().toString(),
      title: reqBody.title,
      subtitle: reqBody.subtitle,
      body: reqBody.body,
      thumbnail: reqBody.thumbnail,
      user: userObj,
      tags: reqBody.tags,
    });
    console.log('post', post);
    return post;
  } catch (error) {
    return NextResponse.error().json();
  }
}

async function getPostHandler(req: NextRequest) {
  const cookie = cookies().get('refreshToken');

  try {
    await connectDb();
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    if (postId) {
      const data = await Post.findOne({
        post_id: postId,
      });
      return data;
    }

    const data = await Post.find();
    return data;
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
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error().json();
  }
}

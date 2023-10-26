import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/app/lib/dbConnect';
import Post from '@/models/Post';

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const reqBody = await req.json();

    const post = await Post.create({
      post_id: Date.now().toString(),
      title: reqBody.title,
      subtitle: reqBody.subtitle,
      body: reqBody.body,
      thumbnail: reqBody.thumbnail,
      user: reqBody.user,
      tags: reqBody.tags,
    });

    return NextResponse.json(
      {
        data: post,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error().json();
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    if (postId) {
      const data = await Post.findOne({
        post_id: postId,
      });
      return NextResponse.json(
        {
          data,
          success: true,
        },
        { status: 200 }
      );
    }
    const data = await Post.find();
    return NextResponse.json(
      {
        data,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error().json();
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

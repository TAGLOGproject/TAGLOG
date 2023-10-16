import { IPost } from '@/types/api/post';
import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/app/lib/dbConnect';
import Post from '@/models/Post';

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    console.log(req);

    const reqBody = req.body as unknown as IPost;
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
        data,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error().json();
  }
}

export async function GET() {
  try {
    await connectDb();

    const data = await Post.create({});

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

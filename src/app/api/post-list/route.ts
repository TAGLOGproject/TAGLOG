import { NextResponse } from 'next/server';

import connectDb from '@/app/lib/dbConnect';
import { IPostListData } from '@/types/api/post';
import PostList from '@/models/PostList';

const MOCK_POST_LIST: IPostListData[] = [
  {
    _id: '23',
    thumbnail: '',
    post_id: '2023101034242245', // timestamp + random
    title: '개발이란',
    subtitle: '개발이란 무엇인가',
    tags: ['개발', '프로그래밍', '코딩'],
    created_at: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    edited_at: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    like_count: 0,
    comments_count: 0,
  },
  {
    _id: '23',
    thumbnail: '',
    post_id: '2023101034242245', // timestamp + random
    title: '개발이란',
    subtitle: '개발이란 무엇인가',
    tags: ['개발', '프로그래밍', '코딩'],
    created_at: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    edited_at: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    like_count: 0,
    comments_count: 0,
  },
];

export async function GET() {
  try {
    await connectDb();

    const data = await PostList.find();

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

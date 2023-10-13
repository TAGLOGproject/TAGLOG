import { NextResponse } from 'next/server';

import connectDb from '@/app/lib/dbConnect';
import { IPostListData } from '@/types/api/post';

const MOCK_POST_LIST: IPostListData[] = [
  {
    id: '23',
    image: '',
    post_id: '2023101034242245', // timestamp + random
    title: '개발이란',
    subtitle: '개발이란 무엇인가',
    tags: ['개발', '프로그래밍', '코딩'],
    createdAt: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    editedAt: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    likeCnt: 0,
  },
  {
    id: '23',
    image: '',
    post_id: '2023101034242245', // timestamp + random
    title: '개발이란',
    subtitle: '개발이란 무엇인가',
    tags: ['개발', '프로그래밍', '코딩'],
    createdAt: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    editedAt: 'Fri Oct 13 2023 21:51:00 GMT+0900',
    likeCnt: 0,
  },
];

export async function GET() {
  try {
    await connectDb();
    return NextResponse.json(
      {
        MOCK_POST_LIST,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error().json();
  }
}

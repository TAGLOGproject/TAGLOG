import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';

import User from '@/models/User';

export async function POST(req: NextRequest) {
  const { userId } = await req.json(); // 사용자 ID를 요청 본문에서 추출

  try {
    // 데이터베이스 연결
    await connectDb();

    // 사용자를 찾아서 refreshToken 필드를 지웁니다.
    await User.findOneAndUpdate(
      { userid: userId }, // 조건에 맞는 문서를 찾음
      { $unset: { refreshToken: '' } } // refreshToken 필드를 삭제
    );

    const response = NextResponse.json({ message: 'Logged out successfully.' });
    response.cookies.delete('refreshToken'); // refreshToken 쿠키를 삭제

    // 성공 응답을 보냅니다.
    return response;
  } catch (error: any) {
    // 에러가 발생하면 에러를 반환합니다.
    return NextResponse.json({ message: 'Logout failed.', error: error.message }, { status: 500 });
  }
}

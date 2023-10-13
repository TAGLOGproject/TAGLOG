/* eslint-disable camelcase */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/app/lib/dbConnect';
import { getTokenFromKakao, getUserFromKakao, saveOrUpdateUser } from '@/utils/backend/kakao';

export async function POST(req: NextRequest) {
  const { authCode } = await req.json(); // 인가 코드

  const tokenResponse = await getTokenFromKakao(authCode);
  // 유저 정보 받아오기
  const userInfo = await getUserFromKakao(tokenResponse);

  try {
    await connectDb();
    const { accessToken, refreshToken } = await saveOrUpdateUser(userInfo);

    // refreshToken은 httpOnly 쿠키로 전달 (accessToken은 body로 전달)
    // TODO: refreshToken이 만료된경우 카카오 로그인 처리가 되어야함
    const response = NextResponse.json({ success: 'true', accessToken }, { status: 200 });
    response.cookies.set({
      name: 'refreshToken',
      value: refreshToken,
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    const response = NextResponse.json(
      { success: 'false', message: 'login fail' },
      { status: 400 }
    );
    return response;
  }
}

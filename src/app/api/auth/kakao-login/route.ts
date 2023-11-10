/* eslint-disable camelcase */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import { getTokenFromKakao, getUserFromKakao, saveOrUpdateUser } from '@/utils/backend/kakao';

export async function POST(req: NextRequest) {
  const { authCode } = await req.json(); // 인가 코드

  const tokenResponse = await getTokenFromKakao(authCode);
  // 유저 정보 받아오기
  const userInfo = await getUserFromKakao(tokenResponse);

  try {
    await connectDb();
    const { accessToken, refreshToken } = await saveOrUpdateUser(userInfo);

    const response = NextResponse.json(accessToken || '');
    response.cookies.set({
      name: 'refreshToken',
      value: refreshToken,
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return error;
  }
}

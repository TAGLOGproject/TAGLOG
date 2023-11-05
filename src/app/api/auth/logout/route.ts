/* eslint-disable camelcase */

import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/lib/dbConnect';
import { getTokenFromKakao, getUserFromKakao, saveOrUpdateUser } from '@/utils/backend/kakao';
import User from '@/models/User';
import { auth } from '@/utils/backend/auth';

export async function POST(req: NextRequest) {
  const { authCode } = await req.json(); // 인가 코드

  const tokenResponse = await getTokenFromKakao(authCode);
  // 유저 정보 받아오기
  const userInfo = await getUserFromKakao(tokenResponse);

  const isTrue = auth.verifyToken('refreshToken');
  console.log('isTrue', isTrue);

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
    });
    console.log('response', response.cookies.get('refreshToken'));
    return response;
  } catch (error) {
    return error;
  }
}
/* eslint-disable camelcase */
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '@/app/lib/dbConnect';
import Contact from '@/models/Contact';
import { KAKAO_CLIENT_ID, TOKEN_URL } from '@/utils/oauth';

interface TokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}

interface UserInfo {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile_image_needs_agreement: boolean;
    profile: any;
    has_email: boolean;
    email_needs_agreement: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    email: string;
    has_birthday: boolean;
    birthday_needs_agreement: boolean;
    birthday: string;
    birthday_type: 'SOAR' | 'LUNAR';
  };
}

async function getTokenFromKakao(authCode: string) {
  const tokenUrl = TOKEN_URL(authCode);
  const response: TokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return response;
}

async function getUserFromKakao({ access_token }: TokenResponse) {
  const userInfoUrl = 'https://kapi.kakao.com/v2/user/me';
  const response: UserInfo = await fetch(userInfoUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());
  return response;
}

export async function POST(req: NextRequest) {
  const { authCode } = await req.json(); // 인가 코드

  const tokenResponse = await getTokenFromKakao(authCode);
  // 유저 정보 받아오기
  const userInfo = await getUserFromKakao(tokenResponse);
  const {
    id,
    properties: { nickname, profile_image, thumbnail_image },
    kakao_account: { email, birthday, birthday_type },
  } = userInfo;
  return NextResponse.json({ success: 'true' });
}

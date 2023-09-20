/* eslint-disable camelcase */
import jwt from 'jsonwebtoken';
import { JWT_SECRET, KAKAO_API_URL, TOKEN_URL } from '@/constants/backend';
import { KakaoTokenResponse, KakaoUserInfo } from '@/types/api/kakao';
import User from '@/models/User';

export async function getTokenFromKakao(authCode: string) {
  const tokenUrl = TOKEN_URL(authCode);
  const response: KakaoTokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return response;
}

export async function getUserFromKakao({ access_token }: KakaoTokenResponse) {
  const response: KakaoUserInfo = await fetch(KAKAO_API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());
  return response;
}

function generateTokens(payload: { userid: number; email: string }) {
  const accessToken = jwt.sign(payload, JWT_SECRET as string, { expiresIn: '1h' });
  const refreshToken = jwt.sign(payload, JWT_SECRET as string, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}

export async function saveOrUpdateUser(userInfo: KakaoUserInfo) {
  const {
    id,
    properties: { nickname, profile_image, thumbnail_image },
    kakao_account: { email, birthday, birthday_type },
  } = userInfo;

  const userPayload = { userid: id, email };
  const { accessToken, refreshToken } = generateTokens(userPayload);

  const user = await User.findOne({ userid: id });

  if (user) {
    // 사용자가 이미 존재한다면 refresh token 업데이트
    user.refreshToken = refreshToken;
    await user.save();
  } else {
    // 새로운 사용자를 생성
    await User.create({
      userid: id,
      nickname,
      profile_image,
      thumbnail_image,
      email,
      birthday,
      birthday_type,
      refreshToken,
    });
  }

  return { accessToken, refreshToken };
}

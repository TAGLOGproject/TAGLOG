export const { JWT_SECRET } = process.env;

export const REDIRECT_URI = 'http://localhost:3000/oauth';

export const { KAKAO_CLIENT_ID } = process.env;

export const KAKAO_API_URL = 'https://kapi.kakao.com/v2/user/me';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const TOKEN_URL = (authCode: string) => {
  return `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;
};
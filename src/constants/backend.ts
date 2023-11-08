export const { JWT_SECRET } = process.env;

export const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;

export const KAKAO_API_URL = 'https://kapi.kakao.com/v2/user/me';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const TOKEN_URL = (authCode: string) => {
  return `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${authCode}`;
};

export const ACCESS_TOKEN_EXPRIRES_IN = '1h';
export const REFRESH_TOKEN_EXPRIRES_IN = '7days';

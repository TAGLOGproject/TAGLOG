const { KAKAO_CLIENT_ID } = process.env;
const REDIRECT_URI = 'http://localhost:3000/oauth';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

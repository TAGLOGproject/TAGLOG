import { instance } from './axios';

// post
export const postKakaoAuthApi = async (params: { authCode: string }) => {
  const { data } = await instance.post('/auth/kakao-login', params);
  return data;
};

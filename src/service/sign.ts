import { authInstance, instance } from './axios';

export const postKakaoAuthApi = async (params: { authCode: string }) => {
  const { data } = await instance.post('/auth/kakao-login', params);
  return data;
};

export const signoutApi = async (params: { userId: number }) => {
  const { data } = await authInstance.post('/auth/logout', params);
  return data;
};

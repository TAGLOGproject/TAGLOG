import { authInstance, instance } from '../utils/frontend/axios';

export const kakaoAuthApi = async (params: { authCode: string }) => {
  const { data } = await instance.post('/auth/kakao-login', params);
  return data;
};

export const signOutApi = async (params: { userId: number }) => {
  const { data } = await authInstance.post('/auth/logout', params);
  return data;
};

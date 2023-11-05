import axios from 'axios';
import { getAccessToken } from '@/utils/frontend/localstorage';
import { toast } from 'react-toastify';

const defaultConfig = {
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const instance = axios.create(defaultConfig);

export const authInstance = axios.create(defaultConfig);

authInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    if (typeof window !== 'undefined') {
      toast.error('토큰이 없습니다.');
      setTimeout(() => {
        window.location.href = '/'; // 로그인 페이지로 리디렉트합니다.
      }, 1000);
    }

    return Promise.reject(new Error('토큰이 없습니다.'));
  }
  const newConfig = { ...config };
  if (accessToken) {
    const token = typeof accessToken === 'string' ? accessToken : JSON.stringify(accessToken);
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

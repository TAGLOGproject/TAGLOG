import axios from 'axios';
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
  const authStore = localStorage.getItem('auth-storage');
  const { accessToken } = authStore ? JSON.parse(authStore).state : '';

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
    const tokenWithoutQuotes = accessToken.replace(/^"|"$/g, '');
    newConfig.headers.Authorization = `Bearer ${tokenWithoutQuotes}`; // 큰따옴표 없이 헤더에 설정
  }

  return newConfig;
});

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
      toast.error('Unauthorized : 로그인을 다시 해주세요');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }

    return Promise.reject(new Error('Unauthorized : 로그인을 다시 해주세요'));
  }
  const newConfig = { ...config };
  if (accessToken) {
    newConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return newConfig;
});

authInstance.interceptors.response.use(
  (response) => {
    const token = response.headers['x-access-token'];

    if (token) {
      const authStore = localStorage.getItem('auth-storage');
      const authData = authStore ? JSON.parse(authStore) : {};
      authData.accessToken = token;
      localStorage.setItem('auth-storage', JSON.stringify(authData));
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

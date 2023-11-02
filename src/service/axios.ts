import axios from 'axios';
import { getAccessToken } from '@/utils/frontend/localstorage';

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
  const newConfig = { ...config };
  if (accessToken) {
    const token = JSON.parse(accessToken);
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

import axios from 'axios';
import { BASE_URL } from '@/constants';
import { getAccessToken } from '@/utils/localstorage';

const defaultConfig = {
  baseURL: BASE_URL,
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

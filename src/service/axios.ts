import axios from 'axios';
import { BASE_URL } from '@/constants';

const defaultConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const instance = axios.create(defaultConfig);

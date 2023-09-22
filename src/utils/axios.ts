import axios from 'axios';

const defaultConfig = {
  baseURL: `/api`,
  Headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(defaultConfig);

export default axiosInstance;

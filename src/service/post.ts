import { instance } from './axios';

export const getPostListAPI = async () => {
  const { data } = await instance.get('post-list');
  return data;
};

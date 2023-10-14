import { IPostListData } from '@/types/api/post';
import { instance } from './axios';

export const getPostListAPI = async (): Promise<IPostListData[]> => {
  const { data } = await instance.get('post-list');
  return data.data;
};

import { IPostListData } from '@/types/api/post';
import { instance } from './axios';

export const getPostListAPI = async (): Promise<IPostListData[]> => {
  const { data } = await instance.get('post-list');
  return data.data;
};

export const createPostAPI = async () => {
  const { data } = await instance.post('post', {
    title: 'title',
    subtitle: 'subtitle',
    body: 'body',
    thumbnail: 'thumbnail',
    user: { userId: 'test', userName: 'test' },
    tags: ['typescript', 'nextjs', 'react'],
  });
  return data;
};

export const getPostApi = async (postId: string) => {
  const { data } = await instance.get('post', { params: { postId } });
  return data;
};

export const getPostListApi = async (postId?: number) => {
  const { data } = await instance.get('post', { params: { postId } });
  return data;
};

export const deletePostApi = async (postId: number) => {
  const { data } = await instance.delete('post', { params: { postId } });
  return data;
};

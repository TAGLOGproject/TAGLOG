import { IPost } from '@/types/api/post';
import { instance } from './axios';

export const createPostAPI = async ({
  title,
  body,
  tags,
}: {
  title: string;
  body: string;
  thumbnail?: string;
  tags: string[];
}) => {
  const subtitle = body.slice(0, 10);
  const reqBody = {
    title,
    subtitle,
    body,
    thumbnail: 'https://taglog-image-uploader.s3.ap-northeast-2.amazonaws.com/Test.png',
    user: { userId: 'test', userName: 'test' },
    tags,
  };
  console.log('reqBody', reqBody);
  const { data } = await instance.post('post', reqBody);
  return data;
};

export const getPostApi = async (postId?: number): Promise<IPost[]> => {
  const { data } = await instance.get('post', { params: { postId } });
  return data;
};

export const deletePostApi = async (postId: number) => {
  const { data } = await instance.delete('post', { params: { postId } });
  return data;
};

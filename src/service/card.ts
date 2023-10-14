import { instance } from './axios';

export const getCardsAPI = async () => {
  const { data } = await instance.get('post-list');
  return data;
};

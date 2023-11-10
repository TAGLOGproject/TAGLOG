import { IPost } from '@/types/api/post';
import { create } from 'zustand';

export type UpdatePost = {
  postData: IPost | null;
  setPostData: (postData: IPost) => void;
  setPostDataInitialize: () => void;
};

const useUpdatePostStore = create<UpdatePost>((set) => ({
  postData: null,
  setPostData: (postData) => {
    set({ postData });
  },
  setPostDataInitialize: () => {
    set({ postData: null });
  },
}));

export default useUpdatePostStore;

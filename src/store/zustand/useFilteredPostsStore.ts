import { create } from 'zustand';
import { IPostListData } from '@/types/api/post';
import { TagType } from '@/types/tag';

export type filteredPostsState = {
  postList: IPostListData[];
  selectedTag: TagType;
  filteredPostList: IPostListData[];
  setPostList: (postList: IPostListData[]) => void;

  setTag: (tag: TagType) => void;
};

const useFilteredPostsStore = create<filteredPostsState>((set, get) => ({
  postList: [],
  selectedTag: 'All',
  filteredPostList: [],
  setPostList: (data: IPostListData[]) => {
    set({ postList: data, filteredPostList: data });
  },
  setTag: (tag) => {
    set({ selectedTag: tag });
    const currentTag = get().selectedTag;
    if (currentTag === 'All') {
      set({ filteredPostList: get().postList });
      return;
    }
    const filteredData = get().postList.filter((v) => {
      return v.tags.includes(currentTag);
    });
    set({ filteredPostList: filteredData });
  },
}));

export default useFilteredPostsStore;

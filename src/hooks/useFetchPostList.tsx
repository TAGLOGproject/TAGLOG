'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostApi } from '@/service/post';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';

const useFetchPostList = () => {
  const { setPostList, filteredPostList } = useFilteredPostsStore();
  const [isLoading, setIsLoading] = useState(true);

  const getPostList = useCallback(async () => {
    try {
      const data = await getPostApi();
      setPostList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as AxiosError).message);
    }
  }, [setPostList]);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  return { filteredPostList, isLoading };
};

export default useFetchPostList;

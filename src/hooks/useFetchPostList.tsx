'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostListAPI } from '@/service/post';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';

const useFetchPostList = () => {
  const { setPostList, filteredPostList } = useFilteredPostsStore();
  const [isLoading, setIsLoading] = useState(false);

  const getPostList = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getPostListAPI();
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

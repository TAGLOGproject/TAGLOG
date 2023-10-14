'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostListAPI } from '@/service/post';
import { IPostListData } from '@/types/api/post';

const useFetchPostList = () => {
  const [postListData, setPostListData] = useState<IPostListData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPostList = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getPostListAPI();
      setPostListData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as AxiosError).message);
    }
  }, []);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  return { postListData, isLoading };
};

export default useFetchPostList;

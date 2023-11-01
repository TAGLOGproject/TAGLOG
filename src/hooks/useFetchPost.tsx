'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostApi } from '@/service/post';
import { IPost } from '@/types/api/post';

const useFetchPost = (postId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPost | IPost[]>();

  const getPost = useCallback(async () => {
    try {
      if (!postId) return;

      const result = await getPostApi(postId);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as AxiosError).message);
    }
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return { isLoading, data };
};

export default useFetchPost;

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostApi } from '@/service/post';
import { IPost } from '@/types/api/post';

const useFetchPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPost | IPost[]>();
  const params = useParams();

  const getPost = useCallback(async () => {
    try {
      if (!params) return;
      const postId = Number(params.id);
      const result = await getPostApi(postId);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as AxiosError).message);
    }
  }, [params]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return { isLoading, data };
};

export default useFetchPost;

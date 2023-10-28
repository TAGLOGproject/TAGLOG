'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { getPostApi } from '@/service/post';

const useFetchPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const getPost = useCallback(async () => {
    try {
      if (!params) return;
      const postId = Number(params.id);
      const data = await getPostApi(postId);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error((error as AxiosError).message);
    }
  }, [params]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return { isLoading };
};

export default useFetchPost;

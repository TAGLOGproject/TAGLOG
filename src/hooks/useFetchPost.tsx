'use client';

import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { getPostApi } from '@/service/post';
import { IPost } from '@/types/api/post';
import { useRouter } from 'next/navigation';

const useFetchPost = (postId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IPost | IPost[]>();

  const router = useRouter();

  const getPost = useCallback(async () => {
    try {
      if (!postId) return;

      const result = await getPostApi(postId);
      setData(result);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.status === 404) {
        toast.error('Not Found : 올바르지 않은 접근입니다');
        router.push('/');
      }
      toast.error(error.message);
    }
  }, [postId, router]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return { isLoading, data };
};

export default useFetchPost;

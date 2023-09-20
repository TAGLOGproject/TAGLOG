'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import { postKakaoAuthApi } from '@/service/sign';

export default function OAuth() {
  const searchParams = useSearchParams();

  const authCode = searchParams?.get('code');

  const router = useRouter();

  const postKakaoAuth = useCallback(async () => {
    try {
      if (authCode) {
        const data = await postKakaoAuthApi({ authCode });
        console.log(data);
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  }, [authCode, router]);

  useEffect(() => {
    postKakaoAuth();
  }, [postKakaoAuth]);

  return <div>{authCode}</div>;
}

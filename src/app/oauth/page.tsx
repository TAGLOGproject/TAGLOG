'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import { postKakaoAuthApi } from '@/service/sign';
import { getAccessToken, setAccessToken } from '@/utils/localstorage';

export default function OAuth() {
  const searchParams = useSearchParams();

  const authCode = searchParams?.get('code');

  const router = useRouter();

  const postKakaoAuth = useCallback(async () => {
    try {
      if (authCode) {
        const data = await postKakaoAuthApi({ authCode });
        const { accessToken } = data;
        setAccessToken(accessToken);
        // set > get이 잘 동작하는지 확인하기 위한 코드
        getAccessToken();
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

'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import { kakaoAuthApi } from '@/service/sign';
import LoadingUI from '@/components/LoadingUI';
import useAuthStore from '@/store/zustand/useAuthStore';

export default function OAuthClient() {
  const searchParams = useSearchParams();
  const { setAccessToken } = useAuthStore((state) => state);

  const authCode = searchParams?.get('code');

  const router = useRouter();

  const postKakaoAuth = useCallback(async () => {
    try {
      if (authCode) {
        const token = await kakaoAuthApi({ authCode });
        setAccessToken(token);
        router.push('/');
      }
    } catch (error) {
      throw Error();
    }
  }, [authCode, router, setAccessToken]);

  useEffect(() => {
    postKakaoAuth();
  }, [postKakaoAuth]);

  return (
    <div>
      <LoadingUI type="center" />
    </div>
  );
}

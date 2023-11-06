'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { postKakaoAuthApi } from '@/service/sign';
import LoadingUI from '@/components/LoadingUI';
import useAuthStore from '@/store/zustand/useAuthStore';
import { IUserInfo } from '@/types/auth';
import { setAccessToken } from '@/utils/frontend/localstorage';

export default function OAuthClient() {
  const searchParams = useSearchParams();
  const { setUserInfo } = useAuthStore((state) => state);

  const authCode = searchParams?.get('code');

  const router = useRouter();

  const postKakaoAuth = useCallback(async () => {
    try {
      if (authCode) {
        const token = await postKakaoAuthApi({ authCode });

        const decodedToken = jwt.decode(token) as IUserInfo;

        setAccessToken(token);
        setUserInfo(decodedToken);

        router.push('/');
      }
    } catch (error) {
      throw Error();
    }
  }, [authCode, router, setUserInfo]);

  useEffect(() => {
    postKakaoAuth();
  }, [postKakaoAuth]);

  return (
    <div>
      <LoadingUI type="center" />
    </div>
  );
}

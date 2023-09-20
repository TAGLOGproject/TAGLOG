'use client';

import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import axiosInstance from '@/utils/axios';

export default function OAuth() {
  const searchParams = useSearchParams();

  const authCode = searchParams?.get('code');
  const getAccessTokenAndRedirect = useCallback(async () => {
    const data = await axiosInstance.post('/auth/kakao-login', { authCode });
  }, [authCode]);

  const getApi = async () => {
    const data = await fetch('/api/contact');
  };

  useEffect(() => {
    getAccessTokenAndRedirect();
  }, [getAccessTokenAndRedirect]);

  return (
    <div>
      <button type="button" onClick={getApi}>
        dddss
      </button>
      {authCode}
    </div>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import axiosInstance from '@/utils/axios';

export default function OAuth() {
  const searchParams = useSearchParams();

  const authCode = searchParams?.get('code');

  useEffect(() => {
    axiosInstance.post('/oauth/kakao-login', { authCode });
  });

  return <div>{authCode}</div>;
}

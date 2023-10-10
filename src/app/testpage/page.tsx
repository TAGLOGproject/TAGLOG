'use client';

import axiosInstance from '@/utils/axios';
import React from 'react';

export default function Test() {
  const onClickTestPublic = () => {
    console.log('onClickNextPublic', process.env.NEXT_PUBLIC_TEST);
  };
  const onClickTest = () => {
    console.log('onClickNextPublic', process.env.TEST);
  };
  const getApiTest = async () => {
    const res = await axiosInstance('/contact');
    console.log(res);
  };
  return (
    <div>
      <button type="button" onClick={onClickTestPublic}>
        test-nextPublic
      </button>
      <button type="button" onClick={onClickTest}>
        test
      </button>
      <button type="button" onClick={getApiTest}>
        getApi test
      </button>
    </div>
  );
}

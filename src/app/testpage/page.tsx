'use client';

import { instance } from '@/service/axios';
import React from 'react';

export default function Test() {
  const onClickTestPublic = () => {
    console.log('onClickNextPublic', process.env.NEXT_PUBLIC_TEST);
  };
  const onClickRedirect = () => {
    console.log('onClickRedirect', process.env.NEXT_PUBLIC_REDIRECT_URI);
  };
  const getApiTest = async () => {
    const res = await instance('/contact');
    console.log(res);
  };
  return (
    <div>
      <button type="button" onClick={onClickTestPublic}>
        test-nextPublic
      </button>
      <button type="button" onClick={onClickRedirect}>
        test
      </button>
      <button type="button" onClick={getApiTest}>
        getApi test
      </button>
    </div>
  );
}

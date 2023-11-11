import React from 'react';
import { KAKAO_AUTH_URL } from '@/constants/backend';

export default function SignIn() {
  return (
    <a href={KAKAO_AUTH_URL}>
      <button type="button">
        <span>카카오 로그인</span>
      </button>
    </a>
  );
}

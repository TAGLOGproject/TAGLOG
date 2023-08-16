// TODO: 소셜 로그인 UI
import { KAKAO_AUTH_URL } from '@/constants/oauth';
import React from 'react';

export default function SignIn() {
  return (
    <a href={KAKAO_AUTH_URL}>
      <button type="button">
        <span>카카오 로그인</span>
      </button>
    </a>
  );
}

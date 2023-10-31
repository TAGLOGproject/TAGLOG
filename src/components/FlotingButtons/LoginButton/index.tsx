'use client';

import React from 'react';
import useModalStore from '@/store/zustand/useModalStore';

export default function LoginButton() {
  const setModal = useModalStore((state) => state.setModal);

  const handleModal = () => {
    setModal();
  };

  return (
    <button type="button" onClick={handleModal}>
      로그인
    </button>
  );
}

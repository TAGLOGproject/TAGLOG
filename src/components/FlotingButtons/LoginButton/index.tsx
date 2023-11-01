'use client';

import React from 'react';
import useModalStore from '@/store/zustand/useModalStore';
import styles from './loginButtons.module.scss';

export default function LoginButton() {
  const setModal = useModalStore((state) => state.setModal);

  const handleModal = () => {
    setModal();
  };

  return (
    <button className={styles.loginButton} type="button" onClick={handleModal}>
      로그인
    </button>
  );
}

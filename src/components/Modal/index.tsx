'use client';

import React from 'react';
import Image from 'next/image';

import useModalStore from '@/store/zustand/useModalStore';
import { KAKAO_AUTH_URL } from '@/constants/backend';
import styles from './modal.module.scss';
import Typography from '../Typography';

export default function Modal() {
  const setModal = useModalStore((state) => state.setModal);

  const handleModal = () => {
    setModal();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.logo}>
          <Typography variant="h2">TAGLOG</Typography>
        </div>
        <button
          className={styles.exitModalBtn}
          type="button"
          onClick={() => {
            handleModal();
          }}
        >
          x
        </button>
        <a className={styles.signinBtn} href={KAKAO_AUTH_URL}>
          <Image src="/kakao_login_large_wide.png" alt="signinButton" width={400} height={60} />
        </a>
      </div>
    </div>
  );
}

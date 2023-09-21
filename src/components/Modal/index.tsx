'use client';

import React from 'react';
import Image from 'next/image';

import useModalStore from '@/store/zustand/useModalStore';
import { KAKAO_AUTH_URL } from '@/constants/backend';
import styles from './modal.module.scss';

export default function Modal() {
  const setModal = useModalStore((state) => state.setModal);

  const handleModal = () => {
    setModal();
  };
  console.log({ KAKAO_AUTH_URL });
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.exitModalBtnWrapper}>
          <button
            className={styles.exitModalBtn}
            type="button"
            onClick={() => {
              handleModal();
            }}
          >
            <Image src="/svgs/cross-mark.png" alt="exitButton" width={25} height={25} />
          </button>
        </div>
        <a href={KAKAO_AUTH_URL}>
          <div className={styles.signinBtn}>
            <Image
              src="/svgs/kakao_login_medium_wide.png"
              alt="signinButton"
              width={200}
              height={40}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

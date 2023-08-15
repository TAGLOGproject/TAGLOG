import { KAKAO_AUTH_URL } from '@/constants/oauth';
import React from 'react';
import Image from 'next/image';
import styles from './modal.module.scss';

export default function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.exitModalBtnWrapper}>
          <Image
            src="/svgs/cross-mark.png"
            alt="exitButton"
            width={25}
            height={25}
            className={styles.exitModalBtn}
          />
        </div>
        <button type="button" className={styles.signinBtn}>
          <a href={KAKAO_AUTH_URL}>
            <Image
              src="/svgs/kakao_login_medium_wide.png"
              alt="signinButton"
              width={200}
              height={40}
            />
          </a>
        </button>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import useModalStore from '@/store/zustand/useModalStore';
import useStore from '@/store/zustand/useStore';
import useAuthStore from '@/store/zustand/useAuthStore';
import Typography from '@/components/Typography';
import styles from './loginButtons.module.scss';

export default function LoginButton() {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const setModal = useModalStore((state) => state.setModal);
  const userInfo = useStore(useAuthStore, (state) => state.userInfo);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    setModal();
  };

  const handleSignOutDropDown = () => {
    setDropdownVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {userInfo ? (
        <button type="button" className={styles.userInfo} onClick={handleSignOutDropDown}>
          <Typography variant="body2">{userInfo.email}</Typography>
        </button>
      ) : (
        <button className={styles.loginButton} type="button" onClick={handleModal}>
          <Typography variant="body2"> 로그인</Typography>
        </button>
      )}

      {isDropdownVisible && (
        <div className={styles.dropdown} ref={dropdownRef}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Typography variant="body2">로그아웃</Typography>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

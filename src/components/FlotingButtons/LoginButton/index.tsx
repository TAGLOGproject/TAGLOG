'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import useModalStore from '@/store/zustand/useModalStore';
import useStore from '@/store/zustand/useStore';
import useAuthStore from '@/store/zustand/useAuthStore';
import Typography from '@/components/Typography';
import { signoutApi } from '@/service/sign';
import styles from './loginButtons.module.scss';

export default function LoginButton() {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const setModal = useModalStore((state) => state.setModal);
  const userInfo = useStore(useAuthStore, (state) => state.userInfo);
  const setUserInfoInit = useAuthStore((state) => state.setUserInfoInit);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    setModal();
  };

  const handleSignOutDropDown = () => {
    setDropdownVisible(true);
  };

  const handleSignOutClick = async () => {
    try {
      if (userInfo && setUserInfoInit) {
        const param = { userId: userInfo.userid };
        await signoutApi(param);
        setUserInfoInit();
        setDropdownVisible(false);
      }
    } catch (error) {
      throw Error;
    }
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
      {userInfo?.email ? (
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
              <button type="button" onClick={handleSignOutClick}>
                <Typography variant="body2">로그아웃</Typography>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

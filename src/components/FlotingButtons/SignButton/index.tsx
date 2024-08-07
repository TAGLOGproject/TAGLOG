'use client';

import React, { useState, useEffect, useRef } from 'react';
import useModalStore from '@/store/zustand/useModalStore';
import useStore from '@/store/zustand/useStore';
import useAuthStore from '@/store/zustand/useAuthStore';
import Typography from '@/components/Typography';
import { signOutApi } from '@/service/sign';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import styles from './SignButton.module.scss';

export default function SignButton() {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const router = useRouter();

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
        await signOutApi(param);
        setUserInfoInit();
        setDropdownVisible(false);
        toast.success('로그아웃 되었습니다');
        router.push('/');
      }
    } catch (error: any) {
      toast.error(error);
      router.push('/');
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
        <button className={styles.signInButton} type="button" onClick={handleModal}>
          <Typography variant="body2"> 로그인</Typography>
        </button>
      )}

      {isDropdownVisible && (
        <div className={styles.dropdown} ref={dropdownRef}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <button type="button" className={styles.signOutButton} onClick={handleSignOutClick}>
                <Typography variant="body2">로그아웃</Typography>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

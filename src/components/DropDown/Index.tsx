'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './DropDown.module.scss';
import Hamburger from '../../assets/svg/hamburger.svg';

function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const onOpenDropDown = () => {
    setIsDropDownOpen(true);
  };

  const onCloseDropDown = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        onCloseDropDown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.DropDownContainer} ref={dropDownRef}>
      <Image
        onClick={onOpenDropDown}
        src="/svgs/hambuger.svg"
        width={24}
        height={24}
        alt="hamburger"
      />
      {isDropDownOpen && (
        <ul className={styles.DropDownWrapper}>
          <li className={styles.DropDownMenu}>settings</li>
          <li className={styles.DropDownMenu}>내가 작성한 글</li>
          <li className={styles.DropDownMenu}>로그아웃</li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;

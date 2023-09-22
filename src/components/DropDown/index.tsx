'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './dropdown.module.scss';

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
    <div className={styles.dropDownContainer} ref={dropDownRef}>
      <Image
        src="/svg/hamberger.svg"
        alt="hamberger"
        width={16}
        height={16}
        onClick={onOpenDropDown}
      />
      {isDropDownOpen && (
        <ul className={styles.dropdownWrapper}>
          <li className={styles.dropdownMenu}>settings</li>
          <li className={styles.dropdownMenu}>내가 작성한 글</li>
          <li className={styles.dropdownMenu}>로그아웃</li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;

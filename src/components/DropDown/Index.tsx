'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './dropDown.module.scss';
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
    <div className={styles.dropDownContainer} ref={dropDownRef}>
      <Hamburger onClick={onOpenDropDown} />
      {isDropDownOpen && (
        <ul className={styles.dropDownWrapper}>
          <li className={styles.dropDownMenu}>settings</li>
          <li className={styles.dropDownMenu}>내가 작성한 글</li>
          <li className={styles.dropDownMenu}>로그아웃</li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;

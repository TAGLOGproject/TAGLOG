'use client';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
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
      <Hamburger onClick={onOpenDropDown} />
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

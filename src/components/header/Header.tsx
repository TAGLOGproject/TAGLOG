'use client';

import { useState } from 'react';
import styles from '../../app/page.module.scss';
import Hamburger from '../../assets/svg/hamburger.svg';
import DropDown from './DropDown';

function Header() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const onShowDropdown = () => {
    setShowDropdown(true);
  };

  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>TAGLOG</h2>
          <Hamburger onClick={onShowDropdown} />
          {showDropdown && <DropDown />}
        </div>
      </header>
    </main>
  );
}

export default Header;

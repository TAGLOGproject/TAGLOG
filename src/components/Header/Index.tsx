'use client';

import DropDown from '../DropDown/Index';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>TAGLOG</h2>
        <DropDown />
      </div>
    </header>
  );
}

export default Header;

'use client';

import styles from './Header.module.scss';
import Hamburger from '../assets/svg/hamburger.svg';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>TAGLOG</h2>
        <Hamburger className={styles.DropdownBtn} />
      </div>
    </header>
  );
}

export default Header;

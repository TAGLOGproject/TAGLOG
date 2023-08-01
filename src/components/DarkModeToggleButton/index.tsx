'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './darkModeToggleButton.module.scss';

export default function DarkModeToggleButton() {
  const [theme, setTheme] = useState<string>('light');

  const onToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button type="button" onClick={onToggleTheme} className={styles.toggleThemeBtn}>
      {theme === 'light' ? (
        <Image src="/svgs/dark.svg" alt="toggleButton" width={48} height={48} />
      ) : (
        <Image src="/svgs/light.svg" alt="toggeleButton" width={48} height={48} />
      )}
    </button>
  );
}

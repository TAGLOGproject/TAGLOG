'use client';

import Image from 'next/image';
import useToggleTheme from '@/hooks/useToggleTheme';
import styles from './toggleThemeButton.module.scss';

export default function ToggleThemeButton() {
  const { theme, onToggleTheme } = useToggleTheme();
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

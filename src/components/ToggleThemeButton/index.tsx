'use client';

import Image from 'next/image';
import useThemeStore from '@/store/zustand/useThemeStore';

import useStore from '@/store/zustand/useStore';
import styles from './toggleThemeButton.module.scss';

export default function ToggleThemeButton() {
  const theme = useStore(useThemeStore, (state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const handleButtonClick = () => {
    toggleTheme();
  };

  return (
    <button type="button" onClick={handleButtonClick} className={styles.toggleThemeBtn}>
      {theme === 'light' ? (
        <Image src="/svgs/dark.svg" alt="toggleButton" width={48} height={48} />
      ) : (
        <Image src="/svgs/light.svg" alt="toggeleButton" width={48} height={48} />
      )}
    </button>
  );
}

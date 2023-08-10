'use client';

import Image from 'next/image';
// import { useAppDispatch, useAppSelector } from '@/store/redux';
// import { toggleTheme } from '@/store/redux/slice/themeSlice';

import useStore from '@/store/zustand/store';
import styles from './toggleThemeButton.module.scss';

// type ThemeState = {
//   theme: 'light' | 'dark';
// };

export default function ToggleThemeButton() {
  // const { theme } = useAppSelector((state) => state.themeState);

  // const dispatch = useAppDispatch();

  // const onToggleTheme = () => {
  //   dispatch(toggleTheme());
  // };

  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  // const { theme, toggleTheme } = useStore();

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

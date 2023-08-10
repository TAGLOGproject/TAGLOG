'use client';

import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/redux';
import { toggleTheme } from '@/store/redux/slice/themeSlice';
import styles from './toggleThemeButton.module.scss';

export default function ToggleThemeButton() {
  const { theme } = useAppSelector((state) => state.themeState);

  const dispatch = useAppDispatch();

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

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

'use client';

import React from 'react';
import classNames from 'classnames';
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
    <div
      className={
        theme === 'dark'
          ? classNames(styles.toggleContainer, styles.toggleContainerDark)
          : styles.toggleContainer
      }
    >
      <div
        className={
          theme === 'dark' ? classNames(styles.toggleBar, styles.toggleBarDark) : styles.toggleBar
        }
      >
        <button
          type="button"
          aria-label="Toggle Theme"
          onClick={handleButtonClick}
          className={
            theme === 'dark'
              ? classNames(styles.toggleHandler, styles.toggleHandlerDark)
              : styles.toggleHandler
          }
        />
      </div>
    </div>
  );
}

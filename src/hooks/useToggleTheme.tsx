'use client';

import { useAppDispatch, useAppSelector } from '@/store/redux';
import { toggleTheme } from '@/store/redux/slice/themeSlice';
import { useEffect } from 'react';

const useToggleTheme = () => {
  const theme = useAppSelector((state) => state.themeReducer.theme);
  const dispatch = useAppDispatch();

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useToggleTheme;

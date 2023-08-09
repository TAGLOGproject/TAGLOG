'use client';

import { useEffect, useState } from 'react';

const useToggleTheme = () => {
  const [theme, setTheme] = useState<string>('light');

  const onToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useToggleTheme;

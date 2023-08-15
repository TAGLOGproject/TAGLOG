'use client';

import React, { useEffect } from 'react';
import useStore from '@/store/zustand/useStore';
import useThemeStore from '@/store/zustand/useThemeStore';

function Provider({ children }: { children: React.ReactNode }) {
  const theme = useStore(useThemeStore, (state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  });
  return <div>{children}</div>;
}

export default Provider;

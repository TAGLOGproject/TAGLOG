'use client';

import React, { useEffect } from 'react';
import useStore from '@/store/zustand/useStore';
import useThemeStore from '@/store/zustand/useThemeStore';
import useModalStore from '@/store/zustand/useModalStore';
import Modal from '../Modal';

function Provider({ children }: { children: React.ReactNode }) {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const theme = useStore(useThemeStore, (state) => state.theme);

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme);
  });
  return (
    <>
      {children}
      {isModalOpen ? <Modal /> : null}
    </>
  );
}

export default Provider;

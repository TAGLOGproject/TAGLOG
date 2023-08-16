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
    document.documentElement.setAttribute('data-theme', theme);
  });
  return (
    <div>
      {children}
      {isModalOpen ? <Modal /> : ''}
    </div>
  );
}

export default Provider;

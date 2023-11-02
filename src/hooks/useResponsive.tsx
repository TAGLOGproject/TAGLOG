'use client';

import { useEffect, useState } from 'react';
import { TABLET_WIDTH } from '@/constants';

/**
 * useResponsive
 * @description 반응형 웹을 위한 커스텀 훅
 * isDesktop: 데스크탑 여부
 * windowWidth: 창 너비
 * @returns {object} { isDesktop: boolean, windowWidth: number }
 */
const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      const isDesktopWidth = innerWidth > TABLET_WIDTH;
      setIsDesktop(isDesktopWidth);
      setWindowWidth(innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize); // 창 크기 변경 이벤트 감지

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  return { isDesktop, windowWidth };
};

export default useResponsive;

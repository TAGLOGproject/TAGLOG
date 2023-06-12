import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      const isDesktopWidth = innerWidth > 768;
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

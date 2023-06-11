import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopWidth = window.innerWidth > 768;
      setIsDesktop(isDesktopWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize); // 창 크기 변경 이벤트 감지

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

  return { isDesktop };
};

export default useResponsive;

import { useAppSelector } from '@/store/redux';
import { ReactNode, useEffect } from 'react';

function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  // useAppSelector 훅을 사용 >
  // 구조 분해 할당 사용 >
  // redux store에서 theme값 추출
  const { theme } = useAppSelector((state) => state.themeState);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <div>{children}</div>;
}

export default ThemeProvider;

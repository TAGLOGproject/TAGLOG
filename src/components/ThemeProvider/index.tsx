import { useAppSelector } from '@/store/redux';
import { ReactNode, useEffect } from 'react';

function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const theme = useAppSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <div>{children}</div>;
}

export default ThemeProvider;

'use client';

import useResponsive from '@/hooks/useResponsive';

export default function Home(props: any) {
  const { isDesktop, windowWidth } = useResponsive();

  return (
    <div>
      home
      {isDesktop && <div>desktop</div>}
      {!isDesktop && <div>mobile</div>}
      {windowWidth}
    </div>
  );
}

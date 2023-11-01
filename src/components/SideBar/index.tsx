'use client';

import Image from 'next/image';
import useThemeStore from '@/store/zustand/useThemeStore';
import useStore from '@/store/zustand/useStore';
import { MOCK_USER_DATA_1, MOCK_USER_DATA_2, ROUTES } from '@/constants';
import SnsButtons from '../SnsButtons';
import styles from './sidebar.module.scss';
import Typography from '../Typography';
import SideBarLink from './SideBarLink';
import Divider from '../Divider';
import SideBarUserInfo from './SideBarUserInfo';

export default function SideBar() {
  const theme = useStore(useThemeStore, (state) => state.theme);

  return (
    <aside className={styles.sidebarContainer}>
      <Typography variant="h2" className={styles.sidebarTitle}>
        TAGLOG
      </Typography>
      <div className={styles.avatarAnimationWrapper}>
        <div className={styles.avatarWrapper}>
          <Image src="/avatar.jpg" alt="avatar" width="200" height="200" />
        </div>
        <div className={styles.rotateWrapper}>
          <div className={styles.circle} />
        </div>
      </div>
      <Typography variant="body1" className={styles.sidebarsubTitle}>
        FE 개발자들의 블로그 입니다.
      </Typography>
      <SideBarUserInfo user={MOCK_USER_DATA_1} theme={theme} />
      <Divider space={8} />
      <SideBarUserInfo user={MOCK_USER_DATA_2} theme={theme} />
      <Divider space={8} />
      <div className={styles.routesContainer}>
        {ROUTES.map((v) => {
          return <SideBarLink key={v.name} href={v.path} name={v.name} />;
        })}
      </div>
    </aside>
  );
}

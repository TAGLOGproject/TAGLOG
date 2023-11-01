'use client';

import Image from 'next/image';
import { ROUTES } from '@/constants';
import useThemeStore from '@/store/zustand/useThemeStore';
import useStore from '@/store/zustand/useStore';
import SnsButtons from '../SnsButtons';
import styles from './sidebar.module.scss';
import Typography from '../Typography';
import SideBarLink from './SideBarLink';
import Divider from '../Divider';

interface IUerData {
  name: string;
  subtitle: string;
  contents: string;
  avatar: string;
  sns: {
    type: 'github' | 'linkedin' | 'mail';
    uri: string;
  }[];
}
const MOCKDATA: IUerData = {
  name: 'joonhyuk',
  subtitle: 'Frontend Developer',
  contents: '눈에 띄지 않는 것의 가치',
  avatar: '/src/assets/image/avatar.jpeg',
  sns: [
    {
      type: 'github',
      uri: 'https://github.com/anshqhsh',
    },
    {
      type: 'linkedin',
      uri: 'https://github.com/anshqhsh',
    },
    { type: 'mail', uri: 'https://github.com/anshqhsh' },
  ],
};

export default function SideBar() {
  const theme = useStore(useThemeStore, (state) => state.theme);

  return (
    <aside className={styles.sidebarContainer}>
      <Typography variant="h2" className={styles.sidebarTitle}>
        TAGLOG
      </Typography>
      <div className={styles.avatarAnimationWrapper}>
        <div className={styles.avatarWrapper}>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width="200"
            height="200"
            // sizes="(max-width: 768px) 100px"
          />
        </div>
        <div className={styles.rotateWrapper}>
          <div className={styles.circle} />
        </div>
      </div>
      <Typography variant="body1" className={styles.sidebarsubTitle}>
        프론트엔드 개발자의 블로그 입니다.
      </Typography>
      <Typography variant="body1" className={styles.sidebarName}>
        joonhyuk
      </Typography>
      <div className={styles.sidebarButtons}>
        {MOCKDATA.sns.map((v) => {
          return <SnsButtons key={v.type} type={v.type} uri={v.uri} theme={theme} />;
        })}
      </div>
      <Divider space={16} />
      <Typography variant="body1" className={styles.sidebarName}>
        dasol
      </Typography>
      <div className={styles.sidebarButtons}>
        {MOCKDATA.sns.map((v) => {
          return <SnsButtons key={v.type} type={v.type} uri={v.uri} theme={theme} />;
        })}
      </div>
      <Divider space={16} />
      <div className={styles.routesContainer}>
        {ROUTES.map((v) => {
          return <SideBarLink key={v.name} href={v.path} name={v.name} />;
        })}
      </div>
    </aside>
  );
}

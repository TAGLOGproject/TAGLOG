'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SnsButtons from '../SnsButtons';
import styles from './sidebar.module.scss';
import Typography from '../Typography';

interface IUerData {
  name: string;
  subtitle: string;
  avatar: string;
  sns: {
    type: 'github' | 'linkedin' | 'mail';
    uri: string;
  }[];
}
const MOCKDATA: IUerData = {
  name: 'joonhyuk',
  subtitle: 'Frontend Developer',

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
  const [theme, setTheme] = useState<string>('light');

  const onToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <aside className={styles.sidebarContainer}>
      <button type="button" onClick={onToggleTheme} className={styles.toggleThemeBtn}>
        {theme === 'light' ? (
          <Image src="/svgs/dark.svg" alt="toggleButton" width={48} height={48} />
        ) : (
          <Image src="/svgs/light.svg" alt="toggeleButton" width={48} height={48} />
        )}
      </button>
      <Typography variant="h3" className={styles.sidebarTitle}>
        눈에 띄지 않는 것의 가치
      </Typography>
      <div className={styles.avatarAnimationWrapper}>
        <div className={styles.avatarWrapper}>
          <Image
            src="/avatar.jpeg"
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
      <Typography variant="h2" className={styles.sidebarsubTitle}>
        {MOCKDATA.subtitle}
      </Typography>
      <Typography variant="h2" className={styles.sidebarName}>
        {MOCKDATA.name}
      </Typography>
      <div className={styles.sidebarButtons}>
        {MOCKDATA.sns.map((v) => {
          return <SnsButtons type={v.type} uri={v.uri} />;
        })}
      </div>
    </aside>
  );
}

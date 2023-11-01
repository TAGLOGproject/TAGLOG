import SnsButtons from '@/components/SnsButtons';
import Typography from '@/components/Typography';
import IUserData from '@/types/api/user';
import styles from '../sidebar.module.scss';

export default function SideBarUserInfo({
  user,
  theme,
}: {
  user: IUserData;
  theme?: 'light' | 'dark';
}) {
  return (
    <>
      <Typography variant="body1" className={styles.sidebarName}>
        {user.name}
      </Typography>
      <Typography variant="body3" className={styles.userInfoContents}>
        {user.contents}
      </Typography>
      <div className={styles.sidebarButtons}>
        {user.sns.map((v) => {
          return <SnsButtons key={v.type} type={v.type} uri={v.uri} theme={theme} />;
        })}
      </div>
    </>
  );
}

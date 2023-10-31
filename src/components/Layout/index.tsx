import SideBar from '../SideBar';
import styles from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.contentsWrapper}>
      <SideBar />
      <div className={styles.mainWrapper}>
        <div className={styles.article}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;

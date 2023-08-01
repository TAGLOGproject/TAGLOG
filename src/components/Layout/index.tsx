import SideBar from '../SideBar';
import DarkModeToggleButton from '../DarkModeToggleButton';
import styles from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.contentsWrapper}>
        <DarkModeToggleButton />
        <SideBar />
        <div className={styles.mainWrapper}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;

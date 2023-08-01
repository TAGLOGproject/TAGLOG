import SideBar from '../SideBar';
import ToggleThemeButton from '../ToggleThemeButton';
import styles from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.contentsWrapper}>
        <ToggleThemeButton />
        <SideBar />
        <div className={styles.mainWrapper}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;

import styles from './page.module.scss';
import Hamburger from '../assets/svg/hamburger.svg';

export default function Home(props: any) {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>TAGLOG</h2>
          <Hamburger />
        </div>
      </header>
    </main>
  );
}

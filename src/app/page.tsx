import styles from './page.module.scss';

export default function Home(props: any) {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>TAGLOG</h2>
          <button className={styles.toggleButton} type="button">
            Button
          </button>
        </div>
      </header>
    </main>
  );
}

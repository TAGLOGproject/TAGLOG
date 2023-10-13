import styles from './loadingUI.module.scss';

function LoadingUI({ type = 'center' }: { type: 'center' | 'component' }) {
  if (type === 'center') {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingIcon} />
      </div>
    );
  }
  return (
    <div className={styles.componentContainer}>
      <div className={styles.loadingIcon} />
    </div>
  );
}

export default LoadingUI;

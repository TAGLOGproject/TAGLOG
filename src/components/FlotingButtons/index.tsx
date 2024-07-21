import styles from './floatingButtons.module.scss';
import SignButton from './SignButton';
import ToggleThemeButton from './ToggleThemeButton';

export default function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      <SignButton />
      <ToggleThemeButton />
    </div>
  );
}

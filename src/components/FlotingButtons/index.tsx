import styles from './floatingButtons.module.scss';
import LoginButton from './SignInButton';
import ToggleThemeButton from './ToggleThemeButton';

export default function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      <LoginButton />
      <ToggleThemeButton />
    </div>
  );
}

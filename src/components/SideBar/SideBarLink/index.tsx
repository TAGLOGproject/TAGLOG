import Link from 'next/link';
import styles from './sidebarLink.module.scss';

interface IProps {
  name: string;
  href: string;
}
export default function SideBarLink({ href, name }: IProps) {
  return (
    <div className={styles.linkWrap}>
      <Link href={href}>{name}</Link>
    </div>
  );
}

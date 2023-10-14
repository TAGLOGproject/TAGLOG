import Link from 'next/link';
import Typography from '@/components/Typography';
import { ICard } from '@/types/card';
import styles from './cardItem.module.scss';

function CardItem({ id }: ICard) {
  return (
    <div className={styles.container}>
      <Link href={`/card-details/${id}`} />
      <Typography variant="body3" className={styles.cardDate}>
        Oct 11. 2023
      </Typography>
      <Typography variant="title1" className={styles.cardTitle}>
        개발이란
      </Typography>
      <Typography variant="body1" className={styles.cardContent}>
        개발이란 무엇일까
      </Typography>
      <div className={styles.tagContainer}>
        <div className={styles.tag}>
          <Typography variant="body4">React</Typography>
        </div>
        <div className={styles.tag}>
          <Typography variant="body4">TypeScript</Typography>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

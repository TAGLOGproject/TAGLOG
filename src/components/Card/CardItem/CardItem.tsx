import Typography from '@/components/Typography';
import styles from './cardItem.module.scss';

function CardItem() {
  return (
    <div className={styles.container}>
      <Typography variant="body3" className={styles.careDate}>
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

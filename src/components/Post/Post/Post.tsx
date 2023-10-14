import Link from 'next/link';
import Typography from '@/components/Typography';
import { IPostListData } from '@/types/api/post';
import styles from './post.module.scss';

function Post(props: IPostListData) {
  const { post_id: postId } = props;

  return (
    <div className={styles.container}>
      <Link href={`/post-details/${postId}`} />
      <Typography variant="body3" className={styles.postDate}>
        Oct 11. 2023
      </Typography>
      <Typography variant="title1" className={styles.postTitle}>
        개발이란
      </Typography>
      <Typography variant="body1" className={styles.postContent}>
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

export default Post;

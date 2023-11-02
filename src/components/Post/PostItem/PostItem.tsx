import Link from 'next/link';
import Typography from '@/components/Typography';
import { IPost } from '@/types/api/post';
import { formatTime } from '@/utils/common/dayjs';
import Tag from '@/components/Tag';
import styles from './postItem.module.scss';

function PostItem({ postData }: { postData: IPost }) {
  const { post_id: postId, title, subtitle, tags, created_at: createdAt } = postData;

  return (
    <Link className={styles.container} href={`/post-details/${postId}`}>
      <Typography variant="body3" className={styles.postDate}>
        {formatTime(createdAt)}
      </Typography>
      <Typography variant="title1" className={styles.postTitle}>
        {title}
      </Typography>
      <Typography variant="body1" className={styles.postSubtitle}>
        {subtitle}
      </Typography>
      <div className={styles.tagContainer}>{tags && tags.map((tag) => <Tag tag={tag} />)}</div>
    </Link>
  );
}

export default PostItem;

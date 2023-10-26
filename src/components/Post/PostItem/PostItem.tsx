import Link from 'next/link';
import Typography from '@/components/Typography';
import { IPost } from '@/types/api/post';
import { formatTime } from '@/utils/dayjs';
import styles from './postItem.module.scss';

function PostItem({ postData }: { postData: IPost }) {
  const { post_id: postId, title, subtitle, tags, created_at: createdAt } = postData;

  return (
    <div className={styles.container}>
      <Link href={`/post-details/${postId}`} />
      <Typography variant="body3" className={styles.postDate}>
        {formatTime(createdAt)}
      </Typography>
      <Typography variant="title1" className={styles.postTitle}>
        {title}
      </Typography>
      <Typography variant="body1" className={styles.postContent}>
        {subtitle}
      </Typography>
      <div className={styles.tagContainer}>
        {tags &&
          tags.map((item) => (
            <div key={item} className={styles.tag}>
              <Typography variant="body4">{item}</Typography>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PostItem;

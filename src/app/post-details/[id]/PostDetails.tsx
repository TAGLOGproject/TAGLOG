import React from 'react';
import Image from 'next/image';
import Typography from '@/components/Typography';
import MarkdownBlogViewer from '@/components/MarkdownBlogViewer';
import { IPost } from '@/types/api/post';
import Tag from '@/components/Tag';
import styles from './postDetails.module.scss';

function PostDetails({ data }: { data: IPost }) {
  const { title, tags, body, thumbnail } = data;
  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.tagWrapper}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      {thumbnail && (
        <div className={styles.imageWrapper}>
          <Image src={thumbnail} alt="thumbnail" width={600} height={400} />
        </div>
      )}

      <MarkdownBlogViewer postData={body} />
    </div>
  );
}

export default PostDetails;

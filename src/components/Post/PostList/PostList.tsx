import React from 'react';
import { IPostListData } from '@/types/api/post';
import styles from './postList.module.scss';
import Post from '../Post/Post';

function PostList({ postList }: { postList: IPostListData[] }) {
  return (
    <div className={styles.container}>
      {postList.map((item) => (
        <Post key={item.post_id} postData={item} />
      ))}
    </div>
  );
}

export default PostList;

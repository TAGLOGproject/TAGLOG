import React from 'react';
import styles from './postList.module.scss';
import Post from '../Post/Post';

function PostList() {
  return (
    <div className={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostList;

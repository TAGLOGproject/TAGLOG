import React from 'react';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';
import styles from './postList.module.scss';
import Post from '../Post/Post';

function PostList() {
  const { filteredPostList } = useFilteredPostsStore();

  return (
    <div className={styles.container}>
      {filteredPostList.map((item) => (
        <Post key={item.post_id} postData={item} />
      ))}
    </div>
  );
}

export default PostList;

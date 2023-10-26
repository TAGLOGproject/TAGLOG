import React, { useState } from 'react';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';
import Pagination from '@/components/Pagination';
import styles from './postList.module.scss';
import PostItem from '../PostItem/PostItem';

function PostList() {
  const { filteredPostList } = useFilteredPostsStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPagePosts = filteredPostList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className={styles.container}>
        {currentPagePosts.map((item) => (
          <PostItem key={item.post_id} postData={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={filteredPostList.length}
        postsPerPage={postsPerPage}
      />
    </>
  );
}

export default PostList;

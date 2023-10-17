import React, { useState } from 'react';
import useFilteredPostsStore from '@/store/zustand/useFilteredPostsStore';
import Pagination from '@/components/Pagination';
import useFetchPostList from '@/hooks/useFetchPostList';
import styles from './postList.module.scss';
import Post from '../Post/Post';

function PostList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const { filteredPostList } = useFilteredPostsStore();

  const currentPagePosts = filteredPostList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className={styles.container}>
        {currentPagePosts.map((item) => (
          <Post key={item.post_id} postData={item} />
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

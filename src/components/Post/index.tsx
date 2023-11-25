'use client';

import React from 'react';
import useFetchPostList from '@/hooks/useFetchPostList';
import LoadingUI from '../LoadingUI';
import PostFilterModal from './PostFilterModal/PostFilterModal';
import PostList from './PostList/PostList';

function Post() {
  const { isLoading } = useFetchPostList();

  return (
    <>
      {isLoading ? null : <PostFilterModal />}
      {isLoading ? <LoadingUI type="component" /> : <PostList />}
    </>
  );
}

export default Post;

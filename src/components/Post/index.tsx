'use client';

import React from 'react';
import useFetchPostList from '@/hooks/useFetchPostList';
import LoadingUI from '../LoadingUI';
import PostFilterDropdown from './PostFilterDropdown/PostFilterDropdown';
import PostList from './PostList/PostList';

function Post() {
  const { isLoading } = useFetchPostList();

  return (
    <>
      {isLoading ? null : <PostFilterDropdown />}
      {isLoading ? <LoadingUI type="component" /> : <PostList />}
    </>
  );
}

export default Post;

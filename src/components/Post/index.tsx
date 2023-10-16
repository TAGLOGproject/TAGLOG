'use client';

import React from 'react';
import useFetchPostList from '@/hooks/useFetchPostList';

import LoadingUI from '../LoadingUI';
import PostFilter from './PostFilter/PostFilter';
import PostList from './PostList/PostList';

function Post() {
  const { isLoading } = useFetchPostList();

  return (
    <>
      {isLoading ? null : <PostFilter />}
      {isLoading ? <LoadingUI type="center" /> : <PostList />}
    </>
  );
}

export default Post;

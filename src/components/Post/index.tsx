'use client';

import React from 'react';
import useFetchPostList from '@/hooks/useFetchPostList';
import LoadingUI from '../LoadingUI';
import PostFilter from './PostFilter/PostFilter';
import PostList from './PostList/PostList';

function Post() {
  const { postListData, isLoading } = useFetchPostList();
  const postList = postListData;

  return (
    <>
      {isLoading ? null : <PostFilter />}
      {isLoading ? <LoadingUI type="center" /> : <PostList postList={postList} />}
    </>
  );
}

export default Post;

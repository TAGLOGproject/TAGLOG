'use client';

import React from 'react';
import useFetchPostList from '@/hooks/useFetchPostList';
import LoadingUI from '../LoadingUI';
import PostFilter from './PostFilter/PostFilter';
import PostList from './PostList/PostList';

function Post() {
  const { postListData, isLoading } = useFetchPostList();
  console.log('postListData', postListData);

  return (
    <>
      {isLoading ? null : <PostFilter />}
      {isLoading ? <LoadingUI type="center" /> : <PostList postList={postListData} />}
    </>
  );
}

export default Post;

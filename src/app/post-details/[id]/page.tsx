'use client';

import useFetchPost from '@/hooks/useFetchPost';
import PostDetails from './PostDetails';
import LoadingUI from '../../../components/LoadingUI';

function PostDetailsPage() {
  const { isLoading } = useFetchPost();

  return isLoading ? <LoadingUI type="component" /> : <PostDetails />;
}

export default PostDetailsPage;

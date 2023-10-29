'use client';

import useFetchPost from '@/hooks/useFetchPost';
import PostDetails from './PostDetails';
import LoadingUI from '../../../components/LoadingUI';

function PostDetailsPage() {
  const { isLoading, data } = useFetchPost();

  return isLoading ? <LoadingUI type="component" /> : <PostDetails data={data} />;
}

export default PostDetailsPage;

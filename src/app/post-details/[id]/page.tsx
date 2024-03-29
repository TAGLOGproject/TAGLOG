'use client';

import useFetchPost from '@/hooks/useFetchPost';
import { IPost } from '@/types/api/post';
import PostDetails from './PostDetails';
import LoadingUI from '../../../components/LoadingUI';

function PostDetailsPage({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { isLoading, data } = useFetchPost(postId);

  return isLoading ? <LoadingUI type="component" /> : <PostDetails data={data as IPost} />;
}

export default PostDetailsPage;

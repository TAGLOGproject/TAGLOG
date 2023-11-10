import React from 'react';
import Image from 'next/image';
import Typography from '@/components/Typography';
import MarkdownBlogViewer from '@/components/MarkdownBlogViewer';
import { IPost } from '@/types/api/post';
import Tag from '@/components/Tag';
import { deletePostApi } from '@/service/post';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useStore from '@/store/zustand/useStore';
import useAuthStore from '@/store/zustand/useAuthStore';
import useUpdatePostStore from '@/store/zustand/useUpdatePostStore';
import styles from './postDetails.module.scss';

function PostDetails({ data }: { data: IPost }) {
  const router = useRouter();
  const setPostData = useUpdatePostStore((state) => state.setPostData);
  const userInfo = useStore(useAuthStore, (state) => state.userInfo);
  const userId = String(userInfo?.userid);

  if (data === undefined) return null;

  const { title, tags, body, thumbnail, post_id: postId, user } = data;
  const userid = user?.userid;

  const handleUpdatePostClick = () => {
    setPostData(data);
    router.push(`/editor?id=${postId}`);
  };

  const handleDeletePostClick = async () => {
    try {
      await deletePostApi(postId);
      toast.success('삭제가 완료되었습니다');
      router.push('/');
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error('Not Found : 올바르지 않은 접근입니다');
        router.push('/');
      }
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.tagWrapper}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
        {userId === userid && (
          <div className={styles.modifyButtons}>
            <button type="button" className={styles.button} onClick={handleUpdatePostClick}>
              수정
            </button>
            <button type="button" className={styles.button} onClick={handleDeletePostClick}>
              삭제
            </button>
          </div>
        )}
      </div>
      {thumbnail && (
        <div className={styles.imageWrapper}>
          <Image src={thumbnail} alt="thumbnail" width={600} height={400} />
        </div>
      )}

      <MarkdownBlogViewer postData={body} />
    </div>
  );
}

export default PostDetails;

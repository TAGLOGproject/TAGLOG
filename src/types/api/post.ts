export interface IPostListData {
  id: string;
  post_id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  likeCnt: number;
  user?: {
    userId: string;
    nickName: string;
    thumbnail: string;
  };
  createdAt: string;
  editedAt: string;
}

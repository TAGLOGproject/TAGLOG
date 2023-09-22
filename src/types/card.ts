export interface ICard {
  id: number;
  image: string;
  title: string;
  description: string;
  createdAt: string;
  CommentCnt: number;
  likeCnt: number;
  user: {
    userId: string;
    nickName: string;
    thumnail: string;
  };
  tag: {
    userId: string;
    nickName: string;
    thumnail: string;
  };
}

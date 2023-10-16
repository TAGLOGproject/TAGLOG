export interface IPostListData {
  _id: string;
  post_id: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  tags: string[];
  like_count: number;
  comments_count: number;
  user?: {
    userId: string;
    nickName: string;
    thumbnail: string;
  };
  created_at: string;
  edited_at: string;
}

export interface IReqPost {
  title: string;
  subtitle: string;
  body: string;
  thumbnail: string;
  tags: Array<string>;
}

export interface IPost extends IReqPost {
  _id: string;
  post_id: string;
  created_at: string;
  edited_at: string;
  is_temp: boolean;
  comments: object;
  comments_count: number;
  user?: {
    userId: string;
    nickName: string;
    thumbnail: string;
  };
  like_count: number;
  tag_recommend_post: Array<any>;
}

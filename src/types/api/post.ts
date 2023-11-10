import { IUserData } from './user';

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
  user?: IUserData;
  like_count: number;
  tag_recommend_post: Array<any>;
}

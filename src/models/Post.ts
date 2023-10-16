import { IPost } from '@/types/api/post';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    required: true,
  },
  editedAt: {
    type: String,
    required: false,
  },
  is_temp: {
    type: Boolean,
    required: false,
  },
  comments: {
    type: Object,
    required: false,
  },
  comments_count: {
    type: Number,
    default: 0,
  },
  user: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
  },
  like_count: {
    type: Number,
    default: 0,
  },
  tag_recommend_post: {
    type: Array,
  },
});

export default mongoose.models.User || mongoose.model('User', PostSchema);

export const DATA: IPost = {
  id: 'a6ad4723-2e39-46b8-86b3-5eca43abcf4d',
  title: 'title',
  body: '> 예시 MOCKING DATA 입니다.\n> \n\n>',
  thumbnail: 'image url',
  created_at: '2023-06-21T05:52:25.903Z',
  edited_at: '2023-07-01T13:45:03.263Z',
  is_temp: false,
  comments: [
    {
      commentId: '20230101_1',
      userid: 1,
      nickname: '닉네임',
      contents: '댓글 내용',
      comments: [],
    },
  ],
  comments_count: 0,
  tags: ['js', 'ts', 'react'],
  like_count: 0,
  tag_recommend_post: [
    {
      id: 'a6ad4723-2e39-46b8-86b3-5eca43abcf4d',
      title: '1번글',
      nickname: '닉네임',
      created_at: '2023-06-21T05:52:25.903Z',
      like_count: 0,
      comments_count: 0,
    },
  ],
  post_id: '',
  subtitle: '',
};

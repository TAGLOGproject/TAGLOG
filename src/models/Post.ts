import mongoose from 'mongoose';

interface IPost {
  id: string;
  title: string;
  body: string;
  thumbnail: string;
  created_at: string;
  edited_at: string;
  is_temp: boolean;
  comments: object;
  comments_count: number;
  user: object;
  tags: Array<string>;
  like_count: number;
  tag_recommend_post: Array<any>;
}
const PostSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
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
  comments: {},
  comments_count: 0,
  user: {
    // userData
  },
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
};

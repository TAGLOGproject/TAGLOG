import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
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
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  edited_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  is_temp: {
    type: Boolean,
    default: false,
    required: true,
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
    default: [],
  },
  like_count: {
    type: Number,
    default: 0,
  },
  tag_recommend_post: {
    type: Array,
  },
});

export default mongoose.models.post || mongoose.model('post', PostSchema);

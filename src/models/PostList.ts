import mongoose from 'mongoose';

const PostListSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  edited_at: {
    type: String,
    required: false,
  },
  like_count: {
    type: Number,
    default: 0,
  },
  comments_count: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.postlist || mongoose.model('postlist', PostListSchema);

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    trim: true,
  },
  refresh_token: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

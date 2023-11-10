import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    default: 'kakao',
    enum: ['kakao', 'default'], // 추후 다른 소셜 로그인을 추가할 수 있습니다.
  },
  userid: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
  },
  // unique 값에대한 처리가 필요할 예정
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/, '이메일 형식이 아닙니다.'],
  },
  profile_image: {
    type: String,
    trim: true,
  },
  thumbnail_image: {
    type: String,
    trim: true,
  },
  birthday: {
    type: String,
    trim: true,
  },
  birthday_type: {
    type: String,
    trim: true,
    enum: ['SOLAR', 'LUNAR'],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now, // 현재 날짜/시간을 기본값으로 설정
    required: true,
  },
  connected_at: {
    type: Date,
  },
  password: {
    // 일반 유저 일때만 필요
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    minLength: [3, '3글자 이상'],
    maxLength: [50, '50글자 이하'],
  },
  email: {
    type: String,
    required: [true, '이메일 주소를 입력해주세요.'],
    match: [/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/, '이메일 형식이 아닙니다.'],
  },
  message: {
    type: String,
    required: [true, '내용을 입력해주세요.'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;

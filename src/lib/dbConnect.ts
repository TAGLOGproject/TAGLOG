import errorHandler from '@/handler/errorHandler';
import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.DATABASE_URL as string);
      console.log('Connected to MongoDB');
    }
  } catch (error: any) {
    errorHandler(error);
  }
};

export default connectDb;

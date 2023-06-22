import mongoose, { Mongoose } from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log('successfully connected to MongoDB');
    return;
  }

  try {
    const db: Mongoose = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    throw new Error(`Unable to connect to MongoDB: ${error.message}`);
  }
};

export default dbConnect;

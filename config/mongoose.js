
import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/ecommerce_api';

export const connectDB = async () => {
  try {
    // Connect to MongoDB using mongoose.connect()
    await mongoose.connect(url, {
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new Server Discovery and Monitoring engine
     
    });

    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
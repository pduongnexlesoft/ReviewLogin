const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log('MongoDB connected!!');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error)
  }
};

module.exports = { connectDB };

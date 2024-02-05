import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      maxPoolSize: 1,
      minPoolSize: 1,
      socketTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      maxIdleTimeMS: 10000,
    });
  } catch (err) {
    console.error(err);
    throw new Error("Cannot connect to database...");
  }
};

export default connect;

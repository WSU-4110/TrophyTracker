import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(process.env.MONGODB_URI!, {
      maxPoolSize: 1,
      minPoolSize: 1,
      socketTimeoutMS: 17000,
      serverSelectionTimeoutMS: 12000,
      maxIdleTimeMS: 20000,
    });
  } catch (err) {
    console.error(err);
    throw new Error("Cannot connect to database...");
  }
};

export default connect;

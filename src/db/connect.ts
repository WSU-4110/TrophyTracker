import mongoose, { type ConnectOptions } from "mongoose";

const options = {
  maxPoolSize: 1,
  minPoolSize: 1,
  socketTimeoutMS: 10000,
  serverSelectionTimeoutMS: 10000,
  maxIdleTimeMS: 20000,
};

const connect = async () => {
  try {
    console.log("Connecting to database...");
    return mongoose.connect(
      process.env.MONGODB_URI!,
      options as ConnectOptions,
    );
  } catch (err) {
    console.error(err);
    throw new Error("Cannot connect to database...");
  }
};

export default connect;

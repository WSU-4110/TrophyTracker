import mongoose, { type ConnectOptions } from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: false,
  maxPoolSize: 1,
  minPoolSize: 1,
  socketTimeoutMS: 17000,
  serverSelectionTimeoutMS: 12000,
  maxIdleTimeMS: 20000,
};

const connect = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(process.env.MONGODB_URI!, options as ConnectOptions);
  } catch (err) {
    console.error(err);
    throw new Error("Cannot connect to database...");
  }
};

export default connect;

import mongoose, { type ConnectOptions } from "mongoose";

const options = {};

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

import mongoose, {
  ConnectionStates,
  type ConnectOptions,
  type Connection,
} from "mongoose";

const options: ConnectOptions = {
  maxPoolSize: 1,
  minPoolSize: 1,
  socketTimeoutMS: 10000,
  serverSelectionTimeoutMS: 10000,
  maxIdleTimeMS: 20000,
};

let connection: Connection; // singleton static connection

const connect = async (): Promise<Connection> => {
  try {
    if (
      (connection && connection.readyState != ConnectionStates.connected) ||
      !connection
      // if connection is not connected, or connection is null, then connect
    ) {
      console.log("Connecting to database...");
      // @ts-expect-error connection is a Promise
      connection = mongoose.connect(process.env.MONGODB_URI!, options);
    }
    return connection;
  } catch (err) {
    console.error(err);
    throw new Error("Cannot connect to database...");
  }
};

export default connect;

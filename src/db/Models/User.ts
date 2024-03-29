import { Schema, model, type Model, models, type ObjectId } from "mongoose";

export interface User {
  _id?: ObjectId;
  uid: string;
  name?: string;
  img?: string;
  email?: string;
  customized?: boolean;
  lastLogin: Date;
}

const userSchema = new Schema<User>({
  uid: { type: String, required: true },
  name: { type: String, required: false },
  img: { type: String, required: false },
  email: { type: String, required: false },
  customized: { type: Boolean, required: false, default: false },
  lastLogin: { type: Date, required: true },
});

export default (models.User as Model<User>) ?? model("User", userSchema);

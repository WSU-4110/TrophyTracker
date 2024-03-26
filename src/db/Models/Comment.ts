import {
  Schema,
  model,
  models,
  type Model,
  type InferSchemaType,
  type ObjectId,
} from "mongoose";
import { type User } from "./User";

export interface Comment {
  _id?: ObjectId;
  author: User;
  content: string;
  createdAt: Date;
  lastModified: Date;
}
const commentSchema = new Schema<Comment>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true, minlength: 6 },
  createdAt: { type: Date, default: Date.now },
  lastModified: { type: Date, default: null },
});

export default (models.Comment as Model<Comment>) ??
  model<Comment>("Comment", commentSchema);

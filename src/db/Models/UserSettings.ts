import {
  Schema,
  type InferSchemaType,
  type Model,
  model,
  models,
} from "mongoose";

export enum Role {
  USER = "user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

const userSettingsSchema = new Schema({
  uid: { type: Schema.Types.ObjectId, ref: "User", required: true },
  banned: { type: Boolean, required: true, default: false },
  role: {
    type: String,
    required: true,
    enum: ["user", "moderator", "admin"],
  },
});

export type UserSettings = InferSchemaType<typeof userSettingsSchema>;

export default (models.UserSettings as Model<UserSettings>) ??
  model<UserSettings>("UserSettings", userSettingsSchema);
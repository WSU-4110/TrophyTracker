import { Schema, model, type Model, models } from "mongoose";
import { type User } from "./User";
import { type Game } from "./Game";

export type Platforms = "PlayStation" | "Xbox" | "PC" | "Nintendo";

export interface Achievement {
  author: User;
  name: string;
  content: string;
  game: Game;
  platform?: Platforms;
  comments: []; // TODO: Add Comment type
  likes: User[];
  difficulty: number;
}

const achievementSchema = new Schema<Achievement>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  platform: {
    type: String,
    required: false,
    default: null,
    enum: ["PlayStation", "Xbox", "PC", "Nintendo"],
  },
  difficulty: {
    type: Number,
    required: true,
    range: {
      min: 1,
      max: 5,
    },
  },
});

export default (models.Achievement as Model<Achievement>) ??
  model<Achievement>("Achievement", achievementSchema);

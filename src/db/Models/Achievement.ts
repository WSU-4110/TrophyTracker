import { Schema, model, type Model, models, type ObjectId } from "mongoose";
import { type User } from "./User";
import { type Game } from "./Game";
import { type Comment } from "./Comment";

export type Platforms = "PlayStation" | "Xbox" | "PC" | "Nintendo";

export interface Achievement {
  author: User; // this can be null IF the population fails (i.e. if the user doesnt exist or was deleted)
  name: string;
  content: string;
  createdAt: Date;
  lastModified: Date;
  game: Game;
  platform?: Platforms;
  comments: Comment[];
  likes: User[];
  difficulty: number;
}

const achievementSchema = new Schema<Achievement>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  lastModified: { type: Date, default: null },
  name: { type: String, required: true },
  content: { type: String, required: true, minlength: 11 },
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

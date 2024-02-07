import { Schema, model, type Model, models } from "mongoose";
import { Category } from "./Category";

export interface Game {
  name: string;
  category: Category;
  picture: string;
}

const gameSchema = new Schema<Game>({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  picture: { type: String, required: true },
});

export const GameModel = (models.Game as Model<Game>) ?? model<Game>("Game", gameSchema);

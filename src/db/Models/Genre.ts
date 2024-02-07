import { Schema, model, type Model, models } from "mongoose";
import { Category } from "./Category";

export interface Genre {
  name: 'FPS' | 'RPG' | 'MMORPG';
  category: Category;
}

const genreSchema = new Schema<Genre>({
  name: { type: String, enum: ['FPS', 'RPG', 'MMORPG'], required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
});

export const GenreModel = (models.Genre as Model<Genre>) ?? model<Genre>("Genre", genreSchema);

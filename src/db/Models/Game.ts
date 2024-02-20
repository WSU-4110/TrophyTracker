import { Schema, model, type Model, models } from "mongoose";
import { type Category } from "./Category";
import { type Platforms } from "./Achievement";

export interface Game {
  name: string;
  categories: Category[];
  publisher: string;
  platforms: Platforms[];
  picture: string;
}

const gameSchema = new Schema<Game>({
  name: { type: String, required: true },
  categories: [
    { type: Schema.Types.ObjectId, ref: "Category", required: true },
  ],
  platforms: [
    {
      type: String,
      required: true,
      enum: ["PlayStation", "Xbox", "PC", "Nintendo"],
    },
  ],
  publisher: { type: String, required: true },
  picture: { type: String, required: true },
});

export default (models.Game as Model<Game>) ?? model<Game>("Game", gameSchema);

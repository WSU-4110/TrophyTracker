import { Schema, model, type Model, models } from "mongoose";

export interface Category {
  name: string;
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
});

export const CategoryModel = (models.Category as Model<Category>) ?? model<Category>("Category", categorySchema);

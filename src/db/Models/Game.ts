import { Schema, model, type Model, models } from "mongoose";
import { type SteamStoreGameData } from "@/types/Steam/store/Game";

const gameSchema = new Schema<SteamStoreGameData>();

export default (models.Game as Model<SteamStoreGameData>) ??
  model<SteamStoreGameData>("Game", gameSchema);

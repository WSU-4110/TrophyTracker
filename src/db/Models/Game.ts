import { Schema, model, type Model, models } from "mongoose";
import { type SteamStoreGameData } from "@/types/Steam/store/Game";

export type Game = SteamStoreGameData; // we will model our games after the how the Steam store does it

const gameSchema = new Schema<Game>(
  { steam_appid: { type: Number, required: true } },
  { strict: false },
);
// unstructured here bcz we do the check when adding to it

export default (models.Game as Model<Game>) ?? model<Game>("Game", gameSchema);

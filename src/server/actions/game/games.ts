"use server";
import Game from "@/db/Models/Game";
import connect from "@/db/connect";

/**
 * gets all games from DB, not STEAM
 * @returns all games FROM DB
 */
export async function all() {
  const db = await connect();
  const games = await Game.find({}).select("name").lean();
  await db.disconnect();
  return games.map((game) => {
    return { ...game, _id: game._id.toString() };
  });
}

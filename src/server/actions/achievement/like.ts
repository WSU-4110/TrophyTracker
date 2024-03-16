"use server";
import Achievement from "@/db/Models/Achievement";
import connect from "@/db/connect";
import { type ObjectId } from "mongoose";
import { getServerAuthSession } from "@/server/auth";
import type ActionsResponse from "@/types/Response";

/**
 * Server action to like an achievement
 * @param achievementId {string | ObjectId} The ID of the achievement to like
 * @returns {Promise<ActionsResponse>}
 */
export default async function like(
  achievementId: string | ObjectId,
): Promise<ActionsResponse> {
  try {
    const db = await connect();
    const session = await getServerAuthSession();
    if (!session) {
      return { error: "You must be signed in to like an achievement" };
    }
    await Achievement.updateOne(
      { _id: achievementId },
      { $addToSet: { likes: session.user.person._id } },
    );
    await db.disconnect();
  } catch (e: unknown) {
    return { error: "An error occurred while liking: " + (e as Error).message };
  }
  return { message: "Liked Achievement" };
}

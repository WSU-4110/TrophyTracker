"use server";
import Achievement from "@/db/Models/Achievement";
import connect from "@/db/connect";
import { type ObjectId } from "mongoose";
import { getServerAuthSession } from "@/server/auth";
import type ActionsResponse from "@/types/Response";
import { revalidatePath } from "next/cache";

// TODO: like and unlike should be combined into one function

/**
 * Server action to unlike an achievement
 * @param achievementId {string | ObjectId} The ID of the achievement to unlike
 * @returns {Promise<ActionsResponse>}
 */
export default async function unlike(
  achievementId: string | ObjectId,
): Promise<ActionsResponse> {
  try {
    const db = await connect();
    const session = await getServerAuthSession();
    if (!session) {
      return { error: "You must be signed in to unlike an achievement" };
    }
    await Achievement.updateOne(
      { _id: achievementId },
      { $pull: { likes: session.user.person._id } },
    );
    await db.disconnect();
    revalidatePath(`/achievement/${String(achievementId)}`);
  } catch (e: unknown) {
    return {
      error: "An error occurred while unliking: " + (e as Error).message,
    };
  }
  return { message: "Unliked Achievement" };
}

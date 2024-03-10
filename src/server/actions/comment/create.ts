"use server";

import { mongo } from "mongoose";
import type ActionsResponse from "@/types/Response";
import connect from "@/db/connect";
import { getServerAuthSession } from "@/server/auth";
import Comment from "@/db/Models/Comment";
import validate from "@/utils/validate";
import { isRedirectError } from "next/dist/client/components/redirect";
import Achievement from "@/db/Models/Achievement";
import { revalidatePath } from "next/cache";

/**
 * Server action to create a comment for an achievement
 * @param achievementId {string} The ID of the achievement to comment on
 * @param content {string} The content of the comment
 * @returns {Promise<ActionsResponse>}
 */
export default async function create(
  achievementId: string,
  content: string,
): Promise<ActionsResponse> {
  if (!achievementId) return { error: "Achievement ID not provided" };
  if (!content) {
    return { error: "Comment must have content" };
  }
  try {
    const db = await connect();
    const session = await getServerAuthSession();
    if (!session) {
      return { error: "You must be signed in to comment" };
    }
    const commentId = new mongo.ObjectId();
    await Comment.create({
      _id: commentId,
      author: session.user.person._id,
      content,
    });
    await Achievement.updateOne(
      { _id: achievementId },
      { $addToSet: { comments: commentId } },
    );
    await db.disconnect();
    revalidatePath(`/achievement/${achievementId}`);
    return {
      message: "Comment created",
    };
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;
    if (error.name === "ValidationError") {
      // @ts-expect-error we know the error exists
      return { error: Object.values(validate(error)).join(", ") };
    } else {
      return { error: error.message };
    }
  }
}

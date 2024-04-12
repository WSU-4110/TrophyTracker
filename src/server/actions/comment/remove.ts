"use server";
import Achievement from "@/db/Models/Achievement";
import Comment from "@/db/Models/Comment";
import Role from "@/types/Role";
import connect from "@/db/connect";
import { getServerAuthSession } from "@/server/auth";
import type ActionsResponse from "@/types/Response";
import validate from "@/utils/validate";
import { revalidatePath } from "next/cache";

/**
 * Server action to delete a comment
 * @param commentId {string} The ID of the comment to delete
 * @returns {Promise<ActionsResponse>}
 */
export default async function remove(
  commentId: string,
): Promise<ActionsResponse> {
  try {
    const session = await getServerAuthSession();
    if (!session) throw new Error("You must be signed in to delete a comment");
    if (!commentId) throw new Error("Must provide a comment ID to delete");
    const db = await connect();
    const comment = await Comment.findOne({ _id: commentId });
    // is there  a way to do this in one call? (like in ./edit.ts)
    if (!comment) throw new Error("Comment not found");
    if (
      comment.author._id != session.user.person._id &&
      session.user.person.role !== Role.ADMIN
    )
      throw new Error("You can only delete your own comments");
    await Comment.deleteOne({ _id: commentId });
    await Achievement.updateOne(
      { comments: commentId },
      { $pull: { comments: commentId } },
    );
    await db.disconnect();
    revalidatePath(`/achievement/${commentId}`);
    return { message: "Comment deleted" };
  } catch (e: unknown) {
    const error = e as Error;
    if (error.name === "ValidationError") {
      // @ts-expect-error we know the error exists
      return { error: Object.values(validate(error)).join(", ") };
    }
    return { error: error.message };
  }
}

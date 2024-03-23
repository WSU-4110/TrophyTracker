"use server";
import Comment from "@/db/Models/Comment";
import connect from "@/db/connect";
import { getServerAuthSession } from "@/server/auth";
import type ActionsResponse from "@/types/Response";
import validate from "@/utils/validate";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";

/**
 * This server action edits a comment
 * @param commentId {string} The ID of the comment to edit
 * @param content {string} The new content of the comment
 * @returns {Promise<ActionsResponse>}
 */
export default async function edit(
  commentId: string,
  content: string,
): Promise<ActionsResponse> {
  try {
    const session = await getServerAuthSession();
    if (!session) throw new Error("You must be signed in to edit a comment");
    if (!commentId || !content) throw new Error("Invalid form data");
    const db = await connect();
    const comment = await Comment.findOne({ _id: commentId });
    if (!comment) throw new Error("Comment not found");
    if (comment.author._id != session.user.person._id)
      throw new Error("You can only edit your own comments");
    comment.content = content;
    comment.lastModified = new Date();
    await comment.save();
    await db.disconnect();
    revalidatePath(`/achievement/${commentId}`);
    return { message: "Comment edited" };
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;
    if (error.name === "ValidationError") {
      // @ts-expect-error we know the error exists
      return { error: Object.values(validate(error)).join(", ") };
    }
    return { error: error.message };
  }
}

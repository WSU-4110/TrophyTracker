"use server";

import { mongo, type InferSchemaType } from "mongoose";
import type ActionsResponse from "@/types/Response";
import connect from "@/db/connect";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import Comment from "@/db/Models/Comment";
import validate from "@/utils/validate";
import { isRedirectError } from "next/dist/client/components/redirect";
import Achievement from "@/db/Models/Achievement";

export default async function create(
  formData: FormData,
): Promise<ActionsResponse> {
  const achievementId = formData.get("id") as string | null;
  if (!achievementId) redirect("/achievements");
  const baseUrl = `/achievement/${achievementId.toString()}`;
  try {
    const db = await connect();
    const session = await getServerAuthSession();
    if (!session) {
      redirect("/api/auth/signin");
    }
    const content = formData.get("content") as string;
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
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;
    if (error.name === "ValidationError") {
      redirect(
        // @ts-expect-error we know the error exists
        `${baseUrl}?error=${Object.values(validate(error)).join(", ")}`,
      );
    } else {
      redirect(
        baseUrl + "?error=An error occurred while commenting: " + error.message,
      );
    }
  }
  redirect(baseUrl + "?message=Comment added");
}

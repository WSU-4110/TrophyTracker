"use server";
import Achievement from "@/db/Models/Achievement";
import connect from "@/db/connect";
import validate from "@/utils/validate";
import { getServerAuthSession } from "@/server/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import type ResponseMessage from "@/types/Response";
import { mongo } from "mongoose";
import { revalidatePath } from "next/cache";

/**
 * Server action to create a new achievement
 * @param formData FormData with the following fields:
 * - name: string
 * - content: string
 * - difficulty: number
 * - game: string
 */
export default async function create(
  formData: FormData,
): Promise<ResponseMessage> {
  try {
    const session = await getServerAuthSession();
    if (!session) {
      return { error: "You must be logged in to create an achievement" };
    }
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const difficulty = Number(formData.get("difficulty") as string);
    const game = formData.get("game") as string;
    if (!name || !content || !difficulty || !game) {
      return { error: "Missing fields" };
    }
    if (content.length < 12) {
      return { error: "Content must be at least 12 characters" };
    }
    const db = await connect();
    const achievementId = new mongo.ObjectId();
    await Achievement.create({
      _id: achievementId,
      author: session.user.person._id,
      name,
      content,
      difficulty,
      game,
    });
    await db.disconnect();
    revalidatePath("/achievements");
    return {
      message: "Achievement created!",
      data: { _id: achievementId.toString() },
    };
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;
    if (error.name === "ValidationError") {
      // @ts-expect-error we know there will be a validation error
      return { errors: validate(error) };
    }
    console.error(error);
    return { error: "Failed to create achievement: " + error.message };
  }
}

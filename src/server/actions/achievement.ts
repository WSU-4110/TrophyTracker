import Achievement from "@/db/Models/Achievement";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import validate from "@/utils/validate";
import { type ObjectId } from "mongoose";
import { getServerAuthSession } from "@/server/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import type ActionsResponse from "@/types/Response";
import { createComment } from "./comment";
const create = async (formData: FormData) => {
  "use server";

  try {
    const session = await getServerAuthSession();
    if (!session) {
      redirect("/api/auth/signin");
    }
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const difficulty = Number(formData.get("difficulty") as string);
    const game = formData.get("game") as string;
    if (!name || !content || !difficulty || !game) {
      redirect("/achievements/create/?error=Missing fields");
    }
    if (content.length < 12) {
      redirect("/achievements/create/?error=Description is too short");
    }
    const db = await connect();
    await Achievement.create({
      author: session.user.person._id,
      name,
      content,
      difficulty,
      game,
    });
    await db.disconnect();
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;
    if (error.name === "ValidationError") {
      redirect(
        // @ts-expect-error we know the error exists
        `/achievements/create/?error=${validate(error).join(", ")}`,
      );
    }
    console.error(error);
    redirect("/achievements/create/?error=An error occurred: " + error.message);
  }
  redirect("/achievements/?message=Created Achievement!");
};

// TODO: like and unlike should be combined into one function

const like = async (
  achievementId: string | ObjectId,
): Promise<ActionsResponse> => {
  "use server";
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
};

const unlike = async (
  achievementId: string | ObjectId,
): Promise<ActionsResponse> => {
  "use server";
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
  } catch (e: unknown) {
    return {
      error: "An error occurred while unliking: " + (e as Error).message,
    };
  }
  return { message: "Unliked Achievement" };
};

const achievement = {
  create,
  like,
  unlike,
  createComment,
};

export default achievement;

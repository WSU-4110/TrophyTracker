"use server";
import Achievement from "@/db/Models/Achievement";
import connect from "@/db/connect";
import validate from "@/utils/validate";
import { getServerAuthSession } from "@/server/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

/**
 * Server action to create a new achievement
 * @param formData FormData with the following fields:
 * - name: string
 * - content: string
 * - difficulty: number
 * - game: string
 */
export default async function create(formData: FormData) {
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
}

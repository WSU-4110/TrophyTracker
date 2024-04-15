"use server";
import Achievement from "@/db/Models/Achievement";
import Comment from "@/db/Models/Comment";
import connect from "@/db/connect";
import { getServerAuthSession } from "@/server/auth";
import Role from "@/types/Role";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export default async function remove(formData: FormData) {
  try {
    const session = await getServerAuthSession();
    if (!session) {
      redirect("/api/auth/signin");
    }
    const id = formData.get("id") as string;
    if (!id) {
      redirect("/achievements/?error=Missing id");
    }
    const db = await connect();
    const achievement = await Achievement.findById(id);
    if (!achievement) {
      redirect("/achievements/?error=No achievement found");
    }
    if (
      String(achievement.author) !== String(session.user.person._id) &&
      session.user.person.role !== Role.ADMIN
    ) {
      redirect(
        `/achievement/${id}/?error=You are not the author of this achievement`,
      );
    }
    // delete all comments associated with it as well (cascading delete)
    await Comment.deleteMany({
      _id: { $in: achievement.comments },
    });
    // now finally delete the achievement
    await Achievement.deleteOne({
      _id: id,
    });

    await db.disconnect();
  } catch (err) {
    if (isRedirectError(err)) throw err;
    const error = err as Error;
    console.error(error);
    redirect("/achievements/?error=An error occurred: " + error.message);
  }
  revalidatePath("/achievements");
  redirect("/achievements/?message=Deleted Achievement!");
}

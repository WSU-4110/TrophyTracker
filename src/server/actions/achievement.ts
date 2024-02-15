import Achievement from "@/db/Models/Achievement";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import validate from "@/utils/validate";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const achievement = {
  create,
};

export default achievement;

async function create(formData: FormData) {
  "use server";

  try {
    const session = await getServerSession();
    if (!session) {
      redirect("/api/auth/signin");
    }
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const difficulty = Number(formData.get("difficulty") as string);
    const game = formData.get("game") as string;
    await connect();
    const thisUser = await User.findOne({ email: session.user.email });
    if (!thisUser) {
      return redirect("/api/auth/signin");
    }
    await Achievement.create({
      author: thisUser,
      name,
      content,
      difficulty,
      game,
    });
  } catch (e: unknown) {
    const error = e as Error;
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

import Achievement from "@/db/Models/Achievement";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import validate from "@/utils/validate";
import { getServerSession } from "next-auth/next";

const achievement = {
  create,
};

export default achievement;

async function create(formData: FormData) {
  "use server";
  try {
    const session = await getServerSession();
    if (!session) {
      return { error: "Please login." };
    }
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const difficulty = Number(formData.get("difficulty") as string);
    const game = formData.get("game") as string;
    await connect();
    const thisUser = await User.findOne({ email: session.user.email });
    if (!thisUser) {
      return { error: "Please re-login." };
    }
    await Achievement.create({
      author: thisUser,
      name,
      content,
      difficulty,
      game,
    });
    return { message: "Achievement created" };
  } catch (e: unknown) {
    const error = e as Error;
    if (error.name === "ValidationError") {
      return { error: validate(error) };
    }
    console.error(error);
    return { error: error.message };
  }
}

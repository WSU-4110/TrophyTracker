"use server";

import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import SteamWebAPI from "@/server/SteamAPI";
import { getServerAuthSession } from "@/server/auth";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function add(formData: FormData) {
  let db;
  try {
    const appid = formData.get("appid") as string;
    if (!appid) {
      redirect("/library/add?error=Missing appid");
    }
    const session = await getServerAuthSession();
    if (!session) {
      redirect("/api/auth/signin");
    }
    const game = await new SteamWebAPI().getGameDetails(appid);
    if (!game) {
      redirect("/library/add?error=Game not found");
    }
    db = await connect();
    await Game.init();
    const dbGame = await Game.findOneAndUpdate({ steam_appid: appid }, game, {
      upsert: true,
    });
    if (dbGame) {
      redirect(`/library/add?error=${game.name} already exists in the library`);
    }
    revalidatePath("/library");
    revalidatePath(`/library/game/${appid}`);
  } catch (e: unknown) {
    const error = e as Error;
    if (isRedirectError(error)) throw error;

    console.error(error);
    redirect("/library/add?error=An error occurred: " + error.message);
  } finally {
    db && (await db.disconnect());
  }
  redirect(`/library?message=Game added to the library`);
}

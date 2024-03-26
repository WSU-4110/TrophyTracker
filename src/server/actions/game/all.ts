"use server";

import SteamWebAPI from "@/server/SteamAPI";

export default async function all() {
  return new SteamWebAPI().games;
}

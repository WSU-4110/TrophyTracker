import User from "@/db/Models/User";
import UserSettings from "@/db/Models/UserSettings";
import connect from "@/db/connect";

export async function getUserSettings(uid: string) {
  const db = await connect();
  const data = await UserSettings.findOne({ uid });
  await db.disconnect();
  return data;
}

export async function getUserFromSession(uid: string) {
  const db = await connect();
  const data = await User.findOne({ _id: uid });
  await db.disconnect();
  return data;
}

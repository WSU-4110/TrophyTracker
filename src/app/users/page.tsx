import ProfilePic from "@/comps/ProfilePic";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import { cache } from "react";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function Users() {
  const cachedUsers = cache(async () => {
    await connect();
    return await User.find({});
  });

  const users = await cachedUsers();
  return (
    <div>
      <h1 className="mb-2 text-5xl font-extrabold">Users</h1>
      <ul>
        {users.map((user) => (
          <span key={user.uid}>
            <ProfilePic img={user.img} name={user.name} rounded color="info">
              <div className="space-y-1 font-medium dark:text-white">
                <div>{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Last login {user.lastLogin.toLocaleDateString()}
                </div>
              </div>
            </ProfilePic>
          </span>
        ))}
      </ul>
    </div>
  );
}

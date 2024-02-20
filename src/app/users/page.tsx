import ProfilePic from "@/comps/ProfilePic";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import Link from "next/link";
// import { unstable_cache } from "next/cache";

export const revalidate = 3600; // 1 hour
export const dynamic = "force-static";

// const cachedUsers = unstable_cache(
//   async () => {
//     await connect();
//     return await User.find({});
//   },
//   ["users"],
//   { revalidate: 30 * 60 },
// );

export default async function Users() {
  await connect();
  const users = await User.find({});
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-2">Users</h1>
      <div className="tt-layout">
        {users.map((user) => (
          <Link
            href={`/user/${user.uid}`}
            className="rounded-md p-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
            key={user.uid}
          >
            <ProfilePic img={user.img} name={user.name} rounded color="info">
              <div className="space-y-1 font-medium dark:text-white">
                <div>{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Last login {new Date(user.lastLogin).toLocaleDateString()}
                </div>
              </div>
            </ProfilePic>
          </Link>
        ))}
      </div>
    </div>
  );
}

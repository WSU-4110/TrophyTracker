import { type User } from "@/db/Models/User";
import ProfilePic from "./ProfilePic";
import getUserTitle from "@/utils/username";
import Link from "next/link";

export default function UserTitle({ user }: { user?: User }) {
  return (
    <span className="flex items-center justify-start">
      <ProfilePic
        img={user ? user.img : null}
        name={getUserTitle(user)}
        rounded
        color="light"
      />
      <Link
        className="text-md ml-2 text-center text-gray-700 hover:text-purple-900 dark:text-gray-300 dark:hover:text-white"
        href={`/users/${user?._id ? user?._id?.toString() : "?error=This user does not exist."}`}
      >
        {getUserTitle(user)}
      </Link>
    </span>
  );
}

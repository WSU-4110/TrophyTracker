import { type User } from "@/db/Models/User";
import ProfilePic from "./ProfilePic";
import { getUserTitle } from "@/utils";
import Link from "next/link";
import { Badge } from "flowbite-react";
import Role from "@/types/Role";

export default function UserTitle({ user }: { user?: User }) {
  return (
    <span className="flex items-center justify-start gap-1">
      <ProfilePic
        img={user ? user.img : null}
        name={getUserTitle(user)}
        rounded
        color="light"
      />
      <Link
        className="text-md text-center text-gray-700 hover:text-purple-900 dark:text-gray-300 dark:hover:text-white"
        href={`/user/${String(user?._id) || "?error=This user does not exist."}`}
      >
        {getUserTitle(user)}
      </Link>
      {user?.role == Role.ADMIN && (
        <Badge color="purple">{user?.role?.toUpperCase()}</Badge>
      )}
    </span>
  );
}

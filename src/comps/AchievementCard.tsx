import { Card } from "flowbite-react";
import { type Achievement } from "../db/Models/Achievement";
import ProfilePic from "./ProfilePic";
import Difficulty from "./Difficulty";
import Link from "next/link";
import getUserTitle from "@/utils/username";
import UserTitle from "./UserTitle";

interface AchievementCardProps extends Achievement {
  _id: string;
  key?: string | number;
}

export default function AchievementCard(props: AchievementCardProps) {
  const authorName = getUserTitle(props.author);
  return (
    <div className="animate-in relative">
      <div className="absolute right-2 top-2 z-10 cursor-not-allowed transition-opacity hover:opacity-20">
        <Difficulty name={props.name} difficulty={props.difficulty} />
      </div>
      <Card
        className="relative max-w-md bg-white shadow-xl dark:bg-gray-800 dark:text-white"
        imgSrc={props.game.picture}
        horizontal
      >
        <span className="mt-4">
          <UserTitle user={props.author} />
        </span>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.content}
        </p>
        <Link
          href={`/achievement/${props._id}`}
          className="hover:text-purple-600 hover:underline"
        >
          <p className="text-xs text-gray-500 dark:text-gray-200">
            {props.comments.length} comments • {props.likes.length} likes
          </p>
        </Link>
        <hr />
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-500 dark:text-gray-200 ">
            {props.createdAt.toDateString()}
          </p>
          {props.lastModified && (
            <p className="text-xs italic text-gray-500 dark:text-gray-200">
              • Edited on {props.lastModified.toLocaleString()}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}

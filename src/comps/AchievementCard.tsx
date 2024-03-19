import { Card } from "flowbite-react";
import { type Achievement } from "../db/Models/Achievement";
import Difficulty from "./Difficulty";
import Link from "next/link";
import { parseHTML } from "@/utils";
import UserTitle from "./UserTitle";
import moment from "moment";
import { BsArrowRightShort } from "react-icons/bs";
interface AchievementCardProps extends Achievement {
  _id: string;
  key?: string | number;
}

export default function AchievementCard(props: AchievementCardProps) {
  return (
    <div className="animate-in relative">
      <div className="absolute right-2 top-2 z-10 cursor-not-allowed transition-opacity hover:opacity-20">
        <Difficulty name={props.name} difficulty={props.difficulty} />
      </div>
      <Card
        className="relative max-w-md bg-white shadow-xl dark:bg-gray-800 dark:text-white"
        imgSrc={props.game.header_image}
      >
        <span className="mt-4">
          <UserTitle user={props.author} />
        </span>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "hidden",
            textOverflow: "ellipsis",
          }}
          className="rounded-md border border-dashed p-2 font-normal text-gray-700 shadow-1 dark:text-gray-400"
          dangerouslySetInnerHTML={{
            __html: parseHTML(props.content),
          }}
        />
        <Link
          href={`/achievement/${props._id}`}
          className="flex items-center gap-2 rounded-lg border-2 border-purple-300 bg-white p-4 text-black transition-all hover:gap-5 hover:bg-purple-600 hover:text-white"
        >
          Expand <BsArrowRightShort />
        </Link>
        <hr />
        <div className="flex items-center gap-1">
          <p className="text-xs dark:text-gray-200">
            {props.comments.length} comments • {props.likes.length} likes
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-200 ">
            • {moment(props.createdAt).fromNow()}
          </p>
          {props.lastModified && (
            <p className="text-xs italic text-gray-500 dark:text-gray-200">
              • Edited {moment(props.lastModified).fromNow()}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}

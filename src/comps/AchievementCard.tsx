import { User } from "@/db/Models/User";
import { Card } from "flowbite-react";
import { type Achievement } from "../db/Models/Achievement";
import ProfilePic from "./ProfilePic";

interface AchievementCardProps extends Achievement {
  key?: string | number;
}

export default function AchievementCard(props: AchievementCardProps) {
  return (
    <Card className="max-w-sm" imgSrc={props.game.picture} horizontal>
      <ProfilePic
        img={props.author.img}
        name={props.author.email ?? props.author.name ?? props.author.uid}
        rounded
        color="light"
      />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.content}
      </p>
    </Card>
  );
}

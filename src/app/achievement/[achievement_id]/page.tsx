import AchievementClient from "@/comps/AchievementClient";
import Breadcrumbs from "@/comps/Breadcrumbs";
import Share from "@/comps/Share";
import UserTitle from "@/comps/UserTitle";

import Achievement, {
  type Achievement as AchievementType,
} from "@/db/Models/Achievement";
import Comment, { type Comment as CommentType } from "@/db/Models/Comment";
import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import { languageArrayJoin } from "@/utils";
import moment from "moment";
import Link from "next/link";
import { redirect } from "next/navigation";

export const revalidate = 360;
export const dynamic = "force-dynamic"; // TODO fix the client caching issue

export async function generateStaticParams() {
  await connect();
  const achievements = await Achievement.find({}).select("_id");
  const paths = achievements.map((achievement) => ({
    params: {
      achievement_id: achievement._id,
    },
  }));
  return paths;
}

// TODO: use markdown for content and preserve line breaks and such

export default async function SpecificAchievement({
  params,
}: {
  params: { achievement_id: string };
}) {
  if (!params.achievement_id)
    redirect("/achievements?error=No achievement found");
  // check if mongo id is valid
  if (!params.achievement_id.match(/^[0-9a-fA-F]{24}$/))
    redirect("/achievements?error=Invalid achievement");
  await connect();
  await Game.init();
  await Comment.init();
  const achievement = await Achievement.findById<AchievementType>(
    params.achievement_id,
    {},
  )
    .populate([
      { path: "author", model: "User", select: "name img email" },
      { path: "game", model: "Game" },
      {
        path: "comments",
        populate: { path: "author", select: "name img email" },
      },
    ])
    .lean();
  // await db.disconnect();
  if (!achievement) redirect("/achievements?error=No achievement found");
  return (
    <div className="tt-page-layout mb-8">
      <Breadcrumbs
        className="mb-5"
        crumbs={[
          { name: "Achievements", href: "/achievements" },
          {
            name: achievement.name,
            href: `/achievement/${params.achievement_id}`,
          },
        ]}
      />
      <div className="grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-4 md:justify-items-start">
        <div className="col-span-1">
          <img
            width="400"
            height="400"
            className="rounded-lg object-cover object-center"
            src={achievement.game.header_image}
            alt={achievement.game.name}
          />
          <Link
            href={`/library/game/${achievement.game.steam_appid}`}
            target="_blank"
            className="text-xl font-bold text-indigo-700 hover:underline"
          >
            {achievement.game.name}
          </Link>
          <p>by {languageArrayJoin(achievement.game.publishers)}</p>
          <Link
            href={`/library/game/${achievement.game.steam_appid}`}
            className="rounded-n-lg flex items-center justify-center gap-2 rounded-lg bg-indigo-600 p-4 text-center font-semibold text-white transition-all hover:bg-indigo-800"
          >
            View Game
          </Link>
          <div className="mt-1 ">
            <Share />
          </div>
        </div>
        <div className="col-span-3 w-full">
          <h1 className="tt-heading">{achievement.name}</h1>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <UserTitle user={achievement.author} />
            <p className="text-sm text-gray-500">
              {moment(achievement.createdAt).fromNow()}
            </p>
          </div>
          <p>{achievement.content}</p>
          <AchievementClient
            _id={String(achievement._id)}
            likes={
              JSON.parse(
                JSON.stringify(achievement.likes),
              ) as unknown as string[]
            }
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            authorID={(achievement.author?._id ?? "").toString()}
            comments={
              JSON.parse(
                JSON.stringify(achievement.comments),
              ) as unknown as CommentType[]
            }
          />
        </div>
      </div>
    </div>
  );
}

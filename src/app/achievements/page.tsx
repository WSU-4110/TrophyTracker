import AchievementCard from "@/comps/AchievementCard";
import AchievementFilter from "@/comps/AchievementFilter";
import Breadcrumbs from "@/comps/Breadcrumbs";
import Achievement from "@/db/Models/Achievement"; // type Achievement as AchivementType,
import Game from "@/db/Models/Game";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import { type Sort, type Filter } from "@/types/Filter";
import { Button } from "flowbite-react";
import { isValidObjectId } from "mongoose";
import { BsPlusSquareFill } from "react-icons/bs";
export const dynamic = "force-dynamic";
export const revalidate = 360;

interface AchievementsPage {
  searchParams?: Record<string, string | undefined>;
}

export default async function Achievements({ searchParams }: AchievementsPage) {
  const db = await connect();
  await Game.init(); // for expansions
  await User.init();
  // filter based on query params
  const filter: Partial<Filter> = {};
  const sort: Partial<Sort> = {};
  if (searchParams) {
    if (isValidObjectId(searchParams.game)) {
      filter.game = searchParams.game;
    }
    if (searchParams.difficulty) {
      filter.difficulty = searchParams.difficulty;
    }
    if (isValidObjectId(searchParams.author)) {
      filter.author = searchParams.author;
    }
    if (searchParams.sort && searchParams.order) {
      if (searchParams.sort === "createdAt") {
        sort.createdAt = searchParams.order === "asc" ? 1 : -1;
      }
      if (searchParams.sort === "comments") {
        sort.comments = searchParams.order === "asc" ? 1 : -1;
      }
      if (searchParams.sort === "likes") {
        sort.likes = searchParams.order === "asc" ? 1 : -1;
      }
    }
  }
  const achievements = await Achievement.find(filter)
    .populate("author")
    .populate("game")
    .sort(sort);

  const gamesQuery = await Game.find({}).select("name").lean();
  const games = gamesQuery.map((game) => ({
    ...game,
    _id: String(game._id),
  }));
  const usersQuery = await User.find({}).select("name email uid").lean();
  const users = usersQuery.map((user) => ({
    ...user,
    _id: String(user._id),
  }));

  // await db.disconnect();
  // FIXME: MongoExpiredSessionError: Cannot use a session that has ended
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-4">Achievements</h1>
      <Breadcrumbs
        className="my-6"
        crumbs={[{ name: "Achievements", href: "/achievements" }]}
      />
      {/* @ts-expect-error less exhaustive query */}
      <AchievementFilter {...{ games, users }} />
      <div className="tt-layout">
        {achievements.map(
          ({
            _id,
            author,
            name,
            content,
            game,
            comments,
            likes,
            difficulty,
            createdAt,
            lastModified,
          }) => (
            <span key={String(_id)} className="mb-2">
              <AchievementCard
                {...{
                  _id: String(_id),
                  author,
                  name,
                  content,
                  game,
                  comments,
                  likes,
                  difficulty,
                  createdAt,
                  lastModified,
                }}
              />
            </span>
          ),
        )}
      </div>
      <Button
        href="/achievements/create"
        className="mt-2 rounded-none transition-all hover:py-2 md:rounded-t-md"
        gradientDuoTone="purpleToPink"
      >
        <BsPlusSquareFill size={16} className="mr-1" /> Create an Achievement
      </Button>
    </div>
  );
}

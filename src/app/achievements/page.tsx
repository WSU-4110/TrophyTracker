import AchievementCard from "@/comps/AchievementCard";
import Breadcrumbs from "@/comps/Breadcrumbs";
import Achievement from "@/db/Models/Achievement"; // type Achievement as AchivementType,
import Game from "@/db/Models/Game";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import { Button } from "flowbite-react";
import { BsPlusSquareFill } from "react-icons/bs";
export const dynamic = "force-static";
export const revalidate = 360;

export default async function Achievements() {
  const db = await connect();
  await Game.init(); // for expansions
  // await User.init();
  const achievements = await Achievement.find({})
    .populate("author")
    .populate("game");
  // await db.disconnect();
  // FIXME: MongoExpiredSessionError: Cannot use a session that has ended
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-4">Achievements</h1>
      <Breadcrumbs
        className="my-6"
        crumbs={[{ name: "Achievements", href: "/achievements" }]}
      />
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

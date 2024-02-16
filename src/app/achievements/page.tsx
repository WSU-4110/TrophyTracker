import AchievementCard from "@/comps/AchievementCard";
import Achievement from "@/db/Models/Achievement"; // type Achievement as AchivementType,
import Game from "@/db/Models/Game";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import { Button } from "flowbite-react";
import { BsPlusSquareFill } from "react-icons/bs";
export const dynamic = "force-static";
export const revalidate = 360;

export default async function page() {
  await connect();
  await Game.init(); // for expansions
  // await User.init();
  const achievements = await Achievement.find({})
    .populate("author")
    .populate("game");

  return (
    <div>
      <h1 className="heading mb-4 text-center md:text-left">Achievements</h1>
      <div>
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
            <span key={_id.toString()} className="mb-2">
              <AchievementCard
                {...{
                  _id: _id.toString(),
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
        <Button
          href="/achievements/create"
          className="mt-2 transition-all hover:py-2"
          gradientDuoTone="purpleToPink"
        >
          <BsPlusSquareFill size={16} className="mr-1" /> Create an Achievement
        </Button>
      </div>
    </div>
  );
}

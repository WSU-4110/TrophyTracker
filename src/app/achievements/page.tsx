import AchievementCard from "@/comps/AchievementCard";
import Achievement from "@/db/Models/Achievement"; // type Achievement as AchivementType,
import Game from "@/db/Models/Game";
import User from "@/db/Models/User";
import connect from "@/db/connect";
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
      <h1 className="mb-4 text-center text-3xl font-extrabold md:text-left">
        Achievements
      </h1>
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
    </div>
  );
}

import AchievementCard from "@/comps/AchievementCard";
import Achievement, {
  type Achievement as AchivementType,
} from "@/db/Models/Achievement";
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
      <h1>Achievements</h1>
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
          }) => (
            <AchievementCard
              key={_id.toString()}
              {...{ author, name, content, game, comments, likes, difficulty }}
            />
          ),
        )}
      </div>
    </div>
  );
}

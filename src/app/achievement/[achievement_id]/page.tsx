import AchievementClient from "@/comps/AchievementClient";
import Breadcrumbs from "@/comps/Breadcrumbs";
import Achievement from "@/db/Models/Achievement";
import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import achievementActions from "@/server/actions/achievement";

export const revalidate = 360;
export const dynamic = "force-static";

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

export default async function SpecificAchievement({
  params,
}: {
  params: { achievement_id: string };
}) {
  const db = await connect();
  await Game.init();
  const achievement = await Achievement.findById(params.achievement_id)
    .populate("author")
    .populate("game");

  await db.disconnect();
  if (!achievement) return null;
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
            src={achievement.game.picture}
            alt={achievement.game.name}
          />
          <p className="font-bold">{achievement.game.name}</p>
          <p>by {achievement.game.publisher}</p>
        </div>
        <div className="col-span-3 w-full">
          <h1 className="tt-heading">{achievement.name}</h1>
          <p>{achievement.content}</p>
          <AchievementClient
            _id={String(achievement._id)}
            likes={
              JSON.parse(
                JSON.stringify(achievement.likes),
              ) as unknown as string[]
            }
            comments={achievement.comments}
            like={achievementActions.like}
            unlike={achievementActions.unlike}
          />
        </div>
      </div>
    </div>
  );
}

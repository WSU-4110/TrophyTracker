import Achievement from "@/db/Models/Achievement";

export default async function SpecificAchievement({
  params,
}: {
  params: { achievement_id: string };
}) {
  // const achievement = await Achievement.findById(params.achievement_id);

  return (
    <div>
      <h1>Achievement: </h1>
    </div>
  );
}

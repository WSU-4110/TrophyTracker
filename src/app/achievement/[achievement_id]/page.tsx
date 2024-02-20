export default function SpecificAchievement({
  params,
}: {
  params: { achievement_id: string };
}) {
  return (
    <div>
      <h1>Achievement: {params.achievement_id}</h1>
    </div>
  );
}

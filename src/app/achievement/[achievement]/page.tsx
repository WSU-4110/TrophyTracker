export default function SpecificAchievement({
  params,
}: {
  params: { achievement: string };
}) {
  return (
    <div>
      <h1>Achievement: {params.achievement}</h1>
    </div>
  );
}

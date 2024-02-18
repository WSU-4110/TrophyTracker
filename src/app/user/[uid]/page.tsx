export default function SpecificUser({ params }: { params: { uid: string } }) {
  return (
    <div>
      <h1>User: {params.uid}</h1>
    </div>
  );
}

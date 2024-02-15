//  bs BsFillStarFill
import { BsFillStarFill } from "react-icons/bs";

interface DifficultyProps {
  name?: string; // for iteration key
  difficulty: number;
}

export default function Difficulty({ difficulty, name }: DifficultyProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < difficulty);
  // make colored stars indicate difficulty and the gray stars indicate the rest
  return (
    <div className="md:p-none flex items-center gap-1 rounded-md bg-slate-200 p-2 md:bg-none">
      {stars.map((_, i) =>
        _ ? (
          <BsFillStarFill key={`${name}-star-${i}`} color="#a111f5" />
        ) : (
          <BsFillStarFill key={`${name}-star-${i}`} color="gray" />
        ),
      )}
    </div>
  );
}

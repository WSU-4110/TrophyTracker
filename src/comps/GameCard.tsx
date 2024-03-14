import { Card } from "flowbite-react";

interface GameCardProps {
  name: string;
  description: string;
  img: string;
  url: string | URL;
}

export default function GameCard(props: GameCardProps) {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <img width={500} height={500} src={props.img} alt={props.name} />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </Card>
  );
}

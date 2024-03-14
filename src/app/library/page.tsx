import Breadcrumbs from "@/comps/Breadcrumbs";
import GameCard from "@/comps/GameCard";
import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import SteamWebAPI from "@/server/SteamAPI";
import { Button } from "flowbite-react";
import Link from "next/link";
import { BsPlusSquareFill } from "react-icons/bs";

export default async function page() {
  const db = await connect();
  await Game.init();
  const games = await Game.find({});
  await db.disconnect();

  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading">Games</h1>
      <Breadcrumbs
        className="mb-5"
        crumbs={[{ name: "Library", href: "/library" }]}
      />
      <div className="tt-layout">
        {games.map((game) => (
          <GameCard
            key={game._id.toString()}
            name={game.name}
            description={game.short_description}
            img={game.header_image}
            url={SteamWebAPI.getSteamStoreURL(game.steam_appid)}
          />
        ))}
      </div>
      <Link
        href="/library/add"
        className="mt-2 flex w-full items-center justify-center rounded-none bg-teal-500 p-3 text-white transition-all hover:py-5 md:rounded-t-md"
      >
        <BsPlusSquareFill size={16} className="mr-1" /> Add to the Library
      </Link>
    </div>
  );
}

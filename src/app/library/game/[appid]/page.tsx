import Breadcrumbs from "@/comps/Breadcrumbs";
import Share from "@/comps/Share";
import Game from "@/db/Models/Game";
import connect from "@/db/connect";
import SteamWebAPI from "@/server/SteamAPI";
import { add } from "@/server/actions/game/add";
import { type SteamStoreGameData } from "@/types/Steam/store/Game";
import { languageArrayJoin } from "@/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";

export const dynamic = "force-dynamic"; // TODO: fix the auth caching issue
export const revalidate = 360;

export async function generateStaticParams() {
  await connect();
  await Game.init();
  const games = await Game.find({}).lean();
  const paths = games.map((game) => ({
    params: {
      appid: game.steam_appid,
    },
  }));
  return paths;
}

export default async function page({
  params: { appid },
}: {
  params: { appid: string };
}) {
  let db;
  try {
    let existsOnDB = true;
    db = await connect();
    await Game.init();
    // first check if the game is already in the library (under games collection
    // if it is, then return it,
    // if it is not, then display data from steam.getGameDetails(appid)
    // and then give user option to add it to the library (games collection)
    let game = await Game.findOne<SteamStoreGameData | null>({
      steam_appid: appid,
    });
    if (!game) {
      existsOnDB = false;
      const Steam = new SteamWebAPI();
      game = await Steam.getGameDetails(appid);
    }
    if (!game) {
      throw new Error("Game not found");
    }
    // await db.disconnect();
    return (
      <>
        <div className="tt-page-layout">
          <h1 className="tt-heading">{game.name}</h1>
          <Breadcrumbs
            className="mb-5"
            crumbs={[
              { name: "Library", href: "/library" },
              { name: "Add to Library", href: "/library/add" },
              {
                name: game.name,
                href: `/library/game/${appid}`,
              },
            ]}
          />
          <div className="mb-2 grid w-full grid-cols-1 justify-items-center gap-3 md:grid-cols-4 md:justify-items-start">
            <div className="col-span-1 justify-start md:justify-center">
              <img
                className="rounded-lg object-cover object-center"
                src={game.header_image}
                alt={game.name}
              />
              <h2 className="text-2xl font-bold">{game.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: game.short_description }} />
              <p>
                <strong>Published</strong> by{" "}
                {game.publishers.length > 1 ? (
                  languageArrayJoin(game.publishers)
                ) : (
                  <Link
                    target="_blank"
                    className="tt-link"
                    href={`https://store.steampowered.com/publisher/${game.publishers[0]}`}
                  >
                    {game.publishers}
                  </Link>
                )}
              </p>
              <p>
                <strong>Developed</strong> by{" "}
                {game.developers.length > 1 ? (
                  languageArrayJoin(game.developers)
                ) : (
                  <Link
                    target="_blank"
                    className="tt-link"
                    href={`https://store.steampowered.com/search/?developer=${game.developers[0]}`}
                  >
                    {game.developers}
                  </Link>
                )}
              </p>
              <Link
                target="_blank"
                href={SteamWebAPI.getSteamStoreURL(game.steam_appid)}
              >
                <div className="rounded-n-lg flex items-center justify-center gap-2 rounded-lg bg-indigo-600 p-4 text-center font-semibold text-white transition-all hover:bg-indigo-800">
                  {game?.is_free
                    ? "Free"
                    : game?.price_overview
                      ? game.price_overview.final_formatted
                      : "Purchase"}{" "}
                  on <FaSteam size={20} />
                </div>
              </Link>
              <div className="mt-1 w-full">
                <form action={add}>
                  <input type="hidden" name="appid" value={appid} />
                  <button
                    disabled={existsOnDB}
                    className="flex w-full items-center justify-center gap-2 rounded-lg  bg-teal-500 p-4 text-center font-semibold text-white transition-all hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-500 disabled:hover:bg-none"
                    type="submit"
                  >
                    {existsOnDB ? (
                      <>
                        <BsBookmarkCheckFill size={20} /> Added to library
                      </>
                    ) : (
                      <>
                        <BsBookmarkPlusFill size={20} /> Add to Library
                      </>
                    )}
                  </button>
                </form>
              </div>
              <div className="mt-1 w-full">
                <Share />
              </div>
            </div>
            <div className="col-span-3 w-full">
              {game?.movies ? (
                // TODO: add a gallery of photos and videos like steam does it
                <video
                  controls
                  className="w-full rounded-lg lg:w-[80%]"
                  height="auto"
                  muted
                  autoPlay
                  loop
                  src={game.movies[0]?.mp4.max}
                />
              ) : (
                <img src={game.background} alt={game.name + "-background"} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    const e = error as Error;
    // console.error(e);
    return redirect("/library/add?error=" + e.message);
  } finally {
    await db?.disconnect();
  }
}

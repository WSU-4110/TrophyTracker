"use client";
import Breadcrumbs from "@/comps/Breadcrumbs";
import all from "@/server/actions/game/all";
import { type SteamWebGame } from "@/types/Steam/web/Games";
import { Spinner, TextInput } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function GamePage() {
  const [searchTerms, setSearchTerms] = React.useState("");
  const [isDebouncing, setIsDebouncing] = React.useState(false);
  useSession({
    required: true,
  }); // only logged in users can access this page
  const [searchResults, setSearchResults] = React.useState<SteamWebGame[]>([]);
  const { data: games, isLoading } = useSWR("games", async () => {
    return all();
  });
  React.useEffect(() => {
    setIsDebouncing(true);
    const debounce = setTimeout(() => {
      const results = [];
      if (!games || searchTerms.length <= 1) {
        setIsDebouncing(false);
        setSearchResults([]);
        return;
      }
      for (const { name, appid } of games) {
        if (name.toLowerCase().includes(searchTerms.toLowerCase())) {
          results.push({ name, appid });
        }
      }
      setSearchResults(results.sort((a, b) => a.name.localeCompare(b.name)));
      setIsDebouncing(false);
    }, 1000);
    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerms]);
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading">Add Game to Library</h1>
      <Breadcrumbs
        crumbs={[
          { name: "Library", href: "/library" },
          { name: "Add to Library", href: "/library/add" },
        ]}
      />
      {isLoading ? (
        <div>
          Loading external games... <Spinner size="sm" />
        </div>
      ) : (
        <span className="tt-layout">
          <p className="w-full text-gray-500">
            These games are provided via the{" "}
            <Link className="tt-link" href="https://steamcommunity.com/dev">
              Steam Web API
            </Link>
            . Results may be inconsistent.
          </p>
          <br />
          <div className="mt--8 w-full flex-wrap">
            <label htmlFor="search">Search on Steam:</label>
            <TextInput
              onChange={(e) => setSearchTerms(e.target.value)}
              id="search"
              sizing="xl"
              placeholder="Enter terms here..."
              type="text"
              name="name"
            />
          </div>
          <div>
            {isDebouncing ? (
              <Spinner size="sm" />
            ) : (
              searchTerms &&
              searchResults.map((game) => (
                <Link
                  className="hover:tt-link mb-2 w-full cursor-pointer font-bold"
                  href={`/library/game/${game.appid}`}
                  target="_blank"
                  key={game.appid}
                >
                  {game.name}{" "}
                  <p className="text-gray-400">(ID: {game.appid})</p>
                  <br />
                </Link>
              ))
            )}
          </div>
        </span>
      )}
    </div>
  );
}

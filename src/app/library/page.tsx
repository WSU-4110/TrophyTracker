import SteamWebAPI from "@/server/SteamAPI";

export default async function page() {
  const Steam = new SteamWebAPI();
  // const game = await Steam.getGameDetails("440")
  const games = Steam.games;

  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading">Games</h1>
      <div className="tt-layout">
        <ul>
          {games.map((game) => (
            <li key={game.appid}> {game.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

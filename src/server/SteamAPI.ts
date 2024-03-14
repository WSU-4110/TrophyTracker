import {
  type SteamStoreGameData,
  type SteamStoreGame,
} from "@/types/Steam/store/Game";
import { type SteamWebGame, type SteamWebGames } from "@/types/Steam/web/Games";

/**
 * Steam Web API
 */
export default class SteamWebAPI {
  private apiKey = process.env.STEAM_API_KEY!;
  private storeURL = new URL("https://store.steampowered.com/api/");
  private webURL = new URL("https://api.steampowered.com/");
  private fetchOptions: RequestInit = { cache: "force-cache" };
  constructor() {
    this.webURL.searchParams.set("key", this.apiKey);
  }

  /**
   * Fetch game details from the Steam Web API
   * @param appId {string} Steam app id
   * @returns {Promise<SteamStoreGameData | null>} Game details
   */
  async getGameDetails(appId: string): Promise<SteamStoreGameData | null> {
    this.storeURL.pathname = "/api/appdetails";
    this.storeURL.searchParams.set("appids", appId);
    // this.storeURL.searchParams.set("key", this.apiKey);
    try {
      const response = await fetch(this.storeURL, this.fetchOptions);
      const data = (await response.json()) as SteamStoreGame;
      if (data[appId]?.success) {
        if (data[appId]?.data?.type !== "game") {
          throw new Error(`"${data[appId]?.data.name}" is not a game`);
        }
        return data[appId]?.data ?? null;
      }
      return null;
    } catch (error) {
      throw error ? error : new Error("Failed to fetch game details");
    }
  }
  /**
   * Search for games from the Steam Web API
   * @param query {string} Search query
   * @returns {Promise<SteamWebGame[]>} List of games
   */
  async searchGame(query: string): Promise<SteamWebGame[]> {
    // this.webURL.pathname = "ISteamApps/GetAppList/v2/";
    try {
      // const response = await fetch(this.webURL, this.fetchOptions);
      // const data = (await response.json()) as SteamWebGames;
      return this.games.filter((game) =>
        game.name.toLowerCase().includes(query.toLowerCase()),
      );
    } catch (error) {
      throw new Error("Failed to search game");
    }
  }

  get games() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const games = (require("@/utils/games.json") as SteamWebGames).applist.apps;
    return games;
  }

  /**
   * Gets a Steam store URL rom appID
   * @param appId Steam store appid
   * @returns {string} Steam store URL
   */
  public static getSteamStoreURL(appId: string | number) {
    return `https://store.steampowered.com/app/${appId}`;
  }
}
// // Usage example
// const apiKey = "YOUR_API_KEY";
// const steamworksApi = new SteamWebAPI(apiKey);

// const appId = "123456"; // Replace with the actual app ID
// steamworksApi
//   .getGameDetails(appId)
//   .then((gameDetails) => {
//     console.log(gameDetails);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

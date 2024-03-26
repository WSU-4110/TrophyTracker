export interface SteamWebGames {
  applist: {
    apps: SteamWebGame[];
  };
}

export interface SteamWebGame {
  appid: number;
  name: string;
}

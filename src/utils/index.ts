import { type User } from "@/db/Models/User";

export const getUserTitle = (obj?: User): string =>
  obj ? obj.name ?? obj.email ?? obj.uid ?? obj._id : "[Deleted User]";

export const languageArrayJoin = (arr: string[]): string =>
  arr.join(", ").replace(/, ([^,]*)$/, " and $1");

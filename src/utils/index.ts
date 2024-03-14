import { type User } from "@/db/Models/User";

/**
 * A standardized way to get a user's title from User db obj
 * @param obj {User} User db object
 * @returns {string} The user's name, email, uid, or _id, or "[Deleted User]" if the user is null
 */
export const getUserTitle = (obj?: User): string =>
  obj ? obj.name ?? obj.email ?? obj.uid ?? obj._id : "[Deleted User]";

/**
 * Make lists of items human-readable
 * @param arr {string[]} Array of strings
 * @returns {string} Human-readable list of items
 */
export const languageArrayJoin = (arr: string[]): string =>
  arr.join(", ").replace(/, ([^,]*)$/, " and $1");

/**
 * Truncate text to a certain length
 * @param text {string} The text to truncate
 * @param length {number} The maximum length of the text
 * @returns {string} The truncated text
 */
export const textOverflow = (text: string, length = 200): string =>
  text.length > length ? text.slice(0, length) + "..." : text;

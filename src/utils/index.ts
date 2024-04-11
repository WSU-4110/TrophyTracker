import { load } from "cheerio";
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

export const cleanHTML = (html: string): string => html.replace(/<[^>]*>/g, "");

export const parseHTML = (html: string): string => {
  const $ = load(html);
  // Define mappings for HTML elements and their desired attributes
  const elementMappings = {
    h1: { class: "text-4xl font-bold" },
    h2: { class: "text-3xl font-semibold" },
    h3: { class: "text-2xl font-semibold" },
    h4: { class: "text-xl font-semibold" },
    h5: { class: "text-lg font-semibold" },
    h6: { class: "text-normal font-semibold" },
    a: { class: "tt-link" },
    // Add more mappings as needed for other elements
  };

  // Iterate over each mapping and apply it to the HTML elements
  for (const [selector, attributes] of Object.entries(elementMappings)) {
    $(selector).attr(attributes);
  }

  return $.html();
};

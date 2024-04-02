// used for achievement filtering
type FilterKey = "game" | "author" | "difficulty";
type value = string;
export type Filter = Record<FilterKey, value>;
type SortKey = "createdAt" | "likes" | "comments";
export type Sort = Record<SortKey, 1 | -1>;

"use client";

import { type Game } from "@/db/Models/Game";
import { type User } from "@/db/Models/User";
import { Label, Select } from "flowbite-react";
import * as React from "react";
import SubHeader from "./SubHeader";

interface AchievementFilterProps {
  games: Array<Partial<Game> & { _id: string }>;
  users: Array<Partial<User>>;
}

const classes = {
  option: "text-gray-900 bg-gray-200",
};
const difficultyOptions = [
  { value: "", label: "All Difficulties" },
  { value: 1, label: "Very Easy" },
  { value: 2, label: "Easy" },
  { value: 3, label: "Medium" },
  { value: 4, label: "Hard" },
  { value: 5, label: "Very Hard" },
];

export default function AchievementFilter({
  games,
  users,
}: AchievementFilterProps) {
  const gamesRef = React.useRef<HTMLSelectElement | null>(null);
  const difficultyRef = React.useRef<HTMLSelectElement | null>(null);
  const authorRef = React.useRef<HTMLSelectElement | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const gamesSelect = gamesRef.current;
    const difficultySelect = difficultyRef.current;
    const authorSelect = authorRef.current;
    const params = new URLSearchParams(window.location.search);
    const game = params.get("game");
    const difficulty = params.get("difficulty");
    const author = params.get("author");
    if (game ?? difficulty ?? author) {
      setLoading(true);
    }
    if (gamesSelect && difficultySelect && authorSelect) {
      if (game) {
        gamesSelect.value = game;
      }
      if (difficulty) {
        difficultySelect.value = difficulty;
      }
      if (author) {
        authorSelect.value = author;
      }
      setLoading(false);
      const onGamesChange = () => {
        params.set("game", gamesSelect.value);
        window.location.search = params.toString();
      };
      const onDifficultyChange = () => {
        params.set("difficulty", difficultySelect.value);
        window.location.search = params.toString();
      };
      const onAuthorChange = () => {
        params.set("author", authorSelect.value);
        window.location.search = params.toString();
      };
      gamesSelect.addEventListener("change", onGamesChange);
      difficultySelect.addEventListener("change", onDifficultyChange);
      authorSelect.addEventListener("change", onAuthorChange);

      return () => {
        gamesSelect.removeEventListener("change", onGamesChange);
        difficultySelect.removeEventListener("change", onDifficultyChange);
        authorSelect.removeEventListener("change", onAuthorChange);
      };
    }
  }, []);
  return (
    <div>
      <SubHeader title="Filter Achievements" />
      <div className="mb-4 flex items-center justify-between gap-2 md:items-start">
        <div className="w-full">
          <Select
            disabled={loading}
            ref={gamesRef}
            id="filter-games"
            className="mb-4"
          >
            <option value="">All Games</option>
            {games.map(({ _id, name }) => (
              <option
                className={classes.option}
                key={String(_id)}
                value={String(_id)}
              >
                {name}
              </option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <Select
            disabled={loading}
            ref={difficultyRef}
            id="filter-difficulty"
            className="mb-4"
          >
            {difficultyOptions.map(({ value, label }) => (
              <option className={classes.option} key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <Select
            disabled={loading}
            ref={authorRef}
            id="filter-author"
            className="mb-4"
          >
            <option value="">All Authors</option>
            {users.map(({ _id, email, uid, name }) => (
              <option
                className={classes.option}
                key={String(_id)}
                value={String(_id)}
              >
                {name ?? email ?? uid}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

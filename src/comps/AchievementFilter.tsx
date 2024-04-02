"use client";

import { type Game } from "@/db/Models/Game";
import { type User } from "@/db/Models/User";
import { Accordion, Button, Select } from "flowbite-react";
import * as React from "react";
import SubHeader from "./SubHeader";
import { BsFilter } from "react-icons/bs";

interface AchievementFilterProps {
  games: Array<Partial<Game> & { _id: string }>;
  users: Array<Partial<User>>;
}

const classes = {
  option: "text-gray-900 bg-gray-200",
  layout: "mb-4 flex items-center justify-between gap-2 md:items-start",
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
  const sortRef = React.useRef<HTMLSelectElement | null>(null);
  const orderRef = React.useRef<HTMLSelectElement | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const gamesSelect = gamesRef.current;
    const difficultySelect = difficultyRef.current;
    const authorSelect = authorRef.current;
    const sortSelect = sortRef.current;
    const orderSelect = orderRef.current;
    const params = new URLSearchParams(window.location.search);
    const game = params.get("game");
    const difficulty = params.get("difficulty");
    const author = params.get("author");
    const sort = params.get("sort");
    const order = params.get("order");
    if (game ?? difficulty ?? author ?? sort ?? order) {
      setLoading(true);
    }
    if (
      gamesSelect &&
      difficultySelect &&
      authorSelect &&
      sortSelect &&
      orderSelect
    ) {
      if (game) {
        gamesSelect.value = game;
      }
      if (difficulty) {
        difficultySelect.value = difficulty;
      }
      if (author) {
        authorSelect.value = author;
      }
      if (sort && order && ["asc", "desc"].includes(order)) {
        sortSelect.value = sort;
        orderSelect.value = order;
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
      const onSortChange = () => {
        if (orderSelect.value && sortSelect.value) {
          params.set("sort", sortRef.current?.value ?? "");
          window.location.search = params.toString();
        }
      };
      const onOrderChange = () => {
        if (orderSelect.value && sortSelect.value) {
          params.set("order", orderRef.current?.value ?? "");
          window.location.search = params.toString();
        }
      };
      gamesSelect.addEventListener("change", onGamesChange);
      difficultySelect.addEventListener("change", onDifficultyChange);
      authorSelect.addEventListener("change", onAuthorChange);
      sortSelect.addEventListener("change", onSortChange);
      orderSelect.addEventListener("change", onOrderChange);

      return () => {
        gamesSelect.removeEventListener("change", onGamesChange);
        difficultySelect.removeEventListener("change", onDifficultyChange);
        authorSelect.removeEventListener("change", onAuthorChange);
        sortSelect.removeEventListener("change", onSortChange);
        orderSelect.removeEventListener("change", onOrderChange);
      };
    }
  }, []);
  return (
    <Accordion className="mb-2" collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <div className="flex gap-1">
            {" "}
            <BsFilter size={25} /> Filter/Sort
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div>
            <SubHeader title="Filter" />
            <div className={classes.layout}>
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
                    <option
                      className={classes.option}
                      key={value}
                      value={value}
                    >
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
            <SubHeader title="Sort" />
            <div className={classes.layout}>
              <div className="w-full">
                <Select
                  ref={sortRef}
                  disabled={loading}
                  id="sort-by"
                  className="mb-4"
                >
                  <option value="">Sort By ...</option>
                  <option value="createdAt">Date Created</option>
                  <option value="comments">Comments</option>
                  <option value="likes">Likes</option>
                </Select>
              </div>
              <div className="w-full">
                <Select
                  ref={orderRef}
                  disabled={loading}
                  id="sort-order"
                  className="mb-4"
                >
                  <option value="">Order ...</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="p-2"
              onClick={() => {
                window.location.search = "";
              }}
            >
              Clear
            </Button>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

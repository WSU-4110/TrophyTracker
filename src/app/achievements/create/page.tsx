"use client";
import {
  Button,
  Label,
  RangeSlider,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import create from "@/server/actions/achievement/create";
import { BsFillSendFill } from "react-icons/bs";
import { all } from "@/server/actions/game/games";
import useSWR from "swr";
import dynamic from "next/dynamic";
import React from "react";
import Breadcrumbs from "@/comps/Breadcrumbs";
import { useSession } from "next-auth/react";
import { ToastContext } from "@/comps/ToastProvider";

const Loader = () => (
  <div className="flex gap-2 py-3">
    <Spinner />
    <p>Loading Editor...</p>
  </div>
);

const Editor = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: Loader,
});

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="tt-page-layout">
    <h1 className="tt-heading">Create an achievement</h1>
    <Breadcrumbs
      crumbs={[
        { name: "Achievements", href: "/achievements" },
        { name: "Create", href: "/achievements/create" },
      ]}
    />
    <div className="tt-layout text-black">{children}</div>
  </div>
);

export default function Page() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [content, setContent] = React.useState("");
  const { addToast } = React.useContext(ToastContext);
  useSession({ required: true });
  const { data: games, isLoading } = useSWR("games", async () => {
    return await all();
  });
  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  if (!games) {
    return (
      <Layout>
        <div className="flex gap-2 py-2">
          <p>No games found.</p>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <form
        ref={formRef}
        className="flex w-full flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const confirmWarning = window.confirm(
            "Are you sure you want to submit?",
          );
          if (!confirmWarning) return;
          const formData = new FormData(formRef.current!);
          formData.set("content", content);
          const response = await create(formData);
          if (response.error) {
            addToast({ message: response.error, type: "error" });
          } else if (response.message) {
            addToast({ message: response.message, type: "success" });
            if (response?.data?._id) {
              window.location.href = `/achievement/${String(response.data._id)}/?message=${response.message}`;
            }
            return;
          } else if (response.errors) {
            // eslint-disable-next-line @typescript-eslint/no-for-in-array
            for (const error in response.errors) {
              addToast({
                message: String(response.errors[error]),
                type: "error",
                timeout: 10000,
              });
            }
          }
        }}
      >
        <div className="mt-2 block ">
          <Label
            htmlFor="name"
            className="text-black"
            value="Achievement name"
          />
        </div>
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
        <div>
          <div className="mb-1 block">
            <Label htmlFor="diff" className="text-black" value="Difficulty" />
          </div>
          <RangeSlider
            defaultValue={1}
            max={5}
            min={1}
            step={1}
            sizing="lg"
            name="difficulty"
            id="diff"
          />
          <div className="mb-2 block">
            <Label
              htmlFor="games"
              className="text-black"
              value="Choose a game"
            />
          </div>
          <Select id="games" name="game" required>
            {games?.map((game) => (
              <option key={game._id.toString()} value={game._id}>
                {game.name}
              </option>
            ))}
          </Select>
        </div>
        <Editor onChange={(e) => setContent(e)} value={content} theme="snow" />
        <Button className="rounded-t-md" type="submit">
          <BsFillSendFill className="mr-1" /> Submit
        </Button>
      </form>
    </Layout>
  );
}

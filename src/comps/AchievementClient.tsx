// bs BsHeart
"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { type Achievement as AchievementType } from "@/db/Models/Achievement";
import { useSession } from "next-auth/react";
import React from "react";
import { Spinner } from "flowbite-react";
import type Response from "@/types/Response";
import { ToastContext } from "./ToastProvider";

interface AchievementClientProps<ResponseType> {
  _id: string;
  likes: string[];
  comments: AchievementType["comments"];
  className?: string;
  like: (id: string) => Promise<ResponseType>;
  unlike: (id: string) => Promise<ResponseType>;
}

export default function AchievementClient(
  props: AchievementClientProps<Response>,
) {
  const session = useSession();
  const { addToast } = React.useContext(ToastContext);
  const [pending, startTransition] = React.useTransition();
  const myId = session?.data?.user?.person?._id;
  // OPTIMISTIC LIKES (if needed later)
  // const [optimisticLikes, setOptimisticLikes] = React.useOptimistic<
  //   typeof props.likes
  // >(
  //   props.likes,
  //   //@ts-expect-error weird ts errpr
  //   (state: typeof props.likes, newLike: string) =>
  //     state.some((predicate) => predicate === newLike)
  //       ? state.filter((predicate) => predicate !== newLike)
  //       : [...state, newLike],
  // );
  const [likes, setLikes] = React.useState(props.likes);
  const liked = likes.includes(myId?.toString() ?? "");
  // just installed useswr, and just made user.ts helper functions
  if (session.status === "loading") return <Spinner />;
  // TODO: these functions should be combined and in a hook
  if (session.status === "unauthenticated") return null;
  function like() {
    startTransition(async () => {
      // setOptimisticLikes((prev: string[]) => [...prev, myId?.toString()]);
      const data = await props.like(props._id.toString());
      if (data.error) {
        addToast({
          message: data.error,
          type: "error",
        });
        return;
        // setOptimisticLikes((prev: string[]) =>
        //   prev.filter((predicate) => predicate !== myId?.toString()),
        // );
      }
      setLikes((prev) => [...prev, myId?.toString() ?? ""]);
      addToast({
        // @ts-expect-error there will be a message if no error
        message: data.message,
        type: "success",
      });
    });
  }
  function unlike() {
    startTransition(async () => {
      const data = await props.unlike(props._id.toString());
      if (data.error) {
        addToast({
          message: data.error,
          type: "error",
        });
        return;
      }
      setLikes((prev: string[]) =>
        prev.filter((predicate) => predicate !== myId?.toString()),
      );
      addToast({
        // @ts-expect-error there will be a message if no error
        message: data.message,
        type: "success",
      });
    });
  }
  return (
    <div className={props.className}>
      <div className="my-6 flex cursor-pointer items-start justify-start rounded-lg bg-slate-200 p-5">
        {/* // @ts-expect-error there should be that payload  */}
        <div
          onClick={() => {
            if (liked) {
              unlike();
            } else {
              like();
            }
          }}
          className="mr-1 mt-1 transition-all hover:animate-pulse  hover:text-red-500"
        >
          {pending ? (
            <Spinner size="sm" />
          ) : liked ? (
            <BsHeartFill size={22} />
          ) : (
            <BsHeart size={22} />
          )}
        </div>
        <span className="inline text-xl font-semibold">{likes.length}</span>
      </div>
    </div>
  );
}

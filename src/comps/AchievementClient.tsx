"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { type Achievement as AchievementType } from "@/db/Models/Achievement";
import { useSession } from "next-auth/react";
import React from "react";
import { Spinner } from "flowbite-react";
import { ToastContext } from "./ToastProvider";
import Comments from "./Comments";
import like from "@/server/actions/achievement/like";
import unlike from "@/server/actions/achievement/unlike";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface AchievementClientProps {
  _id: string;
  likes: string[];
  comments: AchievementType["comments"];
  className?: string;
}

export default function AchievementClient(props: AchievementClientProps) {
  const session = useSession();
  const { addToast } = React.useContext(ToastContext);
  const [pending, startTransition] = React.useTransition();
  const myId = session?.data?.user?.person?._id;
  const path = usePathname();
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
  const comments = React.useState(props.comments)[0];
  const liked = likes.includes(myId?.toString() ?? "");
  // just installed useswr, and just made user.ts helper functions
  if (session.status === "loading") return <Spinner />;
  // TODO: these functions should be combined and in a hook
  if (session.status === "unauthenticated")
    return (
      <div className=" rounded-lg bg-slate-200 p-5">
        <p className="text-semibold text-xl">
          You must be{" "}
          <Link
            className="text-indigo-500"
            href={`/api/auth/signin?callbackUrl=${path}`}
          >
            signed in
          </Link>{" "}
          to comment and like.
        </p>
      </div>
    );
  function likeHandler() {
    startTransition(async () => {
      // setOptimisticLikes((prev: string[]) => [...prev, myId?.toString()]);
      const data = await like(props._id.toString());
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
  function unlikeHandler() {
    startTransition(async () => {
      const data = await unlike(props._id.toString());
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
      <div className="my-6 ml-[-2px] rounded-lg bg-slate-200 p-5">
        <span className="flex cursor-pointer items-start justify-start">
          {/* // @ts-expect-error there should be that payload  */}
          <div
            onClick={() => {
              if (liked) {
                unlikeHandler();
              } else {
                likeHandler();
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
          <br />
        </span>
        <div className="w-full">
          <Comments achievementId={props._id} comments={comments} />
        </div>
      </div>
    </div>
  );
}

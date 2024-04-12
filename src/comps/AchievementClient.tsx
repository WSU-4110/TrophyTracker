"use client";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
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
import { remove } from "@/server/actions/achievement";
import Role from "@/types/Role";
interface AchievementClientProps {
  _id: string;
  authorID: string;
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
  const isAdmin = session.data?.user.person?.role == Role.ADMIN;
  const comments = React.useState(
    props.comments.map((comment) => ({
      isAuthor: session.data?.user.person._id === comment.author._id || isAdmin,
      ...comment,
    })),
  )[0];
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
            className="text-indigo-500 hover:underline"
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

  function deleteHandler() {
    startTransition(async () => {
      const removeWithConfirmation = confirm(
        "Are you sure you want to delete this achievement?",
      );
      if (!removeWithConfirmation) return;
      const formData = new FormData();
      formData.append("id", props._id);
      await remove(formData);
    });
  }

  return (
    <div className={props.className}>
      <div className="my-6 ml-[-2px] rounded-lg bg-slate-300 p-5">
        <span className="flex items-start justify-start">
          <div
            onClick={() => {
              if (liked) {
                unlikeHandler();
              } else {
                likeHandler();
              }
            }}
            className="mb-2 mr-1 mt-1 cursor-pointer transition-all hover:animate-pulse hover:text-red-500"
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
          {myId ? (
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            (myId.toString() === props.authorID || isAdmin) && (
              <div
                onClick={deleteHandler}
                className="ml-2 mt-[2px] cursor-pointer transition-all hover:text-red-800"
              >
                <BsFillTrashFill size={22} />
              </div>
            )
          ) : (
            <></>
          )}
        </span>
        <div className="w-full">
          <Comments achievementId={props._id} comments={comments} />
        </div>
      </div>
    </div>
  );
}

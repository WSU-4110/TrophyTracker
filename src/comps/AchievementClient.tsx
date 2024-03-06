// bs BsHeart
"use client";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { type Achievement as AchievementType } from "@/db/Models/Achievement";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { Spinner } from "flowbite-react";

interface AchievementClientProps {
  _id: string;
  likes: string[];
  comments: AchievementType["comments"];
  className?: string;
  like: (id: string) => void;
  unlike: (id: string) => void;
}

export default function AchievementClient(props: AchievementClientProps) {
  const session = useSession();
  const [pending, startTransition] = useTransition();
  const myId = session?.data?.user?.person?._id;
  const liked = props.likes.includes(myId?.toString() ?? "");
  // just installed useswr, and just made user.ts helper functions
  if (session.status === "loading") return <Spinner />;
  if (session.status === "unauthenticated") return null;
  function like() {
    startTransition(() => {
      props.like(props._id.toString());
    });
  }
  function unlike() {
    startTransition(() => {
      props.unlike(props._id.toString());
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
            <BsHeartFill />
          ) : (
            <BsHeart />
          )}
        </div>
        <span className="inline font-semibold">{props.likes.length}</span>
      </div>
    </div>
  );
}

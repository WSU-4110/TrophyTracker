import Breadcrumbs from "@/comps/Breadcrumbs";
import Drawer from "@/comps/Drawer";
import ProfilePic from "@/comps/ProfilePic";
import Share from "@/comps/Share";
import Achievement from "@/db/Models/Achievement";
import User from "@/db/Models/User";
import connect from "@/db/connect";
import Role from "@/types/Role";
import { getUserTitle } from "@/utils";
import { Badge, Button } from "flowbite-react";
import { isValidObjectId } from "mongoose";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Bs123, BsCalendarDate, BsMailbox, BsStarFill } from "react-icons/bs";

export async function generateStaticParams() {
  await connect();
  await User.init();
  await Achievement.init();
  const users = await User.find({}).lean();
  const paths = users.map((user) => ({
    params: {
      uid: String(user._id),
    },
  }));
  return paths;
}

export default async function SpecificUser({
  params,
}: {
  params: { uid: string };
}) {
  await connect();
  await User.init();
  await Achievement.init();
  if (!isValidObjectId(params.uid))
    return redirect("/users?error=Invalid User ID");
  const user = await User.findOne({ _id: params.uid }).lean();
  const achievements = await Achievement.find({ author: params.uid }).select(
    "likes comments",
  );
  const numLikes = achievements
    .map(({ likes }) => likes.length)
    .reduce((a, b) => a + b, 0);
  const numComments = achievements
    .map(({ comments }) => comments.length)
    .reduce((a, b) => a + b, 0);
  if (!user) return redirect("/users?error=User not found");
  const name = getUserTitle(user);
  return (
    <div className="tt-page-layout">
      <h1 className="tt-heading mb-2">{name}&apos;s Profile</h1>
      <Breadcrumbs
        className="mb-6"
        crumbs={[
          { name: "Users", href: "/users" },
          { name, href: "#" },
        ]}
      />
      <div className="w-full text-center">
        <ProfilePic name={name} img={user.img} rounded size={"xl"} />
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-2xl font-bold">{name}</h1>
          {user?.role == Role.ADMIN && (
            <Badge color="purple">{user?.role?.toUpperCase()}</Badge>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Received <span className="font-bold">{numLikes} likes</span> &{" "}
          <span className="font-bold">{numComments} comments</span>.
        </p>
      </div>
      <div>
        <Drawer icon={<Bs123 />} title="User Info">
          <p>
            ID: <b>{String(user?._id)}</b>
          </p>
          {user?.role && (
            <p>
              Role: <b>{user?.role.toUpperCase()}</b>
            </p>
          )}
        </Drawer>
        {user.email && (
          <Drawer icon={<BsMailbox />} title="Email">
            <Link className="tt-link" href={`mailto:${user.email}`}>
              {user.email}
            </Link>
          </Drawer>
        )}
        <Drawer icon={<BsCalendarDate />} title="Last Login">
          <p>{user.lastLogin.toLocaleString()}</p>
        </Drawer>
        {achievements.length > 0 && (
          <Drawer
            icon={<BsStarFill />}
            title={`${achievements.length} Achievement(s)`}
          >
            <Button
              as={Link}
              href={`/achievements/?author=${String(user?._id)}`}
            >
              View {name}&apos;s {achievements.length} achievements
            </Button>
          </Drawer>
        )}
        <Share title="Share Profile" />
      </div>
    </div>
  );
}

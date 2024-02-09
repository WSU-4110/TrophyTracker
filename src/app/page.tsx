import { Hero } from "@/comps/Hero";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

async function Welcome() {
  const session = await getServerSession();
  return (
    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
      Welcome
      <span className="text-[hsl(280,100%,70%)]">
        {session ? ` ${session.user.name}.` : "."}
      </span>
    </h1>
  );
}

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 md:items-start">
      <Hero />
    </div>
  );
}

import Hero from "@/components/Hero";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TrophyTracker",
  description: "TrophyTracker.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}

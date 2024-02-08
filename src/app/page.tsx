import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrophyTracker",
  description:
    "TrophyTracker TrophyTracker TrophyTracker TrophyTracker TrophyTracker",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Faq />
      <Team />
      <Contact />
      <Clients />
    </main>
  );
}

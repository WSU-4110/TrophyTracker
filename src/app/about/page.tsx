import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LearnMore from "@/components/LearnMore";
import Team from "@/components/Team";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Welcome to TrophyTracker",
  description:
    "Track all your achievemnts across multiple platforms all in one spot.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <LearnMore />
      <Team />
    </main>
  );
};

export default AboutPage;

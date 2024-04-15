/* eslint-disable @typescript-eslint/no-unused-vars */
import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LearnMore from "@/components/LearnMore";
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
    </main>
  );
};

export default AboutPage;

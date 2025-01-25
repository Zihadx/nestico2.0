import HeroSection from "@/components/Home/Hero/HeroSection";
import HomeOwnersHelped from "@/components/Home/HomeOwnersHelped/HomeOwnersHelped";

import Projects from "@/components/Home/Projects/Projects";
import WorksSections from "@/components/Home/Works/Works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <WorksSections />
      <HomeOwnersHelped />
    </div>
  );
}

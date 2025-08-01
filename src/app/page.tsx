import HeroSection from "@/components/Home/Hero/HeroSection";
import HomeOwnersHelped from "@/components/Home/HomeOwnersHelped/HomeOwnersHelped";
import MoreProjects from "@/components/Home/Projects/MoreProjects";

import Projects from "@/components/Home/Projects/Projects";
import WorksSections from "@/components/Home/Works/Works";


const HomePage = async () => {

  const dataRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`, { cache: "no-cache" })
  const allData = await dataRes.json();
  // console.log("Data:", allData)
  return (
    <div>
      <HeroSection  allData={allData}/>
      <Projects />
      <MoreProjects/>
      <WorksSections />
      <HomeOwnersHelped />
    </div>
  );
};

export default HomePage;

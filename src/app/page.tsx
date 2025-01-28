import HeroSection from "@/components/Home/Hero/HeroSection";
import HomeOwnersHelped from "@/components/Home/HomeOwnersHelped/HomeOwnersHelped";

import Projects from "@/components/Home/Projects/Projects";
import WorksSections from "@/components/Home/Works/Works";
import Navbar from "@/components/Shared/Navbar/Navbar";

const HomePage = async () => {

  const dataRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`, { cache: "no-cache" })
  const allData = await dataRes.json();
  console.log("Data:", allData)
  return (
    <div>
      <Navbar allData={allData} /> 
      <HeroSection  allData={allData}/>
      <Projects />
      <WorksSections />
      <HomeOwnersHelped />
    </div>
  );
};

export default HomePage;


import ConsultationSection from "@/components/Home/ConsultationSection/ConsultationSection";
import DownloadAppSection from "@/components/Home/DownloadAppSection/DownloadAppSection";
import HappyClients from "@/components/Home/HappyClients/HappyClients";
import HeroSection from "@/components/Home/Hero/HeroSection";
import HireProsSection from "@/components/Home/HireProsSection/HireProsSection";
import CompanyProgress from "@/components/Home/Progress/CompanyProgress";

import Projects from "@/components/Home/Projects/Projects";
import TrustSecuritySection from "@/components/Home/TrustSecuritySection/TrustSecuritySection";
import WorksSections from "@/components/Home/Works/Works";
import ScrollDown from "@/components/ScrollToTop/ScrollDown/ScrollDown";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";


const HomePage = async () => {

  const dataRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`, { cache: "no-cache" })
  const allData = await dataRes.json();
  // console.log("Data:", allData)
  return (
    <div>
      <HeroSection  allData={allData}/>
      <Projects allData={allData}/>
      {/* <MoreProjects/> */}
      <WorksSections />
      <TrustSecuritySection/>
      <HireProsSection/>
      <HappyClients />
      <DownloadAppSection/>
      <CompanyProgress/>
      <ConsultationSection/>
      
  
      <ScrollDown />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;

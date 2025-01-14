import HomeOwnersHelped from "@/components/Home/HomeOwnersHelped/HomeOwnersHelped";
import WorksSections from "@/components/Home/Works/Works";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* navbar implement here------ */}
      <Navbar />
      <div>{children}</div>
      <WorksSections />
      <HomeOwnersHelped />
      <Footer />
    </div>
  );
};

export default CommonLayout;

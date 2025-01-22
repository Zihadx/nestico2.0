"use client"
import HomeOwnersHelped from "@/components/Home/HomeOwnersHelped/HomeOwnersHelped";
import WorksSections from "@/components/Home/Works/Works";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isFormRoute = pathname.endsWith("/form");

  return (
    <div>
      {!isFormRoute && <Navbar />}
      <div>{children}</div>
      {!isFormRoute && (
        <>
          <WorksSections />
          <HomeOwnersHelped />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProjectLayout;

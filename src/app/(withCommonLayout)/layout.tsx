import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* navbar implement here------ */}
      <Navbar />
      <div className="h-screen">
      {children}
      </div>
      <Footer/>
    </div>
  );
};

export default CommonLayout;

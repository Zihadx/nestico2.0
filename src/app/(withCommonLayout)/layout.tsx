import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* navbar implement here------ */}
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../../../../assets/neulogo.png";


interface ProjectType {
  label: string;
  value: string;
}

const ProjectTypes: ProjectType[] = [
  { label: "Walk In Shower", value: "walk-in-shower" },
  { label: "Walk In Tub", value: "walk-in-tub" },
  { label: "Kitchen Remodeling", value: "kitchen-remodeling" },
  { label: "Window Replacement", value: "window-replacement" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("Select project type");
  const router = useRouter();



  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavigate = (): void => {
    if (selectedValue === "Select project type") {
      alert("Please select a project type!");
      return;
    }
    router.push(`/projects/${selectedValue}`);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-slate-200"
      }`}
    >
      <div className="container mx-auto px-4 py-1 max-w-[1200px]">
        {!isScrolled ? (
          <div className="py-3">
            <Link href="/">
              <Image src={logo} alt="Neu-Logo" width={146} height={146} />
            </Link>
          </div>
        ) : (
          <div className="">
            <h3 className="text-center text-xl font-semibold mb-2">
              Start your Home Improvement Project
            </h3>
            <div className="flex flex-wrap justify-center items-center rounded-lg gap-2 md:gap-0">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-white px-4 py-2 md:rounded-l-sm md:rounded-r-none rounded-sm w-full sm:w-[250px] text-left shadow-sm shadow-gray-300">
                  {selectedValue}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full sm:w-[250px]">
                  {ProjectTypes.map((project) => (
                    <DropdownMenuItem
                      key={project.value}
                      onClick={() => setSelectedValue(project.value)}
                    >
                      {project.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>


              <button
                onClick={handleNavigate}
                className="bg-green-500 text-white px-4 py-2 md:rounded-r-sm rounded-sm md:rounded-l-none hover:bg-green-600 w-full sm:w-auto min-w-[120px]"
              >
                Get Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

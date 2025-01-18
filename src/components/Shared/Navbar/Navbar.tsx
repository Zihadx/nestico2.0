"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../../../../assets/neulogo.png";
import Link from "next/link";

interface ProjectType {
  label: string;
  value: string;
}

const projectTypes: ProjectType[] = [
  { label: "Walk In Shower", value: "walk-in-shower" },
  { label: "Walk In Tub", value: "walk-in-tub" },
  { label: "Kitchen Remodeling", value: "kitchen-remodeling" },
  { label: "Window Replacement", value: "window-replacement" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select project type");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelect = (value: string) => setSelectedValue(value);

  const handleNavigate = () => {
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
      <div className="container mx-auto px-4 py-1 max-w-7xl">
        {!isScrolled && (
          <div className="py-4">
            <Link href="/">
              <Image src={logo} alt="Neu-Logo" width={150} height={150} />
            </Link>
          </div>
        )}

        {isScrolled && (
          <div className="">
            <h3 className="text-center text-xl font-semibold mb-2">
              Start your Home Improvement Project
            </h3>
            <div className="flex flex-wrap justify-center items-center rounded-lg gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-white px-4 py-2 rounded-sm w-full sm:w-[250px] text-left shadow-sm shadow-gray-300">
                  {selectedValue}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full sm:w-[250px]">
                  {projectTypes.map((project) => (
                    <DropdownMenuItem
                      key={project.value}
                      onClick={() => handleSelect(project.value)}
                    >
                      {project.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={handleNavigate}
                className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 w-full sm:w-auto min-w-[120px]"
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

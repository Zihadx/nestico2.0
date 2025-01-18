"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import img from "../../../../assets/yt.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projectTypes = [
  { label: "Walk In Shower", value: "walk-in-shower" },
  { label: "Walk In Tub", value: "walk-in-tub" },
  { label: "Kitchen Remodeling", value: "kitchen-remodeling" },
  { label: "Window Replacement", value: "window-replacement" },
];

const HeroSection = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    "Select project type"
  );
  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleNavigate = () => {
    if (selectedValue === "Select project type") {
      alert("Please select a project type!");
      return;
    }
    router.push(`/projects/${selectedValue}`);
  };

  return (
    <section className="relative bg-gray-50 mt-20 py-10 h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 h-full z-10 text-gray-950">
        <div className="lg:w-1/2 my-28">
          <div className="bg-green-100 p-4 rounded-full my-3 w-1/2"></div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            A New Way for Home Improvement <br /> Projects
          </h1>
          <p className="text-xl mb-6 text-gray-500 leading-normal">
            Transform Your Home with Ease: Discover the Perfect Helping Hand for
            Stress-Free Home Improvement <br /> Projects.
          </p>
        </div>

        {/* Dropdown and Button------------------ */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-semibold mb-4">
            Start your Home Improvement Project
          </h3>
          <div className="flex flex-wrap justify-center items-center rounded-lg gap-2 md:gap-0">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white px-4 py-2 md:rounded-l-sm md:rounded-r-none rounded-sm w-full sm:w-[250px] text-left shadow-xl shadow-gray-300">
                {selectedValue}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px]">
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
              className="bg-green-500 text-white px-4 py-2 md:rounded-r-sm rounded-sm md:rounded-l-none hover:bg-green-600 w-full sm:w-auto min-w-[120px]"
            >
              Get Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

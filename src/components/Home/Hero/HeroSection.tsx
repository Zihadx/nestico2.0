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
    <section className="relative bg-gray-50 mt-10 py-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />


      <div className="relative">
        <div className="lg:w-1/2 z-10 px-6 py-12 lg:py-20 lg:px-28 text-gray-950">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            A New Way for Home Improvement Projects
          </h1>
          <p className="text-lg mb-6">
            Transform Your Home with Ease: Discover the Perfect Helping Hand for
            Stress-Free Home Improvement Projects.
          </p>
        </div>

        {/* Dropdown and Button------------------ */}
        <div className="flex justify-center">
          <div className="flex items-center shadow-lg rounded-lg">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white px-4 py-3 rounded-l-lg w-[250px] text-left">
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
              className="bg-green-500 text-white px-4 py-3 rounded-r-lg hover:bg-green-600"
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

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [allData, setAllData] = useState<{ id: string; title: string }[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle selection of project type
  const handleSelect = (id: string) => {
    setSelectedValue(id);
  };

  // Fetch data for allData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`);
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle scroll to toggle navbar styles
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed px-4 top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-gray-200"}`}
    >
      <div className="container mx-auto px-4 py-2 max-w-[1180px]">
        {!isScrolled ? (
          <div className="py-3">
            <Link href="/">
              <Image
                src="images/logo.svg"
                alt="Neu-Logo"
                width={142}
                height={142}
              />
            </Link>
          </div>
        ) : (
          <div>
            <h3 className="text-center text-xl font-semibold mb-2">
              Start your Home Improvement Project
            </h3>
            <div className="flex flex-wrap justify-center items-center rounded-lg gap-2 md:gap-0">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-white px-4 py-2 md:rounded-l-sm md:rounded-r-none rounded-sm w-full sm:w-[250px] text-left shadow-xl shadow-gray-300">
                  {selectedValue
                    ? allData.find((item) => item.id === selectedValue)?.title
                    : "Select project type"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[250px]">
                  {allData.length > 0 ? (
                    allData.map((project) => (
                      <DropdownMenuItem
                        key={project.id}
                        onClick={() => handleSelect(project.id)}
                      >
                        {project.title}
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <DropdownMenuItem disabled>
                      No projects available
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href={`/${selectedValue}`} passHref>
                <button className="bg-green-500 text-white px-4 py-2 md:rounded-r-sm rounded-sm md:rounded-l-none hover:bg-green-600 w-full sm:w-auto min-w-[120px]">
                  Get Estimate
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface AllData {
  allData: { id: string; title: string }[];
}

const HeroSection = ({ allData }: AllData) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (id: string) => {
    setSelectedValue(id);
  };

  return (
    <section className="relative min-h-[85vh] py-8 overflow-hidden px-2 md:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="Background"
          layout="fill"
          objectPosition="100% center"
          className="w-full h-full object-cover lg:object-contain translate-x-40 md:translate-x-0"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 via-[45%] to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-[1180px] px-2 h-full z-10 text-gray-950">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="bg-[#22d3ee] opacity-10 h-[28px] rounded-full my-2 w-60"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.h1
            className="text-3xl text-[#064f5a] md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Upgrade Your Space: The Ultimate Partner for Hassle-Free Home Improvement
          </motion.h1>
          <motion.p
            className="text-lg mb-6 text-gray-500 leading-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Say goodbye to stress and chaos. Find the perfect solution to make your
            home upgrade smooth, simple, and totally under control — no sweat, all
            style.
          </motion.p>
        </motion.div>

        {/* Dropdown and Button */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h3
            className="text-center text-xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Start your Home Improvement Project
          </motion.h3>

          <motion.div
            className="flex justify-center items-center rounded-lg gap-2 md:gap-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white px-4 py-2 md:rounded-l-sm md:rounded-r-none rounded-sm w-full sm:w-[250px] text-left shadow-xl shadow-gray-300 transition hover:shadow-gray-400">
                {selectedValue
                  ? allData.find((item) => item.id === selectedValue)?.title
                  : "Select project type"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px]">
                {allData.map((project) => (
                  <DropdownMenuItem
                    key={project.id}
                    onClick={() => handleSelect(project.id)}
                  >
                    {project.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={`/${selectedValue}`} passHref>
              <button className="bg-[#22d3ee] text-white px-4 py-2 md:rounded-r-sm rounded-sm md:rounded-l-none hover:bg-[#22d3ee]/70 w-full sm:w-auto min-w-[150px] transition">
                Get Estimate
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Dots */}
      <motion.div
        className="absolute bottom-0 left-0 z-0 m-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Image src="/images/dots-v.svg" width={160} height={160} alt="dot-v" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

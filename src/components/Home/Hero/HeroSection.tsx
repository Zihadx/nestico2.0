"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Hammer,
  Paintbrush,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AllData {
  allData: { id: string; title: string }[];
}

const HeroSection = ({ allData }: AllData) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (id: string) => {
    setSelectedValue(id);
  };

  // Add this state + effect at the top inside your component
  const images = [
    "/images/hero/hero.png",
    "/images/hero/Hero1.png",
    "/images/hero/hero2.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* hero section top gradient --- */}
      {/* 
      <div
        className="absolute top-0 inset-x-0 h-28 
    bg-gradient-to-b from-white/70 to-transparent 
    dark:from-gray-900/80 dark:to-transparent 
    pointer-events-none z-[5]"
      /> */}

      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-lg" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center my-10">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-200/60 rounded-full text-cyan-500 text-sm font-medium shadow-sm mb-4">
            Hassle-Free Home Upgrades
          </span>

          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-8 00">
            Upgrade Your Space with{" "}
            <span className="text-cyan-500">Premium Home Services</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Say goodbye to the stress of home improvement. We connect you with
            trusted professionals for smooth, stylish, and stress-free upgrades.
          </p>

          {/* Dropdown + CTA */}
          <motion.div
            className="mt-8 flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="p-[1px] rounded-[7px] bg-gradient-to-r from-[#22d3ee] via-[#0c3b4a] to-[#104b5f] w-full sm:w-[250px]">
                  <Button
                    variant="outline"
                    className="flex items-center justify-between w-full bg-white shadow-lg hover:shadow-xl border-none"
                  >
                    {selectedValue
                      ? allData.find((item) => item.id === selectedValue)?.title
                      : "Select project type"}
                    <ChevronDown className="ml-2 w-4 h-4 text-cyan-600" />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px]">
                {allData.map((project) => (
                  <DropdownMenuItem
                    key={project.id}
                    onClick={() => handleSelect(project.id)}
                    className="flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-gray-500" />
                    {project.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={`/${selectedValue || "#"}`} passHref>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition flex items-center gap-2"
                disabled={!selectedValue}
              >
                Get Estimate
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Side */}

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Remove overflow-hidden so badge isn't cut */}
          <div className="relative w-full max-w-md rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={images[currentImage]}
                  alt="Home Improvement"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 md:-left-10 left-1/4 bg-cyan-50/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-cyan-600 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Paintbrush className="w-8 h-8 text-cyan-500" />
              <div>
                <p className="text-sm text-cyan-700 font-medium">
                  Stylish Interior
                </p>
                <p className="text-xs text-gray-500">Modern & Minimal</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Inspiration {
  images: string[];
}

interface Project {
  id: string;
  title: string;
  inspirations: Inspiration;
}

interface InspirationProps {
  allData: Project[];
  projectId: string;
}

const transition = { type: "spring", stiffness: 100, damping: 20, duration: 0.6 };

const Inspirations = ({ allData, projectId }: InspirationProps) => {
  const project = allData.find((item) => item.id === projectId);

  if (!project) return null;

  const { inspirations, title } = project;
  const total = inspirations.images.length;

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, total]);

  const prevSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev + 1) % total);
  };

  const variants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="max-w-[1180px] mx-auto my-20 px-6 select-none">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left: Image with fade-up animation */}
        <div className="relative flex-1 rounded-3xl overflow-hidden shadow-2xl min-h-[480px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0 rounded-3xl overflow-hidden"
            >
              <Image
                src={inspirations.images[current]}
                alt={`Inspiration ${current + 1}`}
                fill
                className="object-cover rounded-3xl"
                draggable={false}
                priority={true}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#22d3ee] to-[#104b5f]"
                pointerEvents="none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Content & Controls */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-5xl font-extrabold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#104b5f] font-serif">
            Inspirations
          </h2>
          <p className="text-gray-600 max-w-md mb-8 text-lg font-sans">
            Carefully curated visuals that inspire your vision for{" "}
            <strong>{title}</strong>.
          </p>

          {/* Slide Indicator */}
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#104b5f] font-serif tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-2xl text-gray-500 font-semibold font-mono select-none">
              / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation Buttons Vertical */}
          <div className="flex flex-col space-y-6 mb-10">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#104b5f] shadow-lg text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-14 h-14 rounded-full bg-gradient-to-l from-[#22d3ee] to-[#104b5f] shadow-lg text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex space-x-4">
            {inspirations.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full transition-all ${
                  idx === current
                    ? "bg-gradient-to-r from-[#22d3ee] to-[#104b5f] shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;

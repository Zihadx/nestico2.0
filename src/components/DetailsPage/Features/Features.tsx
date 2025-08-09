"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { SquareCheckBig } from "lucide-react";

interface Feature {
  description: string;
  list: string[];
  images: string[];
}

interface Project {
  id: string;
  features: Feature;
}

interface AdvantagesProps {
  allData: Project[];
  projectId: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 130, damping: 22 } },
  hover: { scale: 1.07, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)" },
};

const featureItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 160, damping: 22 } },
};

const Features = ({ allData, projectId }: AdvantagesProps) => {
  const project = allData.find((item) => item.id === projectId);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!project) return null;

  const { features } = project;

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-100 overflow-hidden"
      style={{ "--gradient-start": "#22d3ee", "--gradient-end": "#104b5f" } as React.CSSProperties}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h2
          variants={featureItemVariants}
          className="text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent"
        >
          Features
        </motion.h2>
        <motion.p
          variants={featureItemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-700 mb-16"
          style={{ letterSpacing: "0.02em" }}
        >
          {features.description}
        </motion.p>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16"
        >
          {features.images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              whileHover="hover"
              className="relative rounded-3xl bg-white bg-opacity-40 backdrop-blur-md shadow-lg cursor-pointer overflow-hidden border border-white/30 transition-shadow"
              style={{ boxShadow: "0 10px 20px rgba(34, 211, 238, 0.15)" }}
            >
              <Image
                src={src}
                alt={`Feature image ${idx + 1}`}
                width={320}
                height={220}
                className="rounded-3xl object-cover"
                placeholder="blur"
                blurDataURL={src}
                draggable={false}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22d3ee]/30 to-[#104b5f]/30 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Feature List */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {features.list.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={featureItemVariants}
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-5 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-3xl border border-white/40 shadow-md cursor-pointer select-none transition-transform"
            >
              <SquareCheckBig
                size={36}
                strokeWidth={2.5}
                className="text-[var(--gradient-start)] drop-shadow-lg transition-colors duration-300 group-hover:text-[var(--gradient-end)]"
              />
              <p className="text-xl font-semibold text-slate-900 leading-snug">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;

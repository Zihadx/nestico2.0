"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ThumbsUp, User, CalendarDays, Smile } from "lucide-react";

const stats = [
  {
    icon: <ThumbsUp size={36} className="text-white" />,
    value: "100%",
    label: "Quality",
  },
  {
    icon: <User size={36} className="text-white" />,
    value: "2500+",
    label: "People Working",
  },
  {
    icon: <CalendarDays size={36} className="text-white" />,
    value: "8 Years",
    label: "Years Experience",
  },
  {
    icon: <Smile size={36} className="text-white" />,
    value: "900+",
    label: "Happy Smiles",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CompanyProgress = () => {
  return (
    <section className="bg-[#f8f8f8] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="bg-gradient-to-br from-[#42b1e7] to-[#24e4eb] w-20 h-20 flex items-center justify-center rounded-full shadow-md mb-4">
              {stat.icon}
            </div>
            <div className="text-xl font-bold text-black mb-1">
              {stat.value}
            </div>
            <div className="text-gray-700">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyProgress;

"use client";

import React from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ThumbsUp, User, CalendarDays, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: <ThumbsUp size={36} className="text-white" />,
    value: 100,
    label: "Quality",
    isPercent: true,
  },
  {
    icon: <User size={36} className="text-white" />,
    value: 2500,
    label: "People Working",
  },
  {
    icon: <CalendarDays size={36} className="text-white" />,
    value: 8,
    label: "Years Experience",
  },
  {
    icon: <Smile size={36} className="text-white" />,
    value: 900,
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

const useCountUp = (end: number, duration = 1.5) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [inView, end, duration]);

  return { count, ref };
};

const CompanyProgress = () => {
  return (
    <section className="bg-[#f8f8f8] py-20 px-4" id="next-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => {
          const { count, ref } = useCountUp(stat.value);

          return (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              ref={ref}
            >
              <div className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md mb-4">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-black mb-1">
                {stat.isPercent
                  ? `${count}%`
                  : stat.label === "8 Years"
                  ? `${count} Years`
                  : `${count}+`}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyProgress;

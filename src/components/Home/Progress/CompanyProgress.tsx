"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { ThumbsUp, User, CalendarDays, Smile } from "lucide-react";

const stats = [
  { icon: ThumbsUp, value: 100, label: "Quality", isPercent: true },
  { icon: User, value: 2500, label: "People Working" },
  { icon: CalendarDays, value: 8, label: "Years Experience", suffix: " Years" },
  { icon: Smile, value: 900, label: "Happy Smiles", suffix: "+" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const useCountUp = (end: number, duration = 1.5) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
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
    <section className="bg-[#f8f8f8] py-20 px-4">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => {
          const { count, ref } = useCountUp(stat.value);
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              ref={ref}
              className="flex flex-col items-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] w-20 h-20 flex items-center justify-center rounded-full shadow-lg mb-4">
                <Icon size={36} className="text-white" />
              </div>

              {/* Counter */}
              <div className="text-2xl font-bold text-black mb-1">
                {stat.isPercent ? `${count}%` : `${count}${stat.suffix ?? ""}`}
              </div>

              {/* Label */}
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyProgress;

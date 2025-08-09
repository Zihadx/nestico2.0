"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, ShieldCheck, Clock } from "lucide-react";

interface Advantage {
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  advantages: Advantage[];
}

interface AdvantagesProps {
  allData: Project[];
  projectId: string;
}

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
  hover: { scale: 1.03, boxShadow: "0 20px 40px rgba(8,15,30,0.15)" },
};

const badgeIcons = [<Sparkles />, <Rocket />, <ShieldCheck />, <Clock />];

const Advantages = ({ allData, projectId }: AdvantagesProps) => {
  const project = allData.find((item) => item.id === projectId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!project) return null;

  const { title, advantages } = project;

  // Handle keyboard toggling (accessibility)
  const toggleOpen = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-14 px-4 bg-gradient-to-b from-white to-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold">
            Advantages of{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-transparent bg-clip-text">
              {" "}
              {title}
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Carefully crafted benefits to make your experience seamless,
            trustworthy, and fast.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Badge className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] border-[#22d3ee]">
              Trusted Pros
            </Badge>
            <Badge className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] border-[#22d3ee]">
              Fast Booking
            </Badge>
            <Badge className="bg-gradient-to-r from-[#22d3ee] to-[#104b5f] border-[#22d3ee]">
              Secure Payments
            </Badge>
          </div>
        </motion.header>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {advantages.map((adv, idx) => (
            <motion.li
              key={idx}
              variants={cardVariant}
              whileHover="hover"
              className="relative rounded-3xl cursor-pointer focus-within:outline-cyan-400 outline-none"
            >
              <Card className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-md rounded-3xl p-6 h-full flex flex-col">
                <div className="flex items-start gap-5">
                  <div className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center text-[#22d3ee] text-2xl select-none pointer-events-none">
                    {badgeIcons[idx % badgeIcons.length]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-900 select-none">
                        {adv.title}
                      </h3>
                      <Button
                        size="sm"
                        variant="ghost"
                        aria-expanded={openIndex === idx}
                        aria-controls={`advantage-details-${idx}`}
                        onClick={() => toggleOpen(idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleOpen(idx);
                          }
                        }}
                        className="select-none"
                      >
                        {openIndex === idx ? "Close" : "Details"}
                      </Button>
                    </div>

                    <p className="mt-2 text-gray-600 text-sm line-clamp-2 select-text">
                      {adv.description}
                    </p>

                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          id={`advantage-details-${idx}`}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 12,
                          }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-gray-700 text-sm select-text"
                        >
                          {/* Replace below with actual extended content if needed */}
                          <p>
                            Detailed information about this advantage to help
                            you understand the value and how it benefits you.
                          </p>
                           <div className="mt-3 flex items-center gap-2">
                              <Button size="sm">Learn more</Button>
                              <Button size="sm" variant="ghost">How it works</Button>
                            </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>

              {/* subtle accent ring */}
              <motion.span
                className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-cyan-200 opacity-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.06 }}
                transition={{ delay: 0.25 + idx * 0.04 }}
              />
            </motion.li>
          ))}
        </motion.ul>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex items-center justify-center"
        >
          <Button size="lg">Book this service</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;

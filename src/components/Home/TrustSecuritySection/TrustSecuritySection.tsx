"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Trophy,
  BadgeCheck,
  Users,
  Wallet,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Clock3 size={40} className="text-white" />,
    title: "SAVES YOU TIME",
    description:
      "We help you live smarter, giving you time to focus on what's most important.",
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />,
    title: "FOR YOUR SAFETY",
    description:
      "All of our Helpers undergo rigorous identity checks and personal interviews. Your safety is our concern too.",
  },
  {
    icon: <Trophy size={40} className="text-white" />,
    title: "BEST-RATED PROFESSIONALS",
    description:
      "Our experienced taskers perform their tasks with dedication and perfection. We appreciate your reviews about the service.",
  },
  {
    icon: <BadgeCheck size={40} className="text-white" />,
    title: "WE ARE WELL EQUIPPED",
    description:
      "Let us know if you have any specific equipment, otherwise our guys carry their own supplies.",
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: "ALWAYS IN TOUCH",
    description:
      "Book your service online on one tap, keep a track of your service status and also keep in touch with your Helper.",
  },
  {
    icon: <Wallet size={40} className="text-white" />,
    title: "CASH-FREE FACILITY",
    description: "Pay through secure online mode only after your job is done.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TrustSecuritySection = () => {
  return (
    <section className="bg-[#22d3ee] py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Trust and Security
        </h2>
        <div className="w-16 h-1 bg-white mx-auto mt-3 rounded"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className=""
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="mb-4 text-white/90">{item.description}</p>
            <div className="flex items-center gap-1 font-semibold">
              Read More <ArrowRight size={18} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSecuritySection;

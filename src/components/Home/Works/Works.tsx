"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Book",
    description: "Select the date and time like your professional to show up",
    image: "/images/Works/WorksSections1.jpg",
  },
  {
    title: "Schedule",
    description: "Certified Taskers come over and do your task",
    image: "/images/Works/WorksSections2.jpg",
  },
  {
    title: "Relax",
    description: "Your task is completed to your satisfaction — guaranteed",
    image: "/images/Works/WorksSections3.jpg",
  },
];

const WorksSections = () => {
  return (
    <section className="mt-16 px-4 bg-white overflow-hidden" id="next-section">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How it works
        </h2>
        <motion.div
          className="w-12 h-1 bg-[#22d3ee] mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Circle Image */}
            <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-lg mb-4">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              {step.description}
            </p>

            {/* Arrow Between Steps */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute right-[-70px] top-1/2 transform -translate-y-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/Works/WorksSectionsArrow.png"
                  alt="arrow"
                  width={80}
                  height={80}
                  className="-translate-x-4 rotate-45 -translate-y-20"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSections;

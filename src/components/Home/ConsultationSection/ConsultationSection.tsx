"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ConsultationSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-white py-10">
      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Wanted a Free Consultation?
          </h2>
          <p className="text-white mt-2 text-sm sm:text-base">
            we are always ready to welcome you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 lg:mt-0"
        >
          <Button
            variant="outline"
            className="border border-white/50 text-white text-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:text-gray-200"
          >
            Schedule Cleaning
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;

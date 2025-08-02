"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <section
      className="w-full bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-white py-4 my-24 relative"
      id="next-section"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Phone Image with smooth scale-in animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-xs transform scale-[150%]"
        >
          <Image
            width={500}
            height={500}
            src="/images/downloadApp/DownloadApp.png"
            alt="Phone"
            className="w-full drop-shadow-xl rounded-2xl"
          />
        </motion.div>

        {/* Text and Buttons with fade-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-white">DOWNLOAD</span> APP NOW
          </h2>
          <p className="text-white text-lg mb-6">
            Select your device platform and get{" "}
            <br className="hidden md:block" /> download start
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Apple Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                className="border border-white/50 text-white backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:text-gray-200"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/downloadApp/apple.png"
                  alt="Apple"
                  className="mr-2"
                />
                APPLE USER
              </Button>
            </motion.div>

            {/* Android Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                className="border border-white/50 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-gray-200"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/downloadApp/android.png"
                  alt="Android"
                  className="mr-2"
                />
                ANDROID USER
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{
          y: [0, -8, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute bottom-[15%] left-[40%] transform -translate-x-1/2 z-10"
      >
        <Image
          width={100}
          height={100}
          src="/images/downloadApp/appArrow.png"
          alt="Down Arrow"
          className="mx-auto -rotate-12"
        />
      </motion.div>
    </section>
  );
};

export default DownloadAppSection;

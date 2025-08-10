"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const DownloadAppSection = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sending app link to ${phone}`);
  };
  return (
    <section className="w-full bg-gradient-to-r from-[#22d3ee] to-[#104b5f] text-white my-24 relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Phone Image with smooth scale-in animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-xs transform"
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
          className="flex-1 text-center py-16"
        >
          <p className="flex items-center justify-center text-sm text-gray-100 tracking-wider uppercase mb-2">
            <span className="w-8 h-px bg-gray-100 mr-3"></span>
            Download Our App
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white  mb-4">
            Any Service, Any Time, Anywhere.
          </h2>
          <p className="text-gray-100 dark:text-gray-300 mb-6">
            Give us your mobile number. You’ll get an SMS with the app download
            link.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Input
              type="tel"
              placeholder="Type your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full sm:w-[300px] rounded-full text-white bg-white/10 placeholder:text-white border border-white/60 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
              required
            />

            <Button
              type="submit"
              className="bg-[#22d3ee] hover:bg-[#22d3ee]/60 text-white px-6 py-2 rounded-full"
            >
              Get the app
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
        className="absolute top-[34%] left-[60%] md:top-[50%] md:left-[36%] transform md:-translate-x-1/2 z-10 "
      >
        <Image
          width={100}
          height={100}
          src="/images/downloadApp/appArrow.png"
          alt="Down Arrow"
          className="mx-auto rotate-90 md:-rotate-12 scale-y-[-1] md:scale-y-100"
        />
      </motion.div>
    </section>
  );
};

export default DownloadAppSection;

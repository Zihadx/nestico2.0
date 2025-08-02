"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const scrollStep = 10; // slower scroll
    const delay = 15;
    const targetY = document.documentElement.scrollHeight - window.innerHeight;

    const interval = setInterval(() => {
      const currentY = window.scrollY;
      if (currentY + scrollStep >= targetY) {
        window.scrollTo(0, targetY);
        clearInterval(interval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, delay);
  }, []);

  useEffect(() => {
    const handleScrollVisibility = () => {
      const footer = document.getElementById("footer");
      const footerTop = footer?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      setIsVisible(footerTop > windowHeight);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[999]">
          <motion.div
            onClick={handleScroll}
            className="cursor-pointer p-1 rounded-full border h-10 w-6 flex items-center justify-center shadow-xl transition-transform hover:scale-110 bg-gradient-to-r from-[#22d3ee]/70 via-[#0c3b4a]/70 to-[#104b5f]/70"
            initial={{ y: 0 }}
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/downArrow/arrows.png"
              alt="Scroll down"
              width={20}
              height={20}
              className="invert"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ScrollDown;

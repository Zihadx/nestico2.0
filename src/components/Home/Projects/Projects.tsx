"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

// Types------------------
interface ProjectData {
  id: string;
  title: string;
  description?: string;
  img?: string;
  icon?: string;
  slug?: string;
}

interface ProjectsProps {
  allData: ProjectData[];
}

// Constants--------------------
const bgTitleStyles: React.CSSProperties = {
  fontSize: "6rem",
  lineHeight: 1,
  letterSpacing: "-0.05em",
  zIndex: 0,
  userSelect: "none",
  transition: "transform 0.3s ease",
  transform: "translateZ(0) translateY(10px)",
  opacity: 0.4,
};

// Component-----------------
const Projects = ({ allData }: ProjectsProps) => {
  const handleTitleHover = (hover: boolean) => {
    const bgTitle = document.getElementById("bgTitle");
    if (bgTitle) {
      bgTitle.style.transform = hover ? "translateY(0)" : "translateY(10px)";
    }
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-200 via-gray-50 to-gray-100 overflow-hidden">
      {/* Glow Elements--------- */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-800/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/50 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative md:top-1/3 max-w-lg"
        >
          {/* Background Title -----------*/}
          <span
            aria-hidden="true"
            id="bgTitle"
            className="absolute bottom-3 md:left-1/3 text-gray-300 font-extrabold select-none pointer-events-none text-center"
            style={bgTitleStyles}
          >
            Upgrade Your Lifestyle
          </span>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 relative z-10"
            onMouseEnter={() => handleTitleHover(true)}
            onMouseLeave={() => handleTitleHover(false)}
          >
            <span>Upgrade Your Home with our service,</span> <br />
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent relative">
              Upgrade Your Lifestyle
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-700 max-w-lg relative z-10">
            We provide cutting-edge home improvement solutions with unmatched
            quality and modern design.
          </p>
        </motion.div>

        {/* Right Scrollable Card List------------ */}
        <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
          <div className="flex flex-col gap-6">
            {allData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: false }}
              >
                <Link href={`/${service.slug || service.id}`}>
                  <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-all duration-500">
                    {/* Icon------------------ */}
                    <div className="relative flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-800/10 flex items-center justify-center overflow-hidden">
                      {service.icon && (
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={50}
                          height={50}
                          className="z-10 object-contain"
                        />
                      )}
                    </div>

                    {/* Text-------------------- */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm mt-1">
                        {service.description || "No description available."}
                      </p>
                    </div>

                    {/* Arrow---------------- */}
                    <ArrowRight className="text-cyan-400 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar----------------- */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee, #104b5f);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
};

export default Projects;

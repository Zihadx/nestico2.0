import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ScanSearch } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

type BenefitsSectionProps = {
  allData: Project[];
  projectId: string;
};

// Motion variants
const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Benefits = ({ allData, projectId }: BenefitsSectionProps) => {
  const project = allData.find((p) => p.id === projectId);
  const [expanded, setExpanded] = useState<number | null>(null);

  if (!project) return null;

  const { title, description, benefits, image } = project;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const idx = benefits.indexOf(text);
      setExpanded(idx);
      setTimeout(() => setExpanded(null), 900);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-[1180px] mx-auto my-12 px-4"
      aria-labelledby="benefits-heading"
    >
      <div className="flex flex-col items-center text-center mb-8">
        <h2
          id="benefits-heading"
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          {title}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl font-medium">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Benefits list */}
        <motion.div variants={item} className="w-full">
          <Card className="h-full p-1 bg-gradient-to-tr from-white/60 to-slate-50/40 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Key benefits</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Discover the advantages of choosing our service.
                  </p>
                </div>
              </div>

              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="mt-4 flex-1 overflow-auto pr-2"
                role="list"
                aria-label="Project benefits"
              >
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="group relative flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50/70 transition-all cursor-pointer"
                    onClick={() => handleCopy(b)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleCopy(b)}
                    aria-expanded={expanded === i}
                    title="Click to copy"
                  >
                    <span className="flex-none rounded-full bg-[#22d3ee]/10 p-2">
                      <Check className="w-4 h-4 text-[#22d3ee]" />
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold truncate">{b}</p>
                      </div>

                      <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#22d3ee] to-[#104b5f] transition-all" />
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Image with live preview */}
        <motion.div
          variants={item}
          className="w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-100"
          >
            {/* Image Zoom Effect */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Dark overlay with fade-in preview */}
            <motion.div
              className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="backdrop-blur-lg bg-white/20 p-4 rounded-xl">
                <p className="text-white font-bold text-lg">{title}</p>
                <p className="text-white/80 text-sm">{description}</p>
              </div>
            </motion.div>

            {/* Live Preview Badge */}
            <motion.div
              className="absolute left-6 top-6 backdrop-blur-md bg-white/30 px-4 py-2 rounded-2xl flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/60 flex items-center justify-center">
                <ScanSearch className="text-slate-800" />
              </div>
              <div>
                <p className="text-sm font-semibold text-black/50">
                  Live preview
                </p>
                <p className="text-xs text-black/50">Hover to explore</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Benefits;

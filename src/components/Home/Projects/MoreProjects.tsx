"use client";

import { useState } from "react";
import {
  Brush,
  Zap,
  Wrench,
  Cpu,
  DoorOpen,
  Thermometer,
  Truck,
  Bug,
  Paintbrush,
  Hammer,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Service {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const services: Service[] = [
  {
    title: "Cleaning",
    description: "Professional cleaning services for a spotless home.",
    Icon: Brush,
  },
  {
    title: "Electrical",
    description: "Safe and reliable electrical repair and installation.",
    Icon: Zap,
  },
  {
    title: "Plumbing",
    description: "Expert plumbing solutions to keep your water flowing.",
    Icon: Wrench,
  },
  {
    title: "Appliance Repair",
    description: "Fixing home appliances quickly and efficiently.",
    Icon: Cpu,
  },
  {
    title: "Siding Door",
    description: "Upgrade your home’s exterior with quality siding and doors.",
    Icon: DoorOpen,
  },
  {
    title: "Geyser Installation",
    description: "Install and maintain geysers for your comfort.",
    Icon: Thermometer,
  },
  {
    title: "Vehicle Repair",
    description: "Reliable vehicle maintenance and repair services.",
    Icon: Truck,
  },
  {
    title: "Pest Control",
    description: "Keep your home pest-free with our expert services.",
    Icon: Bug,
  },
  {
    title: "Painting",
    description: "Freshen up your home with professional painting.",
    Icon: Paintbrush,
  },
  {
    title: "Carpentry",
    description: "Custom woodworking and repair services.",
    Icon: Hammer,
  },
];

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MoreProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? services : services.slice(0, 8);

  return (
    <section className="mt-16 mb-24 px-4" id="next-section">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800"
        >
          Explore Our More Services
        </motion.h1>

        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {displayed.map(({ title, description, Icon }, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-start hover:shadow-2xl transition-shadow duration-300 group hover:bg-cyan-50"
            >
              <Icon className="w-14 h-14 text-gray-400 mb-4 group-hover:text-cyan-500 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-cyan-700">
                {title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{description}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && services.length > 8 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className="mt-10 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition-all"
          >
            See More
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default MoreProjects;

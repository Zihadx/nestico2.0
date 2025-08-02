"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Service {
  slug: string;
  title: string;
  description: string;
  img: string;
}

// Fake Data---------------
const services: Service[] = [
  {
    slug: "walk-in-shower",
    title: "Walk In Shower",
    description:
      "Upgrade your bathroom with a sleek and modern walk-in shower.",
    img: "/images/icon/Svgs/-_walk in shower.svg",
  },
  {
    slug: "walk-in-tub",
    title: "Walk In Tub",
    description:
      "Enjoy a luxurious and safe bathing experience with our walk-in tubs.",
    img: "/images/icon/Svgs/-_walk in Tubs.svg",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a modern masterpiece.",
    img: "/images/icon/Svgs/-_windows.svg",
  },
  {
    slug: "window-replacement",
    title: "Window Replacement",
    description: "Enhance your home's energy efficiency with new windows.",
    img: "/images/icon/Svgs/-_Kitchen Remodel.svg",
  },
];

// Animation variants for cards
// Animation variants with fixed ease type (array)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // <-- fix here
  },
};

const Projects = () => {
  return (
    <section className="mt-10 mb-20 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto text-center">
      <motion.div initial="hidden" animate="visible" variants={titleVariants}>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Services
        </h1>
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {services.map(({ slug, title, img }, i) => (
          <Link href={`/${slug}`} key={slug} passHref>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-start border-b-2 border-transparent transition-colors duration-500 hover:border-cyan-500 cursor-pointer"
            >
              <Image
                src={img}
                alt={title}
                width={100}
                height={100}
                className="mb-4 mt-6 w-50 h-20"
                priority
              />
              <h3 className="font-medium text-gray-800 group-hover:text-gray-600">
                {title}
              </h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;

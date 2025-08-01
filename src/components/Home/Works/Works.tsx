"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
// import arrowImage from "/images/Works/WorksSectionsArrow.png";
const steps = [
  {
    title: "Book",
    description: "Select the date and time like your professional to show up",
    image: "/images/Works/WorksSections1.jpg",
  },
  {
    title: "Schedule",
    description: "Certified Taskers come over and do your task",
    image:  "/images/Works/WorksSections2.jpg",
  },
  {
    title: "Relax",
    description: "Your task is completed to your satisfaction — guaranteed",
    image:  "/images/Works/WorksSections3.jpg",
  },
];

const WorksSections = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How it works
        </h2>
        <div className="w-12 h-1 bg-[#22d3ee] mx-auto mt-2 rounded-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            {/* Circle Image */}
            <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-md mb-4">
              <Image src={step.image} alt={step.title} fill className="object-cover" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">{step.description}</p>

            {/* Arrow (only between items) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2">
                
                <Image src="/images/Works/WorksSectionsArrow.png" alt={step.title} width={100} height={100} className="-translate-x-4 rotate-12"/>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSections;

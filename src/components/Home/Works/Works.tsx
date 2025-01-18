import React from "react";
import { ChevronRight, MessageSquareMore } from "lucide-react";

interface Work {
  id: number;
  title: string;
  description: string;
}

// Fake data----------
const works: Work[] = [
  {
    id: 1,
    title: "Share",
    description: "Share a few things about your home improvement project.",
  },
  {
    id: 2,
    title: "Match",
    description: "Get matched with one of our friendly local contractors.",
  },
  {
    id: 3,
    title: "Free Estimate",
    description:
      "One of our local contractors will get in touch to set up a 100% free estimate.",
  },
];

const WorksSections = () => {
  return (
    <section className="bg-[#344763] text-white py-14 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">How it works?</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="flex items-center justify-between my-5 lg:my-0"
            >
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-b from-green-400 to-[#58bf81] rounded-t-full rounded-bl-full absolute rotate-45"></div>
                <div className="relative z-10 p-4 rounded-full flex justify-center items-center ">
                  <MessageSquareMore size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-medium relative z-10">
                  {work.id}. {work.title}
                </h3>
                <p className="text-lg text-gray-300 relative z-10">
                  {work.description}
                </p>
              </div>
              {index < works.length - 1 && (
                <ChevronRight
                  size={200}
                  className="hidden lg:block -mt-32 text-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSections;

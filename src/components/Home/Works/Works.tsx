import React from "react";
import Image from "next/image";

import ShareIcon from "../../../../assets/yt.png";
import MatchIcon from "../../../../assets/yt.png";
import EstimateIcon from "../../../../assets/yt.png";
import { StaticImageData } from "next/image";

interface Works {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

// fake data ---------------------

const works: Works[] = [
  {
    id: 1,
    title: "Share",
    description: "Share a few things about your home improvement project.",
    icon: ShareIcon,
  },
  {
    id: 2,
    title: "Match",
    description: "Get matched with one of our friendly local contractors.",
    icon: MatchIcon,
  },
  {
    id: 3,
    title: "Free Estimate",
    description:
      "One of our local contractors will get in touch to set up a 100% free estimate.",
    icon: EstimateIcon,
  },
];

const WorksSections = () => {
  return (
    <section className="bg-[#344763] text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">How it works?</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {works.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="bg-white p-4 rounded-full">
                <Image
                  src={icon}
                  alt={`${title} icon`}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-medium">
                {id}. {title}
              </h3>
              <p className="text-lg text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSections;

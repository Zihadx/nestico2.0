import React from "react";
import Image, { StaticImageData } from "next/image";

import RequestsIcon from "../../../../assets/yt.png";
import EstimatesIcon from "../../../../assets/yt.png";
import ProjectsIcon from "../../../../assets/yt.png";

interface Stat {
  id: number;
  icon: StaticImageData;
  value: string;
  label: string;
  bgColor?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: RequestsIcon,
    value: "10,147",
    label: "Requests submitted",
  },
  {
    id: 2,
    icon: EstimatesIcon,
    value: "2,537",
    label: "Estimates given",
  },
  {
    id: 3,
    icon: ProjectsIcon,
    value: "761",
    label: "Projects Completed",
    bgColor: "bg-[#55bc7e] text-white",
  },
];

const HomeOwnersHelped = () => {
  return (
    <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-medium mb-12">Homeowners we have helped</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map(({ id, icon, value, label, bgColor }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center px-6 py-10 ${
                bgColor ? bgColor : "bg-white text-gray-500"
              }`}
            >
              <Image src={icon} alt={`${label} icon`} width={50} height={50} />
              <h3 className="text-3xl font-bold mt-4">{value}</h3>
              <p className="text-xl font-semibold mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOwnersHelped;

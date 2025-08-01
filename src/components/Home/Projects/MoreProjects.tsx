"use client";
import React, { useState } from "react";
import Link from "next/link";
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

interface Service {
  slug: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const services: Service[] = [
  {
    slug: "cleaning",
    title: "Cleaning",
    description: "Professional cleaning services for a spotless home.",
    Icon: Brush,
  },
  {
    slug: "electrical",
    title: "Electrical",
    description: "Safe and reliable electrical repair and installation.",
    Icon: Zap,
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    description: "Expert plumbing solutions to keep your water flowing.",
    Icon: Wrench,
  },
  {
    slug: "appliance-repair",
    title: "Appliance Repair",
    description: "Fixing home appliances quickly and efficiently.",
    Icon: Cpu,
  },
  {
    slug: "siding-door",
    title: "Siding Door",
    description: "Upgrade your home’s exterior with quality siding and doors.",
    Icon: DoorOpen,
  },
  {
    slug: "geyser-installation",
    title: "Geyser Installation",
    description: "Install and maintain geysers for your comfort.",
    Icon: Thermometer,
  },
  {
    slug: "vehicle-repair",
    title: "Vehicle Repair",
    description: "Reliable vehicle maintenance and repair services.",
    Icon: Truck,
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    description: "Keep your home pest-free with our expert services.",
    Icon: Bug,
  },
  {
    slug: "painting",
    title: "Painting",
    description: "Freshen up your home with professional painting.",
    Icon: Paintbrush,
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    description: "Custom woodworking and repair services.",
    Icon: Hammer,
  },
];

const MoreProjects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 8 if not showAll, else all
  const displayedServices = showAll ? services : services.slice(0, 8);

  return (
    <section className="mt-10 mb-20">
      <div className="max-w-[1180px] mx-auto text-center px-4 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-semibold text-gray-800">Explore More Services</h1>
        <div className="w-12 h-1 bg-[#22d3ee] mx-auto mt-2 rounded-full" />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10">
          {displayedServices.map(({ slug, title, description, Icon }) => (
            <Link
              href={`/${slug}`}
              key={slug}
              className="group bg-gray-100 shadow-md shadow-gray-300 p-6 flex flex-col items-center rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Icon className="text-[#22d3ee] mb-4 w-16 h-16" />
              <h3 className="font-medium text-gray-800 group-hover:text-gray-600 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </Link>
          ))}
        </div>

        {/* Show button only if there are more than 8 and not all shown */}
        {!showAll && services.length > 8 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-10 px-6 py-3 bg-[#22d3ee] text-white rounded-md hover:bg-[#1aa9bb] transition"
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};

export default MoreProjects;

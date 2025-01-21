"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import img from "../../../../../assets/yt.png";

// Fake Data for Testing
const services = [
  {
    id: "walk-in-shower",
    title: "Install A Walk-In Shower",
    description:
      "Upgrade your bathroom with a sleek and modern walk-in shower.",
  },
  {
    id: "walk-in-tub",
    title: "Install A Walk-in Tub",
    description:
      "Enjoy a luxurious and safe bathing experience with our walk-in tubs.",
  },
  {
    id: "kitchen-remodeling",
    title: "Remodel Your Kitchen",
    description: "Transform your kitchen into a modern masterpiece.",
  },
  {
    id: "window-replacement",
    title: "Replace Windows",
    description: "Enhance your home's energy efficiency with new windows.",
  },
];

const ProjectDetails = () => {
  const { projectId } = useParams() as { projectId: string };
  const [location, setLocation] = useState("Loading...");

  // Fetch the user's approximate location using IP
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        setLocation(data.city || "Unknown Location");
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation("Unable to fetch location");
      }
    };

    fetchLocation();
  }, []);

  // Find the project by ID
  const project = services.find((service) => service.id === projectId);

  // Fallback for invalid projectId
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-700">
        <h1 className="text-2xl font-semibold">
          Project not found. Please check the URL or try again.
        </h1>
      </div>
    );
  }

  return (
    <section className="relative bg-gray-50 mt-14 py-8 min-h-[520px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent" />

      <div className="relative mx-auto px-4 h-full z-10 text-gray-950 my-20">
        {/* Content Section ----- */}
        <div className="lg:w-2/5 mx-auto text-center text-gray-800">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            How Much Does It Cost to <span className="">{project.title}</span>{" "}
            in <span className="font-extrabold">{location}</span>
          </h1>
        </div>

        {/* Dropdown and Button */}
        <div className="mt-10">
          <h3 className="text-center text-2xl font-semibold my-5">
            Let's find out, enter your ZIP Code below
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Enter ZIP code"
              aria-label="ZIP code"
              className="border text-sm px-10 py-4 rounded-md focus:outline-none"
            />
            <button
              className="bg-[#55bc7e] text-sm text-white px-3 py-4 rounded-md transition w-full sm:w-auto min-w-[120px]"
              aria-label="Get Estimate"
            >
              Start Free Estimate
            </button>
          </div>
          <p className="text-center font-medium my-2 text-base">
            Free, no-obligation estimates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

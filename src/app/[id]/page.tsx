"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useLocation from "@/components/DetailsPage/locations/dynamicLocations";
import ZipSearchForm from "@/components/DetailsPage/ZipSearchForm/ZipSearchForm";
import Image from "next/image";
import Advantages from "@/components/DetailsPage/Advantages/Advantages";
import Features from "@/components/DetailsPage/Features/Features";
import Inspirations from "@/components/DetailsPage/Inspirations/Inspirations";
import WorksSections from "@/components/Home/Works/Works";
import TestimonialsSlider from "@/components/DetailsPage/Reviews/Reviews";
import Benefits from "@/components/DetailsPage/Benefits/Benefits";

export interface Project {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  advantages: Advantage[];
  features: {
    description: string;
    list: string[];
    images: string[];
  };
  inspirations: {
    images: string[];
  };
}

interface Advantage {
  title: string;
  description: string;
}

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id as string;
  const location = useLocation();
  const [allData, setAllData] = useState<Project[] | null>(null);
  const [zipStatus, setZipStatus] = useState<string | null>(null);
  const [zipDetails, setZipDetails] = useState<{
    city: string;
    state: string;
  } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`,
          {
            cache: "no-cache",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Project[] = await response.json();
        const validData = data.filter((item): item is Project => !!item.id);
        setAllData(validData);
      } catch (error) {
        setAllData(null);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!allData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-700">
        <h1 className="text-2xl font-bold">Loading data...</h1>
      </div>
    );
  }

  const project = allData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-700">
        <h1 className="text-2xl font-bold">
          Project not found. Please check the URL.
        </h1>
      </div>
    );
  }

  return (
    <div className="overflow-hidden mt-20">
   
      <section className="relative bg-gray-50 py-6 h-[320px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt="Background Image"
            width={500}
            height={500}
            className="object-cover w-full h-full "
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20 z-10" />

        <div className="relative max-w-2xl mx-auto px-2 md:px-6 py-4 md:py-8 text-white z-20 mt-20 md:mt-12">
          <div className="text-center mb-4 md:mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-snug">
              How Much Does It Cost to <span>{project.title}</span> in{" "}
              <span className="font-extrabold text-[#22d3ee]">{location}</span>?
            </h1>
          </div>
        </div>
      </section>

      {/* Other Sections------------- */}
      <Benefits allData={allData} projectId={id} />
      <Advantages allData={allData} projectId={id} />
      <Features allData={allData} projectId={id} />
      <Inspirations allData={allData} projectId={id} />
      <WorksSections />
      <TestimonialsSlider />
    </div>
  );
};

export default ProjectDetails;

"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import img from "../../../../../assets/yt.png";
import useLocation from "@/components/loactions/dynamicLocations";
import { services } from "@/data/fakeServiceData";
import ZipSearchForm from "@/components/ZipSearchForm/ZipSearchForm";

type Project = {
  id: string;
  title: string;
};

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const [zipStatus, setZipStatus] = useState<string | null>(null);

  const project = services.find((service) => service.id === projectId) as Project | undefined;

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
    <section className="relative bg-gray-50 py-6 md:py-12 max-h-[480px] md:min-h-[500px] mt-20">
      {/* Background for banner ----------*/}
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent" />

      {/* Banner Content------------ */}
      <div className="relative max-w-2xl mx-auto px-2 md:px-6 py-4 md:py-8 text-gray-800 z-10">
        <div className="text-center mb-4 md:mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-snug">
            How Much Does It Cost to <span>{project.title}</span> in{" "}
            <span className="font-extrabold">{location}</span>?
          </h1>
        </div>

        {/* Form Section---------- */}
        <ZipSearchForm onStatusChange={setZipStatus} />
        {zipStatus && (
          <p
            className={`mt-1 text-sm text-center font-medium ${
              zipStatus === "matched"
                ? "text-green-600"
                : zipStatus === "not_matched"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {zipStatus === "matched"
              ? "ZIP code matched!"
              : zipStatus === "not_matched"
              ? "ZIP code not matched."
              : zipStatus}
          </p>
        )}
        <p className="text-base text-center font-medium text-gray-600 mt-2">
          Free, no-obligation estimates.
        </p>
      </div>
    </section>
  );
};

export default ProjectDetails;

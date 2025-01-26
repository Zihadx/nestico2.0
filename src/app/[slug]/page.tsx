"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import useLocation from "@/components/DetailsPage/loactions/dynamicLocations";
import { services } from "@/data/fakeServiceData";
import ZipSearchForm from "@/components/DetailsPage/ZipSearchForm/ZipSearchForm";
import Image from "next/image";
import WalkInShower from "@/components/DetailsPage/servicesSection/WalkInShower";
import Advantages from "@/components/DetailsPage/Advantages/Advantages";
import Features from "@/components/DetailsPage/Features/Features";
import Inspirations from "@/components/DetailsPage/Inspirations/Inspirations";

type Project = {
  id: string;
  title: string;
  projectid: string;
};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const location = useLocation();
  const [zipStatus, setZipStatus] = useState<string | null>(null);
  const [zipDetails, setZipDetails] = useState<{
    city: string;
    state: string;
  } | null>(null);

  const project = services.find((service) => service.slug === slug) as
    | Project
    | undefined;

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
    <div>
      <section className="relative bg-gray-50 py-6 md:py-12 max-h-[480px] md:min-h-[500px] mt-20">
        {/* Background for banner ----------*/}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/inspiration-slide3.webp"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent z-10" />

        {/* Banner Content -----------*/}
        <div className="relative max-w-2xl mx-auto px-2 md:px-6 py-4 md:py-8 text-gray-800 z-20">
          <div className="text-center mb-4 md:mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-snug">
              How Much Does It Cost to <span>{project.title}</span> in{" "}
              <span className="font-extrabold">{location}</span>?
            </h1>
          </div>
          <ZipSearchForm
            projectId={slug}
            onStatusChange={setZipStatus}
            onZipLocations={setZipDetails}
          />

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
                ? `${zipDetails?.city}, ${zipDetails?.state}`
                : zipStatus === "not_matched"
                ? "ZIP code is currently not serviced by our contractor."
                : zipStatus}
            </p>
          )}

          <p className="text-base text-center font-medium text-gray-600 mt-2">
            Free, no-obligation estimates.
          </p>
        </div>
      </section>
      <div>
        <WalkInShower />
        <Advantages/>
        <Features/>
        <Inspirations/>
      </div>
    </div>
  );
};

export default ProjectDetails;

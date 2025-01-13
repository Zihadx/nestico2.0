"use client";

import React from "react";
import { useParams } from "next/navigation";

// Fake Data For testing--------------------------
const services = [
  {
    id: "walk-in-shower",
    title: "Walk In Shower",
    description:
      "Upgrade your bathroom with a sleek and modern walk-in shower.",
  },
  {
    id: "walk-in-tub",
    title: "Walk In Tub",
    description:
      "Enjoy a luxurious and safe bathing experience with our walk-in tubs.",
  },
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a modern masterpiece.",
  },
  {
    id: "window-replacement",
    title: "Window Replacement",
    description: "Enhance your home's energy efficiency with new windows.",
  },
];

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams() as { projectId: string };

  const project = services.find((service) => service.id === projectId);

  return (
    <div className="flex items-center justify-center">
      {project ? (
        <div className="p-6 max-w-md bg-white rounded-lg shadow-md mt-10">
            <h1 className="font-bold text-3xl text-blue-600 my-10">Project Details Page With Dynamic data.</h1>
          <h1 className="text-xl mb-4">
            {" "}
            Dynamic Title: <span className="text-green-500 font-bold">{project.title}</span>
          </h1>
          <p className="text-gray-700">
            Dynamic description: {project.description}
          </p>
          <h1>Design TO-DO</h1>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
          <p className="text-gray-600 mt-2">
            The service you are looking for doesn&rsquo;t exist.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;

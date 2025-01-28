import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

// Define Types for Data
interface Project {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

interface OfferSectionProps {
  allData: Project[];
  projectId: string;
}

const OfferSection: React.FC<OfferSectionProps> = ({ allData, projectId }) => {
  // Find the selected project
  const project = allData.find((item) => item.id === projectId);

  // Handle missing project
  if (!project) {
    console.warn(`Project with ID "${projectId}" not found.`);
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[1180px] mx-auto my-10 px-4">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold mb-4 text-center">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6 text-center font-semibold">
        {project.description}
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        {/* Benefits Section */}
        <Card className="p-6 w-full md:w-1/2 h-80">
          <CardContent>
            <ul className="space-y-4">
              {project.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 font-bold text-lg"
                >
                  <Check className="text-green-600 w-5 h-5" />
                  <span className="text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-80">
          <Image
            src={project.image}
            alt={project.title}
            height={320}
            width={320}
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

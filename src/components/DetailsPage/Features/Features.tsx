import { SquareCheckBig } from "lucide-react";

interface Feature {
  description: string;
  list: string[];
  images: string[];
}

interface Project {
  id: string;
  features: Feature;
}

interface AdvantagesProps {
  allData: Project[];
  projectId: string;
}

const Features: React.FC<AdvantagesProps> = ({ allData, projectId }) => {
  // Find the selected project
  const project = allData.find((item) => item.id === projectId);

  // Handle missing project
  if (!project) {
    console.warn(`Project with ID "${projectId}" not found.`);
    return null;
  }

  const { features } = project; // Destructure features from the project

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-lg text-gray-600 mb-8">{features.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 mx-auto">
          {features.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Feature image ${index + 1}`}
              className="rounded-sm mx-auto"
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {features.list.map((feature, index) => (
            <div key={index} className="flex items-center my-1">
              <SquareCheckBig strokeWidth={2.5} size={28} className="text-[#55bc7e] flex-shrink-0" />
              <p className="text-xl font-medium ml-4">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

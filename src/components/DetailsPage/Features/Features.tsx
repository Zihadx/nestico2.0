import { SquareCheckBig } from "lucide-react";

const Features = () => {
  const features = [
    "Anti-Slip Technology",
    "Low level entry or curb-less design",
    "Easy-to-grip handrails",
    "Multiple seating options",
    "Wheelchair friendly",
    "Modern and durable shower solutions",
    "Low water usage",
    "Numerous designs available",
  ];

  const images = [
    "/images/feature-1.webp",
    "/images/feature-2.webp",
    "/images/feature-3.webp",
    "/images/feature-4.webp",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-lg text-gray-600 mb-8">
          The ergonomic design of walk-in showers makes them safe and simple to use. They are designed for the entire family and family members who may have limited mobility. Features include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Feature image ${index + 1}`}
              className="rounded-sm mx-auto"
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center p-3">
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

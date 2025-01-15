import Link from "next/link";
import Image from "next/image";
import img from "../../../../assets/yt.png";

interface Service {
  id: string;
  title: string;
  description: string;
}

// Fake Data---------------
const services: Service[] = [
  {
    id: "walk-in-shower",
    title: "Walk In Shower",
    description: "Upgrade your bathroom with a sleek and modern walk-in shower.",
  },
  {
    id: "walk-in-tub",
    title: "Walk In Tub",
    description: "Enjoy a luxurious and safe bathing experience with our walk-in tubs.",
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

const Projects = () => {
  return (
    <section className="mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Home Improvement Projects We Can Help With
        </h1>

        <div className="grid gap-8 md:gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {services.map(({ id, title }) => (
            <Link href={`/projects/${id}`} key={id}>
              <div className="group bg-gray-100 shadow-md shadow-gray-400 rounded-sm p-2 flex flex-col items-center hover:shadow-gray-400 hover:shadow-xl transform transition duration-300 cursor-pointer">
                <Image
                  src={img}
                  alt={title}
                  width={80}
                  height={80}
                  className="mb-4 mt-6"
                />
                <h3 className="font-medium text-gray-800 group-hover:text-gray-600">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

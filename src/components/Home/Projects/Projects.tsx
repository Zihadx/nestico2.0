import Link from "next/link";
import Image from "next/image";


interface Service {
  slug: string;
  title: string;
  description: string;
  img: string
}

// Fake Data---------------
const services: Service[] = [
  {
    slug: "walk-in-shower",
    title: "Walk In Shower",
    description:
      "Upgrade your bathroom with a sleek and modern walk-in shower.",
    img: "/images/icon/Svgs/-_walk in shower.svg", 
  },
  {
    slug: "walk-in-tub",
    title: "Walk In Tub",
    description:
      "Enjoy a luxurious and safe bathing experience with our walk-in tubs.",
    img: "/images/icon/Svgs/-_walk in Tubs.svg", 
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a modern masterpiece.",
    img: "/images/icon/Svgs/-_windows.svg", 
  },
  {
    slug: "window-replacement",
    title: "Window Replacement",
    description: "Enhance your home's energy efficiency with new windows.",
    img: "/images/icon/Svgs/-_Kitchen Remodel.svg", 
  },
];


const Projects = () => {
  return (
    <section className="mt-10">
      <div className="max-w-[1180px] mx-auto text-center px-4 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-semibold text-gray-800">
          Home Improvement Projects We Can Help With
        </h1>

        <div className="grid gap-8 md:gap-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {services.map(({ slug, title, img  }) => (
            <Link href={`/${slug}`} key={slug}>
              <div className="group bg-gray-100 shadow-md shadow-gray-300 p-2 flex flex-col items-center hover:shadow-gray-300 hover:shadow-xl transform transition duration-300 cursor-pointer">
                <Image
                   src={img}
                  alt={title}
                  width={100}
                  height={100}
                  className="mb-4 mt-6 w-50 h-20"
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

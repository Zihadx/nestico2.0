"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Inspirations.css";

interface Inspiration {
  images: string[];
}

interface Project {
  id: string;
  title: string;
  inspirations: Inspiration;
}

interface InspirationProps {
  allData: Project[];
  projectId: string;
}

const Inspirations = ({ allData, projectId }: InspirationProps) => {
  const project = allData.find((item) => item.id === projectId);

  if (!project) {
    // console.warn(`Project with ID "${projectId}" not found.`);
    return null;
  }

  const { inspirations } = project;

  return (
    <section className="py-16 bg-[#ecf1f4] overflow-hidden px-6">
      <div className="max-w-[1180px] mx-auto px-2">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Inspirations
        </h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="rounded-sm overflow-hidden shadow-lg pb-16"
          >
            {inspirations.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[400px] flex items-center justify-center overflow-hidden">
                  <img
                    src={image}
                    alt={`Inspiration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="custom-prev flex absolute top-1/2 -left-10 z-10 -translate-y-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="custom-next flex absolute top-1/2 -right-10 z-10 -translate-y-1/2"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;

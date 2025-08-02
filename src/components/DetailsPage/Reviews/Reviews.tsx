"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  feedback: string;
  clientProfile?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Barbara R",
    feedback:
      "My new walk-in shower is a game-changer! It's like stepping into a spa every morning!",
    clientProfile:
      "https://i.ibb.co/cY8ptVF/caleb-george-Ae-Zncpkq-MVU-unsplash-1.jpg",
  },
  {
    name: "Jason C",
    feedback:
      "Talk about a stress-reliever! This shower has transformed my routine. Highly recommended!",
    clientProfile:
      "https://i.ibb.co/qFtCn3N/pexels-andrea-piacquadio-837140.jpg",
  },
  {
    name: "Jill G",
    feedback:
      "I can't believe I waited this long. It’s stylish, spacious, and the install was a breeze!",
    clientProfile:
      "https://i.ibb.co/cY8ptVF/caleb-george-Ae-Zncpkq-MVU-unsplash-1.jpg",
  },
  {
    name: "Terry F",
    feedback:
      "Feels like a luxurious retreat. Easy to clean, beautifully designed. A must-have!",
    clientProfile:
      "https://i.ibb.co/qFtCn3N/pexels-andrea-piacquadio-837140.jpg",
  },
  {
    name: "Sam O",
    feedback:
      "Didn’t expect it to be this quick. From quote to install in under 7 days. Incredible!",
    clientProfile:
      "https://i.ibb.co/qFtCn3N/pexels-andrea-piacquadio-837140.jpg",
  },
  {
    name: "Thuy L",
    feedback:
      "The barrier-free entry is life-changing for my knees. The rainfall head is dreamy!",
    clientProfile:
      "https://i.ibb.co/qFtCn3N/pexels-andrea-piacquadio-837140.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="mt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Customers Say
        </h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-full py-10">
                <div className="p-6 bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col justify-between border border-white/20 max-w-sm mx-auto text-center">
                  <Quote className="text-cyan-500 w-6 h-6 mb-2 mx-auto" />
                  <p className="text-gray-800 dark:text-gray-200 text-base mb-6 flex-grow">
                    {testimonial.feedback}
                  </p>
                  <div className="flex flex-col items-center gap-2 mt-auto">
                    {testimonial.clientProfile ? (
                      <Image
                        src={testimonial.clientProfile}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-cyan-400 h-14 w-14"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    )}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button
            className="custom-prev absolute top-1/2 -left-6 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-slate-700 rounded-full shadow hover:scale-105 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          <button
            className="custom-next absolute top-1/2 -right-6 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-slate-700 rounded-full shadow hover:scale-105 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

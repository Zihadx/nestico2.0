"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Zabeen Yusuf Nur",
    role: "IT Consultant, Australia",
    feedback:
      "Such service platforms are available in other countries. I’ve personally used those when I was abroad. I’m very pleased that such a portal is available here in Bangladesh as well. Thank you Nestico.",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
  },
  {
    name: "Barbara R",
    role: "Customer, Canada",
    feedback:
      "My new walk-in shower is a game-changer! It's like stepping into a spa every morning! Nestico made it effortless.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Rahim Hasan",
    role: "Small Business Owner, Bangladesh",
    feedback:
      "Nestico helped me upgrade my store's website fast and smooth. Their platform is a real game-changer for local entrepreneurs like me.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Emily Clark",
    role: "Freelance Designer, USA",
    feedback:
      "I love how easy it is to showcase my portfolio on Nestico. The customer support is top-notch and always ready to help!",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Md. Arif",
    role: "Software Engineer, Bangladesh",
    feedback:
      "The user interface is super clean and intuitive. I recommend Nestico to anyone who wants to build their online presence hassle-free.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Sophia Liu",
    role: "Marketing Specialist, Singapore",
    feedback:
      "Nestico’s features helped me boost my client engagement dramatically. This platform knows what entrepreneurs need.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];



const HappyClients = () => {
  return (
    <section className="py-20 bg-gray-100 my-16 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <p className="bg-gray-600 h-[1.2px] w-8 mb-1"></p>
          <p className="text-sm uppercase tracking-wider text-gray-700 dark:text-gray-700 mb-2">
            Some Happy Faces
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-zinc-900">
          Real Happy Customers, Real Stories
        </h2>

        {/* Static Arrows outside slider content */}
        <div className="flex gap-4 absolute -bottom-10 left-20 translate-x-[-50%] z-10 ">
          <button
            className="custom-prev bg-white dark:bg-zinc-700 p-3 rounded-full shadow hover:scale-105 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
          <button
            className="custom-next bg-white dark:bg-zinc-700 p-3 rounded-full shadow hover:scale-105 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Swiper Container ------------*/}
        <div className="relative flex">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="flex-1"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-10 items-start my-8">
                  {/* Left content -------------*/}
                  <div className="flex flex-col justify-between h-full border-l-8 border-cyan-500 p-5">
                    <div className="">
                      <Quote className="w-10 h-10 text-cyan-500 mb-4" />
                      <p className="text-xl italic text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        {testimonial.feedback}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        – {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Video ------------------*/}
                  <div className="w-full">
                    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
                      <video
                        controls
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;

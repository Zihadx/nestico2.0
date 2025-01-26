"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  CircleUser,
  User as UserIcon,
  UserRound,
} from "lucide-react"; // Import the Lucide profile icon

interface Testimonial {
  name: string;
  feedback: string;
}

const Testimonials: Testimonial[] = [
  {
    name: "Barbara R",
    feedback:
      "My new walk-in shower is a game-changer! It's like stepping into a spa every morning. The design is sleek, and the water pressure feels like a mini waterfall. I'm in love!",
  },
  {
    name: "Jason C",
    feedback:
      "Talk about a stress-reliever! This walk-in shower has transformed my daily routine. No more cramped spaces, just pure relaxation. Highly recommended!",
  },
  {
    name: "Jill G",
    feedback:
      "I can't believe I waited so long to get a walk-in shower. It’s a space-saver and a style statement all in one. The installation was a breeze, and I'm thrilled with the results!",
  },
  {
    name: "Terry F",
    feedback:
      "This walk-in shower has changed the way I start my day. It's spacious, easy to clean, and feels like a luxurious retreat. I can't imagine my bathroom without it now!",
  },
  {
    name: "Sam O",
    feedback:
      "We recently moved into our new home at the start of the summer, but needed to fix a few things around here.Didnt realize,  how quick the process would be. Met with the contractor and was able to get it paid installed in less than 7 days! I can't tell you how much we love this upgrade!",
  },
  {
    name: "Thuy L",
    feedback:
      "As someone who struggles with knee pain, the barrier-free entrance is a blessing, and the rainfall showerhead feels like a dream.My bathroom is not only more functional, but looks great too!",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="py-16 my-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Are Saying
        </h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="rounded-lg overflow-hidden"
          >
            {Testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full border flex items-center justify-center">
                    <UserRound className="w-10 h-10" />
                  </div>
                  <h4 className="font-semibold my-4 text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="mb-4 text-sm text-gray-700">
                    {testimonial.feedback}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="custom-prev flex absolute top-1/2 -left-12 z-10 -translate-y-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="custom-next flex absolute top-1/2 -right-12 z-10 -translate-y-1/2"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

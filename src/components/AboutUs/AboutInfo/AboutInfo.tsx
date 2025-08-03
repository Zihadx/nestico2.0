import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-16 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 p-4 text-white">
        <div className="relative w-full min-h-[300px] md:min-h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/about/aboutUs.jpg"
            alt="aboutImage"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <p className="text-gray-700">
          We’re a dedicated team of professionals, bringing modern solutions to
          everyday problems—right at your doorstep. Whether it’s fixing a broken
          faucet, servicing your AC, or giving your home the care it deserves,
          we believe in doing things right the first time. Backed by skill,
          passion, and years of hands-on experience, we’re here to make your
          life easier, safer, and more comfortable.
        </p>
        <p className="my-6 text-gray-700">
          From booking to service delivery, we combine technology and trust to
          ensure a smooth and reliable experience. Our platform is built with
          the latest tools—Next.js, TypeScript, Supabase—to give you a fast,
          secure, and easy way to get the help you need. Whether you're a busy
          parent, a working professional, or just need a quick fix—our mission
          is simple: quality service, on time, every time.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              {" "}
              <Star strokeWidth={3} size={20} className="text-cyan-400" />{" "}
              Experienced and skilled professionals
            </p>
            <p className="flex items-center gap-2">
              <Star strokeWidth={3} size={20} className="text-cyan-400" />{" "}
              Customer satisfaction guaranteed
            </p>
            <p className="flex items-center gap-2">
              <Star strokeWidth={3} size={20} className="text-cyan-400" />{" "}
              Transparent pricing with no hidden fees
            </p>
            <p className="flex items-center gap-2">
              <Star strokeWidth={3} size={20} className="text-cyan-400" /> Easy
              online booking and scheduling
            </p>
            <p className="flex items-center gap-2">
              <Star strokeWidth={3} size={20} className="text-cyan-400" /> 24/7
              customer support for your peace of mind
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;

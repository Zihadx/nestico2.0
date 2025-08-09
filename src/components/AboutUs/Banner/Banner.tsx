import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsBanner = () => {
  return (
    <div>
      {/* Background Image ------------------*/}
      <div className="relative w-full h-[320px] mt-20">
        <Image
          src="/images/about/AboutUsBanner.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        {/* Overlay----------------- */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/20" />
        {/* Content ------------------*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">ABOUT US</h1>
          <div className="flex items-center space-x-2 text-base md:text-lg">
            <Link
              href="/"
              className="font-medium hover:underline decoration-cyan-400 hover:decoration-cyan-500"
            >
              Home
            </Link>
            <ChevronsLeft className="text-cyan-400"/>
            <Link
              href="/about"
              className="font-medium hover:underline decoration-cyan-400 hover:decoration-cyan-500"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;

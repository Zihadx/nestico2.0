import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsBanner = () => {
  return (
    <div>
      {/* Background Image ------------------*/}
      <div className="relative w-full h-[200px]">
        <Image
          src="/images/about/AboutUsBanner.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        {/* Overlay----------------- */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-500 to-transparent opacity-80" />
        {/* Content ------------------*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">ABOUT US</h1>
          <div className="flex items-center space-x-2 text-lg md:text-xl">
            <Link
              href="/"
              className="text-lg md:text-xl font-medium hover:underline"
            >
              Home
            </Link>
            <ChevronsLeft />
            <Link
              href="/about"
              className="text-lg md:text-xl font-medium hover:underline"
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

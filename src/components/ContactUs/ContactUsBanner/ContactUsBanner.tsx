import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUsBanner = () => {
  return (
    <div>
      {/* Background Image ------------------*/}
      <div className="relative w-full h-[150px] md:h-[200px]">
        <Image
          src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        {/* Overlay----------------- */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-500 to-transparent opacity-80" />
        {/* Content ------------------*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">CONTACT US</h1>
          <div className="flex items-center space-x-2 text-base md:text-lg">
            <Link
              href="/"
              className="font-medium hover:underline decoration-cyan-400 hover:decoration-cyan-500"
            >
              Home
            </Link>
            <ChevronsLeft className="text-cyan-400"/>
            <Link
              href="/contact"
              className="font-medium hover:underline decoration-cyan-400 hover:decoration-cyan-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;

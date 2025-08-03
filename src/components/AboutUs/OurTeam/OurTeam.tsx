"use client";
import { motion, Variants } from "framer-motion";
import { Facebook, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
// import OurTeamCard from "./OurTeamCard";

interface Professionals {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  rating: number;
  yearsOfExperience: number;
  location: string;
  available: boolean;
  languages: string[];
  specialties: string[];
  badge: string;
  certifications: string[];
  contactEmail: string;
  socials: {
    facebook: string;
    linkedin: string;
    phone: string;
  };
}

const OurTeam = () => {
  const professionals: Professionals[] = [
    {
      id: 1,
      name: "Rakib Hasan",
      role: "Electrical Engineer",
      image: "https://i.ibb.co/qLCZJy35/team-Sajjad.jpg",
      bio: "Specialist in home wiring, circuit upgrades, and smart device integration with over 5 years of hands-on experience.",
      rating: 4.9,
      yearsOfExperience: 6,
      location: "Dhaka",
      available: true,
      languages: ["Bangla", "English"],
      specialties: ["Home Wiring", "Circuit Upgrades", "Smart Devices"],
      badge: "Top Rated",
      certifications: ["BSTI Certified", "Smart Home Specialist"],
      contactEmail: "rakib@fixit.com",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        phone: "tel:+8801700000000",
      },
    },
    {
      id: 2,
      name: "Tania Akter",
      role: "Cleaning Expert",
      image: "https://i.ibb.co/xKyRQdTg/team-Tania.jpg",
      bio: "Expert in deep cleaning, sanitization, and eco-friendly cleaning solutions for residential and commercial spaces.",
      rating: 4.8,
      yearsOfExperience: 4,
      location: "Chattogram",
      available: true,
      languages: ["Bangla"],
      specialties: [
        "Deep Cleaning",
        "Eco-Friendly Cleaning",
        "Office Sanitization",
      ],
      badge: "Verified",
      certifications: ["Certified Cleaning Pro"],
      contactEmail: "tania@fixit.com",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        phone: "tel:+8801711111111",
      },
    },
    {
      id: 3,
      name: "Sajjad Hossain",
      role: "AC & Appliance Technician",
      image: "https://i.ibb.co/qLCZJy35/team-Sajjad.jpg",
      bio: "Certified technician for AC, refrigerator, washing machine, and kitchen appliance repair & maintenance.",
      rating: 4.7,
      yearsOfExperience: 5,
      location: "Sylhet",
      available: false,
      languages: ["Bangla", "English"],
      specialties: ["AC Repair", "Fridge Servicing", "Kitchen Appliances"],
      badge: "New",
      certifications: ["AC & Refrigeration Certified"],
      contactEmail: "sajjad@fixit.com",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        phone: "tel:+8801722222222",
      },
    },
    {
      id: 4,
      name: "Mitu Rani",
      role: "Plumbing Specialist",
      image: "https://i.ibb.co/xKyRQdTg/team-Tania.jpg",
      bio: "Reliable plumber with expertise in leak fixing, pipe installation, and water purifier setup. Always on time.",
      rating: 5.0,
      yearsOfExperience: 7,
      location: "Khulna",
      available: true,
      languages: ["Bangla"],
      specialties: ["Leak Repair", "Pipe Installation", "Water Purifier Setup"],
      badge: "Top Rated",
      certifications: ["Certified Plumber Bangladesh"],
      contactEmail: "mitu@fixit.com",
      socials: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        phone: "tel:+8801733333333",
      },
    },
  ];

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // <-- fix here
    },
  };
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-center my-4"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Team
        </h1>
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-3 rounded-full" />
      </motion.div>

      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 my-10">
          {professionals.map((pro, index) => (
            // <OurTeamCard key={pro.id} pro={pro}/>


            <motion.div
              key={pro.id}
              whileHover={{ scale: 1.005 }}
              className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              {/* Left: Image & Basic Info */}
              <div className="w-full md:w-1/3 text-center flex flex-col items-center">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  width={120}
                  height={120}
                  className="rounded-full w-32 h-32 object-cover border-4 border-cyan-400 mb-2"
                />
                <h2 className="text-lg font-semibold">{pro.name}</h2>
                <p className="text-cyan-600">{pro.role}</p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mt-2 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < Math.round(pro.rating) ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm ml-1">
                    ({pro.rating})
                  </span>
                </div>

                {/* Badge & Availability */}
                <div className="mt-2 flex flex-col items-center">
                  <span className="relative inline-flex items-center justify-center">
                    <span className="absolute w-full h-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                    <span className="relative z-10 px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full">
                      {pro.badge}
                    </span>
                  </span>

                  <span
                    className={`mt-1 text-xs font-medium ${
                      pro.available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {pro.available ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>

              {/* Right: Bio & Details */}
              <div className="w-full md:w-2/3 flex flex-col justify-between">
                <p className="text-gray-600 mb-2">{pro.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {pro.specialties.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Location & Experience */}
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>📍 {pro.location}</span>
                  <span>🛠️ {pro.yearsOfExperience}+ yrs experience</span>
                </div>

                {/* Certifications */}
                {pro.certifications.length > 0 && (
                  <div className="mt-2 text-sm">
                    <span className="font-medium text-gray-700">
                      Certifications:
                    </span>{" "}
                    {pro.certifications.join(", ")}
                  </div>
                )}

                {/* Languages */}
                <div className="mt-2 text-sm">
                  <span className="font-medium text-gray-700">Languages:</span>{" "}
                  {pro.languages.join(", ")}
                </div>

                {/* Contact */}
                <div className="flex items-center gap-3 mt-4 text-cyan-600">
                  {pro.socials.facebook && (
                    <a
                      href={pro.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-800"
                    >
                      <Facebook size={20} />
                    </a>
                  )}
                  {pro.socials.linkedin && (
                    <a
                      href={pro.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-800"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {pro.socials.phone && (
                    <a href={pro.socials.phone} className="hover:text-cyan-800">
                      <Phone size={20} />
                    </a>
                  )}
                  <a
                    href={`mailto:${pro.contactEmail}`}
                    className="ml-auto text-sm "
                  >
                    ✉️{" "}
                    <span className="underline hover:text-cyan-700">
                      {pro.contactEmail}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>


          ))}
        </div>
      </>
    </div>
  );
};

export default OurTeam;

"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import OurTeamCard from "./OurTeamCard";

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
            <OurTeamCard key={pro.id} pro={pro} />
          ))}
        </div>
      </>
    </div>
  );
};

export default OurTeam;

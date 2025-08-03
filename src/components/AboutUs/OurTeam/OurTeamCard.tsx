// "use client";
// import { motion, Variants } from "framer-motion";
// import { Facebook, Linkedin, Phone } from "lucide-react";
// import Image from "next/image";

// const OurTeamCard = ({ pro: proDetails: Professionals[] }) => {
//   const proDetails= {
//     id;
//     name;
//     role;
//     image;
//     bio;
//     rating;
//     yearsOfExperience;
//     location;
//     available;
//     languages: string[];
//     specialties;
//     badge: string;
//     certifications;
//     contactEmail;
//     socials: {
//       facebook;
//       linkedin;
//       phone;
//     };
//   };
//   return (
//     <motion.div
//       key={pro.id}
//       whileHover={{ scale: 1.005 }}
//       className="flex flex-col md:flex-row gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
//     >
//       {/* Left: Image & Basic Info */}
//       <div className="w-full md:w-1/3 text-center flex flex-col items-center">
//         <Image
//           src={pro.image}
//           alt={pro.name}
//           width={120}
//           height={120}
//           className="rounded-full w-32 h-32 object-cover border-4 border-cyan-400 mb-2"
//         />
//         <h2 className="text-lg font-semibold">{pro.name}</h2>
//         <p className="text-cyan-600">{pro.role}</p>

//         {/* Rating Stars */}
//         <div className="flex items-center gap-1 mt-2 text-yellow-400">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i}>{i < Math.round(pro.rating) ? "★" : "☆"}</span>
//           ))}
//           <span className="text-gray-500 text-sm ml-1">({pro.rating})</span>
//         </div>

//         {/* Badge & Availability */}
//         <div className="mt-2 flex flex-col items-center">
//           <span className="relative inline-flex items-center justify-center">
//             <span className="absolute w-full h-full animate-ping rounded-full bg-cyan-300 opacity-75" />
//             <span className="relative z-10 px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full">
//               {pro.badge}
//             </span>
//           </span>

//           <span
//             className={`mt-1 text-xs font-medium ${
//               pro.available ? "text-green-600" : "text-red-500"
//             }`}
//           >
//             {pro.available ? "Available" : "Unavailable"}
//           </span>
//         </div>
//       </div>

//       {/* Right: Bio & Details */}
//       <div className="w-full md:w-2/3 flex flex-col justify-between">
//         <p className="text-gray-600 mb-2">{pro.bio}</p>

//         {/* Specialties */}
//         <div className="flex flex-wrap gap-2 mt-2">
//           {pro.specialties.map((skill, idx) => (
//             <span
//               key={idx}
//               className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* Location & Experience */}
//         <div className="flex gap-4 mt-3 text-sm text-gray-500">
//           <span>📍 {pro.location}</span>
//           <span>🛠️ {pro.yearsOfExperience}+ yrs experience</span>
//         </div>

//         {/* Certifications */}
//         {pro.certifications.length > 0 && (
//           <div className="mt-2 text-sm">
//             <span className="font-medium text-gray-700">Certifications:</span>{" "}
//             {pro.certifications.join(", ")}
//           </div>
//         )}

//         {/* Languages */}
//         <div className="mt-2 text-sm">
//           <span className="font-medium text-gray-700">Languages:</span>{" "}
//           {pro.languages.join(", ")}
//         </div>

//         {/* Contact */}
//         <div className="flex items-center gap-3 mt-4 text-cyan-600">
//           {pro.socials.facebook && (
//             <a
//               href={pro.socials.facebook}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-cyan-800"
//             >
//               <Facebook size={20} />
//             </a>
//           )}
//           {pro.socials.linkedin && (
//             <a
//               href={pro.socials.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-cyan-800"
//             >
//               <Linkedin size={20} />
//             </a>
//           )}
//           {pro.socials.phone && (
//             <a href={pro.socials.phone} className="hover:text-cyan-800">
//               <Phone size={20} />
//             </a>
//           )}
//           <a href={`mailto:${pro.contactEmail}`} className="ml-auto text-sm ">
//             ✉️{" "}
//             <span className="underline hover:text-cyan-700">
//               {pro.contactEmail}
//             </span>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default OurTeamCard;

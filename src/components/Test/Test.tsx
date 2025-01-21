// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// import img from "../../../../../assets/yt.png";
// import supabase from "@/utils/supabase/client";

// // fake data --------------------
// const services = [
//   { id: "walk-in-shower", title: "Install A Walk-In Shower", description: "Upgrade your bathroom with a sleek and modern walk-in shower." },
//   { id: "walk-in-tub", title: "Install A Walk-in Tub", description: "Enjoy a luxurious and safe bathing experience with our walk-in tubs." },
//   { id: "kitchen-remodeling", title: "Remodel Your Kitchen", description: "Transform your kitchen into a modern masterpiece." },
//   { id: "window-replacement", title: "Replace Windows", description: "Enhance your home's energy efficiency with new windows." },
// ];

// const ProjectDetails = () => {
//   const { projectId } = useParams() as { projectId: string };
//   const [location, setLocation] = useState("Loading...");
//   const [zipCode, setZipCode] = useState("");
//   const [zipStatus, setZipStatus] = useState<null | string>(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const response = await fetch("http://ip-api.com/json/");
//         const data = await response.json();
//         setLocation(data.city || "Unknown Location");
//       } catch {
//         setLocation("Unable to fetch location");
//       }
//     };
//     fetchLocation();
//   }, []);

//   const project = services.find((service) => service.id === projectId);

//   const handleZipSearch = async () => {
//     if (!zipCode.trim()) return;
  
//     try {
//       const { data, error } = await supabase
//         .from("neu-home")
//         .select("zip_codes")
//         .ilike("zip_codes", `%${zipCode.trim()}%`); 
//       console.log("Data:", data);
//       console.log("Error:", error);
  
//       if (error) {
//         setZipStatus("Error checking ZIP code");
//       } else if (data.length > 0) {
//         setZipStatus("matched");
//       } else {
//         setZipStatus("not_matched");
//       }
//     } catch (err) {
//       console.error("Unexpected error:", err);
//       setZipStatus("Error checking ZIP code");
//     }
//   };
  
  

//   if (!project) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-700">
//         <h1 className="text-2xl font-bold">Project not found. Please check the URL.</h1>
//       </div>
//     );
//   }

//   return (
//     <section className="relative bg-gray-50 py-6 md:py-12 max-h-[480px] md:min-h-[500px] mt-20">
//       {/* Background for banner */}
//       <div className="absolute inset-0">
//         <Image
//           src={img}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//           className="opacity-30"
//         />
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent" />

//       {/* Banner Content */}
//       <div className="relative max-w-2xl mx-auto px-2 md:px-6 py-4 md:py-8 text-gray-800 z-10">
//         <div className="text-center mb-4 md:mb-10">
//           <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-snug">
//             How Much Does It Cost to <span>{project.title}</span>{" "}
//             in <span className="font-extrabold">{location}</span>?
//           </h1>
//         </div>

//         {/* Form Section */}
//         <div className="text-center">
//           <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">Let's find out! Enter your ZIP code below</h3>
//           <div className="flex justify-center items-center gap-3">
//             <input
//               type="text"
//               placeholder="Enter ZIP code"
//               aria-label="ZIP code"
//               value={zipCode}
//               onChange={(e) => setZipCode(e.target.value)}
//               className="border border-gray-300 text-sm px-6 py-4 rounded-md outline-none transition"
//             />
//             <button
//               onClick={handleZipSearch}
//               className="bg-[#55bc7e] text-sm text-white px-4 py-4 rounded-md hover:bg-[#4aa76d] transition"
//               aria-label="Get Estimate"
//             >
//               Start Free Estimate
//             </button>
//           </div>
//           {zipStatus && (
//             <p
//               className={`mt-3 text-base font-medium ${
//                 zipStatus === "matched"
//                   ? "text-green-600"
//                   : zipStatus === "not_matched"
//                   ? "text-red-600"
//                   : "text-gray-600"
//               }`}
//             >
//               {zipStatus === "matched"
//                 ? "Your ZIP code is valid!"
//                 : zipStatus === "not_matched"
//                 ? "Invalid ZIP code. Please try again."
//                 : zipStatus}
//             </p>
//           )}
//           <p className="text-base font-medium text-gray-600 mt-3">
//             Free, no-obligation estimates.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;

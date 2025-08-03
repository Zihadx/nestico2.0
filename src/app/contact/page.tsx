"use client";

import ContactUsBanner from "@/components/ContactUs/ContactUsBanner/ContactUsBanner";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically load the map only on client-side
const LocationMap = dynamic(() => import("@/components/ContactUs/LocationMap/LocationMap"), {
  ssr: false,
  loading: () => <p className="text-center py-4">Loading map...</p>,
});

const ContactPage = () => {
  return (
    <div>
      <ContactUsBanner />
      <LocationMap />
    </div>
  );
};

export default ContactPage;

"use client";

import ContactForm from "@/components/ContactUs/ContactForm/ContactForm";
import ContactUsBanner from "@/components/ContactUs/ContactUsBanner/ContactUsBanner";
import FAQSection from "@/components/ContactUs/FAQSection/FAQSection";
import WhyWorkWithUs from "@/components/ContactUs/WhyWorkWithUs/WhyWorkWithUs";
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
      <WhyWorkWithUs/>
      <FAQSection/>
      <ContactForm/>
    </div>
  );
};

export default ContactPage;

import AboutInfo from "@/components/AboutUs/AboutInfo/AboutInfo";
import AboutUsBanner from "@/components/AboutUs/Banner/Banner";
import OurServiceProvider from "@/components/AboutUs/OurServiceProvider/OurServiceProvider";
import OurTeam from "@/components/AboutUs/OurTeam/OurTeam";
import TestimonialsSlider from "@/components/DetailsPage/Reviews/Reviews";


import React from "react";

const page = () => {
  return (
    <div>
      <AboutUsBanner />
      <AboutInfo/>
      <OurTeam/>
      <OurServiceProvider/>
     <TestimonialsSlider/>
    </div>
  );
};

export default page;

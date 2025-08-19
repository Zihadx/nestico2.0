"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Trusted Experts at Your Service",
    description:
      "Our vetted professionals bring years of experience in every corner of home improvement — from plumbing to painting, we’ve got your back.",
  },
  {
    title: "On-Time, On-Budget",
    description:
      "No surprises. Get the job done right, on schedule, and within your budget. We believe in transparency and trust from day one.",
  },
  {
    title: "Stress-Free Planning",
    description:
      "We handle the hassle so you don’t have to. Our planning tools and project managers keep everything running smoothly.",
  },
  {
    title: "Sleek Finish, Serious Style",
    description:
      "Upgrade your space with a look that’s both modern and timeless. We don’t just fix — we finesse.",
  },
];

const HireProsSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background with Parallax */}
      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Parallax speed={-60}>
            <div className="relative w-full h-screen">
              <Image
                src="/images/meet/meet.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#22d3ee]/60" />
            </div>
          </Parallax>
        </div>

        {/* Foreground Content */}
        <div className=" relative z-10 flex items-center justify-center min-h-screen mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Image */}
            <motion.div
              className="flex justify-center md:justify-start order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px]">
                <Image
                  src="/images/meet/meet2.png"
                  alt="Home Improvement Pro"
                  width={700}
                  height={700}
                  className="rounded-2xl object-cover h-auto w-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Features */}
            <motion.div
              className="space-y-6 order-1 md:order-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-center md:text-left">
                Meet the Hire Pros
              </h2>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border border-white/20 backdrop-blur-md"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <CheckCircle className="mt-1 text-white" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireProsSection;

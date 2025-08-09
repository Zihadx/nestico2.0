"use client";

import {
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
  Recycle,
  PhoneCall,
  ThumbsUp,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: <Wrench className="text-blue-500" />,
      title: "Multi-Service Experts",
      desc: "Electrical, plumbing, car repair, cleaning — one team, all covered.",
    },
    {
      icon: <Clock className="text-green-500" />,
      title: "24/7 Emergency Support",
      desc: "On-call day or night, ready when your home needs help.",
    },
    {
      icon: <Users className="text-yellow-500" />,
      title: "Friendly, Verified Team",
      desc: "Courteous, trained, and background-checked professionals you can trust.",
    },
    {
      icon: <ShieldCheck className="text-purple-500" />,
      title: "Satisfaction Guaranteed",
      desc: "We don't leave till you're fully happy — or you don’t pay.",
    },
    {
      icon: <Sparkles className="text-pink-500" />,
      title: "Clean Work, Clean Exit",
      desc: "We respect your space — no mess left behind.",
    },
    {
      icon: <ThumbsUp className="text-red-500" />,
      title: "Top-Rated by Locals",
      desc: "Trusted by hundreds of happy customers across the city.",
    },
    {
      icon: <PhoneCall className="text-cyan-500" />,
      title: "Instant Booking & Support",
      desc: "Book in seconds, talk to real humans — no endless wait.",
    },
    {
      icon: <Recycle className="text-teal-500" />,
      title: "Eco-Friendly Practices",
      desc: "We care for your home and the planet with sustainable solutions.",
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: [0.25, 0.8, 0.25, 1], // smoother cubic bezier
      },
    },
  };

  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Collage */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          <motion.div variants={fadeUp} className="md:col-span-3 row-span-2">
            <Image
              src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg"
              alt="Main Banner"
              width={800}
              height={800}
              className="rounded-2xl shadow-2xl object-cover h-full w-full"
            />
          </motion.div>

          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            {[1, 2].map((_, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Image
                  src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg"
                  alt={`Sub ${i + 1}`}
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg object-cover h-40 w-full"
                />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="md:col-span-3">
            <Image
              src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg"
              alt="Tall Sub"
              width={400}
              height={600}
              className="rounded-xl shadow-lg object-cover h-64 w-full"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-6">
            <Image
              src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg"
              alt="Footer Image"
              width={1200}
              height={300}
              className="rounded-2xl shadow-2xl object-cover h-60 w-full"
            />
          </motion.div>
        </motion.div>

        {/* Right: Why Work With Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold text-zinc-800 dark:text-white leading-tight"
          >
            Why Work <span className="text-blue-600">With Us?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-prose"
          >
            We combine trust, skill, and speed to deliver exceptional service
            experiences every time.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                  delay: i * 0.05,
                }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-zinc-800 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;

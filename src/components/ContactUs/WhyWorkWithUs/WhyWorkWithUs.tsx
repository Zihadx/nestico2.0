"use client";

import { Wrench, ShieldCheck, Clock, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyWorkWithUs = () => {
    return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image or Graphic */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full"
        >
          <Image
            src="https://i.ibb.co/WvqVnsqg/contactus-Banner.jpg" // You can replace this with your own SVG or Lottie graphic
            alt="Home Service Graphic"
            width={700}
            height={700}
            className="object-cover rounded-[50px] rounded-tr-md shadow-lg"
            priority
          />
        </motion.div>

        {/* Right: Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
            Why Work With Us?
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <div className="flex items-start gap-3">
              <Wrench className="text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold">Multi-Service Experts</h4>
                <p className="text-sm text-muted-foreground">
                  Electrical, plumbing, car repair, cleaning — one team, all covered.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3">
              <Clock className="text-green-500 mt-1" />
              <div>
                <h4 className="font-semibold">24/7 Emergency Support</h4>
                <p className="text-sm text-muted-foreground">
                  On-call day or night, ready when your home needs help.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-3">
              <Users className="text-yellow-500 mt-1" />
              <div>
                <h4 className="font-semibold">Friendly, Verified Team</h4>
                <p className="text-sm text-muted-foreground">
                  Courteous, trained, and background-checked professionals you can trust.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-purple-500 mt-1" />
              <div>
                <h4 className="font-semibold">Satisfaction Guaranteed</h4>
                <p className="text-sm text-muted-foreground">
                  We don't leave till you're fully happy — or you don’t pay.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex items-start gap-3">
              <Sparkles className="text-pink-500 mt-1" />
              <div>
                <h4 className="font-semibold">Clean Work, Clean Exit</h4>
                <p className="text-sm text-muted-foreground">
                  We respect your space — no mess left behind.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default WhyWorkWithUs;
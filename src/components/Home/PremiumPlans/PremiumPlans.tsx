"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const plans = [
  {
    name: "Basic",
    monthly: 5000,
    yearly: 5000 * 12 * 0.8,
    color: "from-cyan-400 to-cyan-600",
    icon: CheckCircle,
    pitch: "Perfect for getting started.",
    features: [
      "Up to 10 service listings",
      "Basic customer support",
      "Standard response time",
      "Basic analytics",
    ],
  },
  {
    name: "Standard",
    monthly: 8000,
    yearly: 8000 * 12 * 0.8,
    color: "from-cyan-500 to-cyan-700",
    icon: Zap,
    pitch: "The sweet spot for growing teams.",
    features: [
      "Up to 30 service listings",
      "Priority customer support",
      "Faster response time",
      "Advanced analytics",
      "Custom branding options",
    ],
  },
  {
    name: "Premium",
    monthly: 12000,
    yearly: 12000 * 12 * 0.8,
    color: "from-cyan-600 to-cyan-800",
    icon: Star,
    pitch: "For power users who demand the best.",
    features: [
      "Unlimited service listings",
      "24/7 VIP support",
      "Instant response",
      "Full analytics & insights",
      "White-label branding",
      "Dedicated account manager",
    ],
  },
];

export default function PremiumPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    cardRef: React.RefObject<HTMLDivElement>
  ) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / 25);
    const rotateY = x / 25;
    cardRef.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const resetTransform = (cardRef: React.RefObject<HTMLDivElement>) => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-800"
      >
        Unlock Your Premium Potential
      </motion.h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        More than a subscription — it’s your unfair advantage. Gain elite tools,
        exclusive perks, and unstoppable momentum.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center my-8">
        <div
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
          className="relative flex items-center bg-white/20 backdrop-blur-lg rounded-full py-1 px-2 cursor-pointer border border-white/30 shadow-inner"
        >
          <motion.div
            layout
            className="absolute top-0 bottom-0 w-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-800 shadow-lg"
            style={{ left: billingCycle === "monthly" ? "2px" : "50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <span
            className={`z-10 w-20 text-center font-medium ${
              billingCycle === "monthly" ? "text-white" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <span
            className={`z-10 w-20 text-center font-medium ${
              billingCycle === "yearly" ? "text-white" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 perspective-[1200px] px-4 md:px-0">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const cardRef = useRef<HTMLDivElement>(null);

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => resetTransform(cardRef)}
              className={clsx(
                "relative rounded-3xl border border-white/10 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 transform-gpu bg-white/30",
                index === 1
                  ? "md:scale-110 z-20 md:-translate-y-6"
                  : index === 0
                  ? "md:-rotate-y-6"
                  : "md:rotate-y-6"
              )}
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
              }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.color} opacity-20 blur-2xl`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${plan.color} mb-4 relative z-10`}
              >
                <Icon className="text-white w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-900 mb-1 relative z-10">
                {plan.name}
              </h3>
              <p className="text-cyan-700 mb-4 relative z-10">{plan.pitch}</p>

              {/* Price */}
              <p className="text-lg font-semibold text-cyan-600 mb-6 relative z-10">
                {billingCycle === "monthly"
                  ? `${plan.monthly.toLocaleString()} BDT / mo`
                  : `${plan.yearly.toLocaleString()} BDT / yr`}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-cyan-900 text-sm relative z-10">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <CheckCircle className="text-cyan-500 w-4 h-4" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  className="relative w-full bg-gradient-to-r from-cyan-500 to-cyan-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all"
                  size="lg"
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

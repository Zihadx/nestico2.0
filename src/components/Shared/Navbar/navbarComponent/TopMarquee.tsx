"use client";
import Marquee from "react-fast-marquee";
import {
  ShieldCheck,
  Star,
  PhoneCall,
  Truck,
  Wrench,
  Clock,
  ThumbsUp,
  BadgeCheck,
} from "lucide-react";

const TopMarquee = () => {
  const items = [
    { icon: ShieldCheck, text: "Insured & vetted pros" },
    { icon: Star, text: "4.9/5 average rating" },
    { icon: PhoneCall, text: "Emergency same-day service" },
    { icon: Truck, text: "Free doorstep visit" },
    { icon: Wrench, text: "10,000+ jobs completed" },
    { icon: Clock, text: "On-time guarantee" },
    { icon: ThumbsUp, text: "100% satisfaction promise" },
    { icon: BadgeCheck, text: "Certified & trusted experts" },
  ];

  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover
      className="text-xs text-muted-foreground"
      style={{ height: "24px", lineHeight: "24px" }}
    >
      {items.map(({ icon: Icon, text }, idx) => (
        <div
          key={idx}
          className="flex items-center gap-1 mx-6 whitespace-nowrap"
        >
          <Icon className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
          {text}
        </div>
      ))}
    </Marquee>
  );
};

export default TopMarquee;

import { ShieldCheck, Star, PhoneCall } from "lucide-react";

interface MarqueeProps {
  className?: string;
}

export default function Marquee({ className = "" }: MarqueeProps) {
  return (
    <div className={`relative flex items-center gap-6 text-[11px] ${className}`}>
      <div className="flex items-center gap-1">
        <ShieldCheck className="h-3 w-3" />
        Insured & vetted pros
      </div>
      <div className="flex items-center gap-1">
        <Star className="h-3 w-3" />
        4.9/5 average rating
      </div>
      <div className="flex items-center gap-1">
        <PhoneCall className="h-3 w-3" />
        Emergency same‑day service
      </div>
    </div>
  );
}
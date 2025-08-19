"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface MagneticCTAProps {
  href: string;
  children: React.ReactNode;
}

export default function MagneticCTA({ href, children }: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.animate(
        { transform: `translate(${dx * 0.08}px, ${dy * 0.08}px)` },
        { duration: 200, fill: "forwards" }
      );
    };
    
    const onLeave = () =>
      el.animate(
        { transform: "translate(0,0)" },
        { duration: 200, fill: "forwards" }
      );
      
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link
      href={href}
      ref={ref}
      className="relative group inline-flex h-9 items-center overflow-hidden rounded-xl border border-foreground/20 bg-foreground/90 px-4 text-foreground-foreground text-sm font-semibold text-white shadow-md"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="h-4 w-4" /> {children}
      </span>
      {/* Light sweep */}
      <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 transition-transform duration-700 group-hover:translate-x-[120%]" />
    </Link>
  );
}
"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] [background:radial-gradient(600px_at_var(--x)_var(--y),_rgba(99,102,241,0.15),_transparent_60%)]"
    />
  );
}
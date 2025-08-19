"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
  Wrench,
  Droplets,
  Bath,
  Paintbrush2,
  Hammer,
  Bug,
  Car,
  DoorOpen,
  Plug,
  Wind,
  Search,
} from "lucide-react";

import BrandLogo from "./navbarComponent/BrandLogo";
import NavLinks from "./navbarComponent/NavLinks";
import ServicesMegaMenu from "./navbarComponent/ServicesMegaMenu";
import MagneticCTA from "./navbarComponent/MagneticCTA";
import MobileMenu from "./navbarComponent/MobileMenu";
import CommandPalette from "./navbarComponent/CommandPalette";
import AnnouncementStrip from "./navbarComponent/AnnouncementStrip";
import ScrollProgressBar from "./navbarComponent/ScrollProgressBar";
import SpotlightCursor from "./navbarComponent/SpotlightCursor";

// ---------- Helper ----------
const slugify = (s: string) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// ---------- Component ----------
const Navbar = () => {
  const pathname = usePathname();
  const [openCmd, setOpenCmd] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  // Scroll tracking & hide-on-scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setProgress(
        (y / ((document.body.scrollHeight || 1) - window.innerHeight)) * 100
      );
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // Links
  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Services" },
    { href: "/cities", label: "Cities" },
    { href: "/about", label: "About" },
  ];

  // Services
  const services = [
    { icon: Wrench, label: "Plumbing", desc: "Repairs, leaks, fixtures" },
    { icon: Droplets, label: "Geyser Install", desc: "Gas & electric" },
    { icon: Bath, label: "Walk-in Shower", desc: "Design & build" },
    { icon: DoorOpen, label: "Door & Windows", desc: "Sliding, sealing" },
    { icon: Paintbrush2, label: "Painting", desc: "Interior & exterior" },
    { icon: Hammer, label: "Carpentry", desc: "Custom builds" },
    { icon: Bug, label: "Pest Control", desc: "Eco-safe options" },
    { icon: Car, label: "Vehicle Repair", desc: "On-site basic fixes" },
    { icon: Plug, label: "Appliance Repair", desc: "Washer, AC, fridge" },
    { icon: Wind, label: "Window Replacement", desc: "Energy efficient" },
  ];

  return (
    <>
      {/* Scroll bar + spotlight */}
      <ScrollProgressBar progress={progress} />
      <SpotlightCursor />

      {/* Announcement strip */}
      <AnnouncementStrip theme={theme} toggleTheme={toggleTheme} />

      {/* Navbar */}
      <AnimatePresence>
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: hidden ? -96 : 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sticky top-9 z-[50]"
          aria-label="Primary"
        >
          <div className=" fixed w-full">
            <div
              className="mx-auto max-w-7xl w-full px-4 lg:px-8 relative mt-2 flex items-center justify-between 
              rounded-2xl border border-white/40 dark:border-white/10 
              bg-gradient-to-br from-cyan-50/70 via-white/60 to-white/20 
              dark:from-gray-900/60 dark:via-black/40 dark:to-transparent 
              backdrop-blur-xl sm:px-4 py-2 
              shadow-[0_8px_60px_-12px_rgba(0,0,0,0.3)]"
            >
              {/* Neon ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50 dark:ring-white/10" />

              {/* Left: Logo */}
              <BrandLogo />

              {/* Middle: Desktop Links */}
              <div className="hidden md:flex items-center gap-1">
                <NavLinks links={links} pathname={pathname} />
                <ServicesMegaMenu services={services} />
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-2"
                  onClick={() => setOpenCmd(true)}
                >
                  <Search className="h-4 w-4 mr-2" /> Quick Search
                </Button>
                <MagneticCTA href="/get-quote">Get Quote</MagneticCTA>
                <div className="md:hidden">
                  <MobileMenu services={services} links={links} />
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Command Palette */}
      <CommandPalette
        open={openCmd}
        setOpen={setOpenCmd}
        services={services}
        links={links}
      />
    </>
  );
};

export default Navbar;

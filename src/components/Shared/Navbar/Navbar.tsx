"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Menu,
  Sparkles,
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
  ChevronDown,
  Home,
  Sun,
  Moon,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Star,
  CreditCard,
  Globe,
} from "lucide-react";

/**
 * PremiumNavbar — Ultra-modern, out-of-the-box navbar built for Home Service SaaS
 * - Sticky, auto-hide on scroll down, reveal on scroll up
 * - Glassmorphism + neon border + spotlight cursor
 * - Category Megamenu (Services) with icons & quick actions
 * - Command Palette (⌘K / Ctrl K) for global actions
 * - Scroll progress bar + animated active-link underline
 * - Magnetic CTA with light-sweep
 * - Mobile bottom sheet with grouped links
 * - Theme Toggle + Locale Switcher
 *
 * Drop into app/layout.tsx or any page. Ensure shadcn/ui & Tailwind are set up.
 */
export default function PremiumNavbar() {
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

  // Auto-hide on scroll & progress bar
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

  // ⌘K / Ctrl+K opens command palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpenCmd((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Theme toggle (no dependency on next-themes)
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Services" },
    { href: "/cities", label: "Cities" },
    { href: "/about", label: "About" },
  ];

  const services = [
    { icon: Wrench, label: "Plumbing", desc: "Repairs, leaks, fixtures" },
    { icon: Droplets, label: "Geyser Install", desc: "Gas & electric" },
    { icon: Bath, label: "Walk‑in Shower", desc: "Design & build" },
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
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      {/* Spotlight cursor glow */}
      <Spotlight />

      {/* Top announcement strip */}
      <div
        className="sticky top-0 z-[41] 
  bg-gradient-to-b from-cyan-100/70 to-white/0 
  dark:from-gray-900/70 dark:to-transparent 
  backdrop-blur-xl 
  border-b border-white/20 dark:border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between text-xs">
            <Marquee className="hidden md:flex" />
            <div className="flex items-center gap-2 ml-auto md:ml-0">
              <Badge variant="secondary" className="hidden sm:inline-flex">
                24/7 Support
              </Badge>
              <div className="hidden sm:flex items-center gap-1 opacity-80">
                <MapPin className="h-3 w-3" /> Dhaka, BD
              </div>
              <Separator
                orientation="vertical"
                className="mx-2 hidden sm:block h-4"
              />
              <Button
                size="sm"
                variant="ghost"
                className="h-7 px-2"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <AnimatePresence>
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: hidden ? -96 : 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sticky top-9 z-[50]"
          aria-label="Primary"
        >
          <div className="px-4 sm:px-6 lg:px-8 fixed w-full">
            <div
              className="max-w-7xl mx-auto relative mt-2 flex items-center justify-between 
  rounded-2xl border border-white/40 dark:border-white/10 
  bg-gradient-to-br from-cyan-50/70 via-white/60 to-white/20 
  dark:from-gray-900/60 dark:via-black/40 dark:to-transparent 
  backdrop-blur-xl px-3 sm:px-4 py-2 
  shadow-[0_8px_60px_-12px_rgba(0,0,0,0.3)] bg-red-400"
            >
              {/* Neon ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50 dark:ring-white/10" />

              {/* Brand */}
              <Link href="/" className="relative z-10 flex items-center gap-2">
                <motion.div
                  initial={{ rotate: -8, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-lg"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight">
                    Nestico
                  </div>
                  <div className="text-[10px] uppercase opacity-70">
                    Service OS
                  </div>
                </div>
              </Link>

              {/* Center links */}
              <div className="hidden md:flex items-center gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.href}
                    href={l.href}
                    active={pathname === l.href}
                  >
                    {l.label}
                  </NavLink>
                ))}

                {/* Services Mega */}
                <HoverCard openDelay={60} closeDelay={120}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group h-9 px-3 font-medium tracking-tight"
                    >
                      <div className="flex items-center gap-1">
                        Services{" "}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </div>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[720px] p-0 overflow-hidden">
                    <div className="grid grid-cols-12">
                      <div className="col-span-8 p-4">
                        <Tabs defaultValue="popular">
                          <TabsList className="grid grid-cols-3">
                            <TabsTrigger value="popular">Popular</TabsTrigger>
                            <TabsTrigger value="bath">
                              Bath & Kitchen
                            </TabsTrigger>
                            <TabsTrigger value="repair">Repair</TabsTrigger>
                          </TabsList>
                          <TabsContent value="popular" className="mt-3">
                            <div className="grid grid-cols-2 gap-3">
                              {services.slice(0, 6).map((s) => (
                                <ServiceItem
                                  key={s.label}
                                  icon={s.icon}
                                  label={s.label}
                                  desc={s.desc}
                                />
                              ))}
                            </div>
                          </TabsContent>
                          <TabsContent value="bath" className="mt-3">
                            <div className="grid grid-cols-2 gap-3">
                              {services
                                .filter((s) =>
                                  [
                                    "Plumbing",
                                    "Walk‑in Shower",
                                    "Geyser Install",
                                  ].includes(s.label)
                                )
                                .map((s) => (
                                  <ServiceItem
                                    key={s.label}
                                    icon={s.icon}
                                    label={s.label}
                                    desc={s.desc}
                                  />
                                ))}
                            </div>
                          </TabsContent>
                          <TabsContent value="repair" className="mt-3">
                            <div className="grid grid-cols-2 gap-3">
                              {services
                                .filter((s) =>
                                  [
                                    "Appliance Repair",
                                    "Vehicle Repair",
                                    "Door & Windows",
                                  ].includes(s.label)
                                )
                                .map((s) => (
                                  <ServiceItem
                                    key={s.label}
                                    icon={s.icon}
                                    label={s.label}
                                    desc={s.desc}
                                  />
                                ))}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div className="col-span-4 bg-gradient-to-b from-muted/30 to-transparent p-4">
                        <div className="rounded-xl border p-3">
                          <div className="text-sm font-semibold flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4" />
                            Homely Promise
                          </div>
                          <ul className="mt-2 space-y-1 text-xs opacity-80">
                            <li className="flex items-center gap-2">
                              <Star className="h-3 w-3" />
                              Vetted pros
                            </li>
                            <li className="flex items-center gap-2">
                              <CreditCard className="h-3 w-3" />
                              No hidden fees
                            </li>
                            <li className="flex items-center gap-2">
                              <PhoneCall className="h-3 w-3" />
                              Instant support
                            </li>
                          </ul>
                          <Separator className="my-3" />
                          <QuickQuote />
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>

              {/* Right actions */}
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
      <CommandDialog open={openCmd} onOpenChange={setOpenCmd}>
        <Command>
          <CommandInput placeholder="Search services, cities, or help…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Popular Services">
              {services.slice(0, 6).map((s) => (
                <CommandItem
                  key={s.label}
                  onSelect={() =>
                    (window.location.href = `/services/${slugify(s.label)}`)
                  }
                >
                  <s.icon className="mr-2 h-4 w-4" /> {s.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              {links.map((l) => (
                <CommandItem
                  key={l.href}
                  onSelect={() => (window.location.href = l.href)}
                >
                  <Home className="mr-2 h-4 w-4" /> {l.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="relative inline-flex h-9 items-center px-3 text-sm font-medium tracking-tight"
    >
      <span className="opacity-90">{children}</span>
      <motion.span
        layoutId="active-underline"
        className={`absolute inset-x-2 bottom-1 h-[2px] rounded-full ${
          active ? "bg-foreground/70" : "bg-transparent"
        }`}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </Link>
  );
}

function ServiceItem({
  icon: Icon,
  label,
  desc,
}: {
  icon: any;
  label: string;
  desc: string;
}) {
  return (
    <Link
      href={`/services/${slugify(label)}`}
      className="group flex items-start gap-3 rounded-lg border p-3 hover:border-foreground/20"
    >
      <div className="grid h-9 w-9 place-items-center rounded-md bg-muted group-hover:shadow">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm">
        <div className="font-medium leading-none">{label}</div>
        <div className="mt-1 text-xs opacity-70">{desc}</div>
      </div>
    </Link>
  );
}

function QuickQuote() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget as HTMLFormElement);
        const zip = form.get("zip");
        const service = form.get("service");
        window.location.href = `/get-quote?zip=${zip}&service=${service}`;
      }}
      className="space-y-2"
    >
      <Input name="zip" placeholder="Postal code" className="h-9" required />
      <Input
        name="service"
        placeholder="Service (e.g., Plumbing)"
        className="h-9"
        required
      />
      <Button type="submit" className="w-full h-9">
        Check availability
      </Button>
    </form>
  );
}

function MobileMenu({
  services,
  links,
}: {
  services: { icon: any; label: string; desc: string }[];
  links: { href: string; label: string }[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="outline" className="h-9 px-2">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <SheetHeader className="px-4 py-3 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Nestico
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-4rem)] p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {services.slice(0, 8).map((s) => (
                <ServiceItem
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                  desc={s.desc}
                />
              ))}
            </div>
            <Separator />
            <div className="space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg border p-3 text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="rounded-xl border p-3">
              <div className="text-xs opacity-70 mb-2">Need help fast?</div>
              <Button className="w-full">
                <PhoneCall className="h-4 w-4 mr-2" />
                Call Support
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}



function MagneticCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

// language switcher component--------

function LocaleSwitcher() {
  const [open, setOpen] = useState(false);
  const locales = [
    { code: "en", label: "English" },
    { code: "bn", label: "বাংলা" },
  ];
  const [current, setCurrent] = useState(locales[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost" className="h-7 px-2">
          <Globe className="h-4 w-4 mr-1" /> {current.code.toUpperCase()}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-40 p-1">
        {locales.map((l) => (
          <button
            key={l.code}
            onClick={() => {
              setCurrent(l);
              setOpen(false);
            }}
            className={`w-full rounded-md px-2 py-2 text-left text-sm hover:bg-muted ${
              current.code === l.code ? "font-semibold" : ""
            }`}
          >
            {l.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

// cursor grow effect----
function Spotlight() {
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

function Marquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center gap-6 text-[11px] ${className}`}
    >
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

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

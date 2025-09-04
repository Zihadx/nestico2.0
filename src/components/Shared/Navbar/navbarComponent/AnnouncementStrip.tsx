import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Moon, Sun } from "lucide-react";

import LocaleSwitcher from "./LocaleSwitcher";
import TopMarquee from "./TopMarquee";

interface AnnouncementStripProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function AnnouncementStrip({
  theme,
  toggleTheme,
}: AnnouncementStripProps) {
  return (
    <div
      className="sticky top-0 z-[41] 
      bg-gradient-to-b from-cyan-100/70 to-white/0 
      dark:from-gray-900/70 dark:to-transparent 
      backdrop-blur-xl 
      border-b border-white/20 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8">
        <div className="flex h-9 items-center justify-between text-xs">
          <TopMarquee />
          <div className="flex items-center gap-2 ml-auto md:ml-0 flex-nowrap">
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex whitespace-nowrap bg-gradient-to-r from-[#22d3ee] via-[#0c3b4a] to-[#104b5f] text-white text-xs font-semibold px-2 py-1 border border-[#e3e6e7] shadow-sm"
            >
              24/7 Support
            </Badge>

            <div className="hidden sm:flex items-center gap-1 opacity-80 whitespace-nowrap">
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
  );
}

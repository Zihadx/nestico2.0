"use client";

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
import { Home } from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  services: { icon: any; label: string }[];
  links: { href: string; label: string }[];
}

export default function CommandPalette({ open, setOpen, services, links }: CommandPaletteProps) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
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
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
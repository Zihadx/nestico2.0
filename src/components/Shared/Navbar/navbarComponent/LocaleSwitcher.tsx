"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
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
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Sparkles, PhoneCall } from "lucide-react";
import ServiceItem from "./ServiceItem";

interface MobileMenuProps {
  services: { icon: any; label: string; desc: string }[];
  links: { href: string; label: string }[];
}

export default function MobileMenu({ services, links }: MobileMenuProps) {
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
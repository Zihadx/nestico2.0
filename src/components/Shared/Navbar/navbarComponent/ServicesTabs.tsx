import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

import { ShieldCheck, Star, CreditCard, PhoneCall } from "lucide-react";
import ServiceItem from "./ServiceItem";
import QuickQuote from "./QuickQuote";

interface ServicesTabsProps {
  services: { icon: any; label: string; desc: string }[];
}

export default function ServicesTabs({ services }: ServicesTabsProps) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 p-4">
        <Tabs defaultValue="popular">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="bath">Bath & Kitchen</TabsTrigger>
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
                  ["Plumbing", "Walk‑in Shower", "Geyser Install"].includes(s.label)
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
                  ["Appliance Repair", "Vehicle Repair", "Door & Windows"].includes(s.label)
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
  );
}
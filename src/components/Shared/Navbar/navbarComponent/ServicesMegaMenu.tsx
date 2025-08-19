import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ServicesTabs from "./ServicesTabs";


interface ServicesMegaMenuProps {
  services: { icon: any; label: string; desc: string }[];
}

export default function ServicesMegaMenu({ services }: ServicesMegaMenuProps) {
  return (
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
        <ServicesTabs services={services} />
      </HoverCardContent>
    </HoverCard>
  );
}
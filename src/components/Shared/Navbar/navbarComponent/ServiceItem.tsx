import Link from "next/link";

interface ServiceItemProps {
  icon: any;
  label: string;
  desc: string;
}

export default function ServiceItem({ icon: Icon, label, desc }: ServiceItemProps) {
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

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

function NavLink({ href, children, active }: NavLinkProps) {
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

interface NavLinksProps {
  links: { href: string; label: string }[];
  pathname: string;
}

export default function NavLinks({ links, pathname }: NavLinksProps) {
  return (
    <>
      {links.map((l) => (
        <NavLink
          key={l.href}
          href={l.href}
          active={pathname === l.href}
        >
          {l.label}
        </NavLink>
      ))}
    </>
  );
}
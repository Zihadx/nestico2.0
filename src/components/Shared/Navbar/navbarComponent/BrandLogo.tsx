import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BrandLogo() {
  return (
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
  );
}
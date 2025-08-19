import { motion } from "framer-motion";

interface ScrollProgressBarProps {
  progress: number;
}

export default function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}
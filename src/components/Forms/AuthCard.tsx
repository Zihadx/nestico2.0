// components/ui/AuthCard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface AuthCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function AuthCard({ title, icon, children }: AuthCardProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-white">
            {icon} {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}

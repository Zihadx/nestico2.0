// components/ui/SocialButton.tsx
"use client";

import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  iconSrc: string;
  alt: string;
  onClick?: () => void;
}

export default function SocialButton({ iconSrc, alt, onClick }: SocialButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="flex items-center justify-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10"
      onClick={onClick}
    >
      <img src={iconSrc} alt={alt} className="w-5 h-5" />
    </Button>
  );
}

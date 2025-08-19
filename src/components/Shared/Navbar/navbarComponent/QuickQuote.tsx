"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function QuickQuote() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const zip = form.get("zip");
    const service = form.get("service");
    window.location.href = `/get-quote?zip=${zip}&service=${service}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input name="zip" placeholder="Postal code" className="h-9" required />
      <Input
        name="service"
        placeholder="Service (e.g., Plumbing)"
        className="h-9"
        required
      />
      <Button type="submit" className="w-full h-9">
        Check availability
      </Button>
    </form>
  );
}
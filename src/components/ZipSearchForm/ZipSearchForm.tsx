"use client";

import { useState } from "react";
import supabase from "@/utils/supabase/client";

interface ZipSearchFormProps {
  onStatusChange: (status: string | null) => void;
}

const ZipSearchForm = ({ onStatusChange }: ZipSearchFormProps) => {
  const [zipCode, setZipCode] = useState<string>("");

  const handleZipSearch = async (): Promise<void> => {
    if (!zipCode.trim()) return;

    try {
      const { data, error } = await supabase
        .from("neu-home")
        .select("zip_codes")
        .ilike("zip_codes", `%${zipCode.trim()}%`);

      if (error) {
        onStatusChange("Error checking ZIP code");
      } else if (data && data.length > 0) {
        onStatusChange("matched");
      } else {
        onStatusChange("not_matched");
      }
    } catch (err) {
      onStatusChange("Error checking ZIP code");
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
        Let's find out! Enter your ZIP code below
      </h3>
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Enter ZIP code"
          aria-label="ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="border border-gray-300 text-sm px-6 py-4 rounded-md outline-none transition"
        />
        <button
          onClick={handleZipSearch}
          className="bg-[#55bc7e] text-sm text-white px-4 py-4 rounded-md hover:bg-[#4aa76d] transition"
          aria-label="Get Estimate"
        >
          Start Free Estimate
        </button>
      </div>
    </div>
  );
};

export default ZipSearchForm;

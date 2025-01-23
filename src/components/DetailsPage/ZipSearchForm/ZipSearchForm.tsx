"use client";

import { useState, useEffect, useCallback } from "react";
import supabase from "@/utils/supabase/client";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

interface ZipSearchFormProps {
  onStatusChange: (status: string | null) => void;
  onZipDetailsChange: (details: { city: string; state: string } | null) => void;
}

const ZipSearchForm = ({
  onStatusChange,
  onZipDetailsChange,
}: ZipSearchFormProps) => {
  const [zipCode, setZipCode] = useState("");
  const [isMatched, setIsMatched] = useState(false);

  const validateZipCode = useCallback(async () => {
    const trimmedZip = zipCode.trim();

    if (!trimmedZip) {
      onStatusChange(null);
      onZipDetailsChange(null);
      setIsMatched(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("ZIP Codes")
        .select("zip_code, City, state_province")
        .eq("zip_code", trimmedZip);

      if (data && data.length > 0) {
        const { City: city, state_province: state } = data[0];
        setIsMatched(true);
        onStatusChange("matched");
        onZipDetailsChange({ city, state });
      } else {
        setIsMatched(false);
        onStatusChange("not_matched");
        onZipDetailsChange(null);
      }
    } catch (err) {
      console.error("Validation error:", err);
      onStatusChange("Error checking ZIP code");
      onZipDetailsChange(null);
      setIsMatched(false);
    }
  }, [zipCode, onStatusChange, onZipDetailsChange]);

  useEffect(() => {
    validateZipCode();
  }, [zipCode, validateZipCode]);

  return (
    <div className="text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
        Let's find out! Enter your ZIP code below
      </h3>
      <div className="flex justify-center items-center gap-3 relative">
        <input
          type="text"
          placeholder="Enter ZIP code"
          aria-label="ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="border border-gray-300 text-sm px-6 py-4 rounded-md outline-none transition"
        />

        {isMatched && (
          <CircleCheckBig
            className="absolute text-green-600 w-5 h-5 top-1/2 transform -translate-y-1/2"
            aria-label="Matched"
          />
        )}

        <Link
          href={isMatched ? "/projects/walk-in-shower/form" : "#"}
          className={`${
            isMatched ? "bg-[#55bc7e]" : "bg-[#55bc7e] cursor-not-allowed"
          } text-sm text-white px-4 py-4 rounded-md`}
          aria-disabled={!isMatched}
        >
          Start Free Estimate
        </Link>
      </div>
    </div>
  );
};

export default ZipSearchForm;

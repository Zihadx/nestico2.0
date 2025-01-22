"use client";

import { useState, useEffect } from "react";
import supabase from "@/utils/supabase/client";
import { CircleCheckBig } from "lucide-react";

interface ZipSearchFormProps {
  onStatusChange: (status: string | null) => void;
}

const ZipSearchForm = ({ onStatusChange }: ZipSearchFormProps) => {
  const [zipCode, setZipCode] = useState<string>("");
  const [isMatched, setIsMatched] = useState<boolean>(false);

  useEffect(() => {
    const validateZipCode = async () => {
      if (!zipCode.trim()) {
        onStatusChange(null);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("neu-home")
          .select("zip_codes")
          .ilike("zip_codes", `%${zipCode.trim()}%`);

        if (error) {
          onStatusChange("Error checking ZIP code");
          setIsMatched(false);
        } else if (data && data.length > 0) {
          onStatusChange("matched");
          setIsMatched(true);
        } else {
          onStatusChange("not_matched");
          setIsMatched(false);
        }
      } catch (err) {
        onStatusChange("Error checking ZIP code");
        setIsMatched(false);
      }
    };

    validateZipCode();
  }, [zipCode, onStatusChange]); 

  return (
    <div className="text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 ">
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

        <button
          onClick={() => {}}
          disabled
          className="bg-[#55bc7e] text-sm text-white px-4 py-4 rounded-md cursor-not-allowed"
          aria-label="Get Estimate"
        >
          Start Free Estimate
        </button>
      </div>
    </div>
  );
};

export default ZipSearchForm;

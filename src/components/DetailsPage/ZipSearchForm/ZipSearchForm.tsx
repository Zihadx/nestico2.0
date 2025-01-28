"use client";

import { useState, useEffect } from "react";
import supabase from "@/utils/supabase/client";
import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";

interface ZipSearchFormProps {
  onStatusChange: (status: string | null) => void;
  onZipLocations: (
    ZipLocations: { city: string; state: string } | null
  ) => void;
  projectId: string;
}

const ZipSearchForm = ({
  onStatusChange,
  onZipLocations,
  projectId,
}: ZipSearchFormProps) => {
  const [zipCode, setZipCode] = useState("");
  const [isMatched, setIsMatched] = useState(false);

  const router = useRouter();

  const validateZipCode = async () => {
    if (!zipCode) {
      onStatusChange(null);
      onZipLocations(null);
      setIsMatched(false);
      return;
    }

    try {
      const { data } = await supabase
        .from("ZIP Codes")
        .select("zip_code, City, state_province")
        .eq("zip_code", zipCode);

      if (data?.length) {
        const { City: city, state_province: state } = data[0];
        onZipLocations({ city, state });
        onStatusChange("matched");
        setIsMatched(true);
      } else {
        setIsMatched(false);
        onStatusChange("not_matched");
        onZipLocations(null);
      }
    } catch (error) {
      console.error("Validation error:", error);
      onStatusChange("Error checking ZIP code");
      onZipLocations(null);
      setIsMatched(false);
    }
  };

  useEffect(() => {
    validateZipCode();
  }, [zipCode]);

  const handleStartEstimate = () => {
    if (isMatched) {
      router.push(`/${projectId}/${zipCode}`);
    }
  };

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
          className="border border-gray-300 text-sm px-4 lg:px-6 py-4 rounded-md outline-none transition"
        />

        {isMatched && (
          <CircleCheckBig
            className="absolute text-green-600 w-5 h-5 top-1/2 transform -translate-y-1/2"
            aria-label="Matched"
          />
        )}

        <button
          onClick={handleStartEstimate}
          className={`${
            isMatched ? "bg-[#55bc7e]" : "bg-[#55bc7e] cursor-not-allowed"
          } text-sm text-white px-2 lg:px-4 py-4 rounded-md`}
          aria-disabled={!isMatched}
        >
          Start Free Estimate
        </button>
      </div>
    </div>
  );
};

export default ZipSearchForm;

"use client";
import { useState, useEffect } from "react";
import supabase from "@/utils/supabase/client";
import { CircleCheckBig, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SubmitForm from "@/components/SubmitForm/SubmitForm";


interface Project {
  id: string;
  title: string;
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState<string | null>(null);

  // access project title-----------------
  useEffect(() => {
    const fetchProjectTitle = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`,
          {
            cache: "no-cache",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Project[] = await response.json();
        const project = data.find((item) => item.id === projectId);
        setProjectTitle(project ? project.title : "Unknown Project");
      } catch (error) {
        setProjectTitle("Unknown Project");
      }
    };

    fetchProjectTitle();
  }, [projectId]);

  // Validate ZIP Code using Supabase----------------
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
      onStatusChange("Error checking ZIP code");
      onZipLocations(null);
      setIsMatched(false);
    }
  };

  useEffect(() => {
    validateZipCode();
  }, [zipCode]);

  // Open modal when ZIP code is matched----------------
  const handleStartEstimate = () => {
    if (isMatched) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
        Let's find out! Enter your ZIP code below
      </h3>
      <div className="flex justify-center items-center gap-3 relative px-2">
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
          } text-sm text-white px-2 lg:px-4 py-4 rounded-md min-w-[150px]`}
          aria-disabled={!isMatched}
        >
          Start Free Estimate
        </button>
      </div>

      {/* Modal for Form content Submit-----------*/}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-6">
          <button
            className="absolute top-2 right-2 p-1 text-2xl z-20 rounded-full bg-opacity-70 bg-gray-600 text-white"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close"
          >
            <X />
          </button>

          {/* submit form content imported-------- */}
          <SubmitForm projectTitle={projectTitle} zipCode={zipCode} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ZipSearchForm;

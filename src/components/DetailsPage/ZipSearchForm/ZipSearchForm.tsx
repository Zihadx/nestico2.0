"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SubmitForm from "@/components/SubmitForm/SubmitForm";

interface Project {
  id: string;
  title: string;
}

interface ZipSearchFormProps {
  onStatusChange: (status: string | null) => void;
  onZipLocations: (ZipLocations: { city: string; state: string } | null) => void;
  projectId: string;
}

const ZipSearchForm = ({
  onStatusChange,
  onZipLocations,
  projectId,
}: ZipSearchFormProps) => {
  const [zipCode, setZipCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState<string | null>(null);

  // Fetch project title from local JSON
  useEffect(() => {
    const fetchProjectTitle = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/fakeDb.json`,
          { cache: "no-cache" }
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: Project[] = await response.json();
        const project = data.find((item) => item.id === projectId);
        setProjectTitle(project ? project.title : "Unknown Project");
      } catch {
        setProjectTitle("Unknown Project");
      }
    };

    fetchProjectTitle();
  }, [projectId]);

  // Modal open handler
  const handleStartEstimate = () => {
    setIsModalOpen(true);
    onStatusChange(null);
    onZipLocations(null);
  };

  return (
    <div className="text-center">
      <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
        Let's get started! Enter your ZIP code below
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
        <button
          onClick={handleStartEstimate}
          className="bg-[#55bc7e] text-sm text-white px-2 lg:px-4 py-4 rounded-md min-w-[150px]"
        >
          Start Free Estimate
        </button>
      </div>

      {/* Modal for Form Submission */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-6">
          <button
            className="absolute top-2 right-2 p-1 text-2xl z-20 rounded-full bg-opacity-70 bg-gray-600 text-white"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close"
          >
            <X />
          </button>

          {/* Form Component */}
          <SubmitForm projectTitle={projectTitle} zipCode={zipCode} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ZipSearchForm;

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  "Modern style and comfort",
  "Easy to clean",
  "Fair price",
  "Multiple safety options",
  "Shower seated or standing",
  "Better accessibility",
];

const WalkInShower = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[1180px] mx-auto my-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Walk-in Shower</h1>
      <p className="text-lg text-gray-600 mb-6 text-center font-semibold">
        You will be surprised how affordable a Walk-in Shower can be:
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        <Card className="p-6 w-full md:w-1/2 h-80">
          <CardContent>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 font-bold text-lg">
                  <Check className="text-green-600 w-5 h-5" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="w-full md:w-1/2 h-80">
          <Image
            height={320}
            width={320} 
            src="/images/walk-in-shower.webp"
            alt="Walk-in Shower"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WalkInShower;

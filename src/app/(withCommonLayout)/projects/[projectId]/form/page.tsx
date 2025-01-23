"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Form = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [yesNo, setYesNo] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    setProgress(((currentStep + 1) / 4) * 100); // Adjust for 4 steps
  };

  const handleSubmit = () => {
    console.log("Submitting data:", { name, email, phone, yesNo });
    alert("Form submitted successfully!");
  };

  const isNextDisabled =
    (currentStep === 0 && !name.trim()) ||
    (currentStep === 1 && !email.trim()) ||
    (currentStep === 2 && !phone.trim()) ||
    (currentStep === 3 && !yesNo.trim());

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg overflow-hidden shadow-md relative">
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[5px] bg-black transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />

        {/* Form Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          {currentStep === 0
            ? "What is your name?"
            : currentStep === 1
            ? "What is your email?"
            : currentStep === 2
            ? "What is your phone number?"
            : currentStep === 3
            ? "Do you agree with our terms?"
            : "Review your details"}
        </h2>

        {/* Form Steps */}
        {currentStep < 4 ? (
          <div className="text-center">
            {currentStep === 0 && (
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4"
              />
            )}
            {currentStep === 1 && (
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
            )}
            {currentStep === 2 && (
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mb-4"
              />
            )}
           {currentStep === 3 && (
  <RadioGroup
    className="flex flex-col items-center space-y-2"
    value={yesNo}
    onValueChange={(value) => setYesNo(value)} // Correct handler
  >
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="Yes" id="yes" />
      <label htmlFor="yes" className="text-sm font-medium">
        Yes
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="No" id="no" />
      <label htmlFor="no" className="text-sm font-medium">
        No
      </label>
    </div>
  </RadioGroup>
)}

            <Button
              onClick={handleNext}
              disabled={isNextDisabled}
              variant={isNextDisabled ? "secondary" : "default"}
              className="w-full"
            >
              {currentStep === 3 ? "Review" : "Next"}
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div className="mb-2">
                <strong>Name:</strong> {name}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {email}
              </div>
              <div className="mb-2">
                <strong>Phone:</strong> {phone}
              </div>
              <div className="mb-2">
                <strong>Agreed:</strong> {yesNo}
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full"
              variant="default"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

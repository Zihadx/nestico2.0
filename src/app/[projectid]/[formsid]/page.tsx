"use client";

import { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/utils/supabase/client";

const Form = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const { toast } = useToast();

  // formic validations --------------------------
  const validationSchemas = [
    Yup.object({
      homeowner: Yup.string().required("You must select an option"),
    }),
    Yup.object({
      mobileHome: Yup.string().required("You must select an option"),
    }),
    Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    Yup.object({
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Phone number is invalid")
        .required("Phone number is required"),
    }),
  ];

  // set initial values --------------------
  const initialValues = {
    homeowner: "",
    mobileHome: "",
    name: "",
    email: "",
    phone: "",
  };

  // handle to go next content -----------------------
  const handleNext = (values: any) => {
    if (currentStep === 3) {
      handleSubmit(values);
    } else {
      setCurrentStep((prev) => prev + 1);
      setProgress(((currentStep + 1) / 3) * 100);
    }
  };

  // data post to database ---------------------------
  const handleSubmit = async (values: any) => {
    try {
      const { data, error } = await supabase.from("Service_Requests").insert([
        {
          intOwner: values.homeowner,
          intMobileHome: values.mobileHome,
          fullName: values.name,
          Email: values.email,
          phoneNumber: values.phone,
        },
      ]);

      if (error) throw error;

      // toast-------------------------
      toast({
        title: "Success!",
        description: "Your request has been submitted successfully.",
      });

      console.log("Posted data:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const isLastStep = currentStep === validationSchemas.length - 1;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[currentStep]}
        onSubmit={(values) => {
          if (isLastStep) {
            handleSubmit(values);
          } else {
            handleNext(values);
          }
        }}
      >
        {({ values, isValid, setFieldValue }) => (
          <FormikForm className="w-full lg:w-1/2 p-6 bg-green-300 rounded-lg shadow-md relative overflow-hidden">
            {/* Progress Bar --------------------*/}
            <div
              className="absolute bottom-0 left-0 h-[5px] bg-gray-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

            {/* Form Heading----------------------- */}
            <h2 className="text-2xl font-semibold text-center mb-6">
              {currentStep === 0
                ? "Are you the homeowner or authorized to make property changes?"
                : currentStep === 1
                ? "Is it a mobile, modular or manufactured home?"
                : currentStep === 2
                ? "Who should I prepare this estimate for?"
                : "What is your phone number?"}
            </h2>

            {/* Form Steps-------------------------- */}
            <div className="text-center">
              {currentStep === 0 && (
                <>
                  <RadioGroup
                    className="flex flex-col items-center space-y-2"
                    value={values.homeowner}
                    onValueChange={(value) => setFieldValue("homeowner", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Yes"
                        id="yes"
                        className="h-6 w-6 border-2 border-green-500 rounded-full focus:ring-2 focus:ring-green-400"
                      />
                      <label htmlFor="yes" className="text-sm font-medium">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="No"
                        id="no"
                        className="h-6 w-6 border-2 border-green-500 rounded-full focus:ring-2 focus:ring-green-400"
                      />
                      <label htmlFor="no" className="text-sm font-medium">
                        No
                      </label>
                    </div>
                  </RadioGroup>
                  <ErrorMessage
                    name="homeowner"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </>
              )}
              {currentStep === 1 && (
                <>
                  <RadioGroup
                    className="flex flex-col items-center space-y-2"
                    value={values.mobileHome}
                    onValueChange={(value) =>
                      setFieldValue("mobileHome", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Yes"
                        id="mobileYes"
                        className="h-6 w-6 border-2 border-green-500 rounded-full focus:ring-2 focus:ring-green-400"
                      />
                      <label
                        htmlFor="mobileYes"
                        className="text-sm font-medium"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="No"
                        id="mobileNo"
                        className="h-6 w-6 border-2 border-green-500 rounded-full focus:ring-2 focus:ring-green-400"
                      />
                      <label htmlFor="mobileNo" className="text-sm font-medium">
                        No
                      </label>
                    </div>
                  </RadioGroup>
                  <ErrorMessage
                    name="mobileHome"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </>
              )}
              {currentStep === 2 && (
                <div className="w-full lg:w-1/2 mx-auto">
                  <Field
                    name="name"
                    as={Input}
                    placeholder="Full Name"
                    className="mb-4"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                  <Field
                    name="email"
                    type="email"
                    as={Input}
                    placeholder="Email Address"
                    className="mb-4"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <div className="flex items-center justify-center gap-3 mb-2 w-full lg:w-1/2 mx-auto">
                    <Field
                      name="phone"
                      type="tel"
                      as={Input}
                      placeholder="Phone Number"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-green-500 text-white hover:bg-green-600 disabled:bg-green-300"
                      disabled={!isValid}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-4"
                  />
                </div>
              )}
              {!isLastStep && (
                <Button
                  type="submit"
                  className="mt-4 bg-green-500 text-white hover:bg-green-600 disabled:bg-green-300"
                  disabled={!isValid}
                >
                  Next
                </Button>
              )}
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;

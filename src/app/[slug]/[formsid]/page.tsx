"use client";
import { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/utils/supabase/client";
import { Lock, LockKeyhole } from "lucide-react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const { toast } = useToast();


  // validations for input filed-----------------

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

  const initialValues = {
    homeowner: "",
    mobileHome: "",
    name: "",
    email: "",
    phone: "",
  };

  // go next step ------------------------
  const handleNext = (values: any) => {
    if (currentStep === 3) {
      handleSubmit(values);
    } else {
      setCurrentStep((prev) => prev + 1);
      setProgress(((currentStep + 1) / 3) * 100);
    }
  };

  // post data to supabase database ---------------------
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

      if (error) {
        console.error("Error submitting form:", error.message);
        toast({
          title: "Submission Error",
          description:
            "There was an error submitting your form. Please try again.",
        });
      } else {
        console.log("Form submitted successfully:", data);
        toast({
          title: "Form Submitted",
          description: "Your form has been successfully submitted.",
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Unexpected Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  const isLastStep = currentStep === validationSchemas.length - 1;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 top-0  fixed w-full z-[99]">
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
          <FormikForm className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md relative overflow-hidden">
            {/* Progress Bar------------------ */}
            <div
              className="absolute bottom-0 left-0 h-[5px] bg-gray-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

            {/* Form Heading-------------------------- */}
            <h2 className="text-2xl font-semibold text-center">
              {currentStep === 0
                ? "Are you the homeowner or authorized to make property changes?"
                : currentStep === 1
                ? "Is it a mobile, modular or manufactured home?"
                : currentStep === 2
                ? "Who should I prepare this estimate for?"
                : "What is your phone number?"}
            </h2>
            <p className=" mb-6 text-center text-sm text-gray-500 font-semibold">
              {currentStep === 0
                ? ""
                : currentStep === 1
                ? ""
                : currentStep === 2
                ? ""
                : "A valid phone number is required to issue a formal estimate."}
            </p>

            {/*homeowner or authorized Form Steps----------------------- */}
            <div className="text-center">
              {currentStep === 0 && (
                <>
                  <RadioGroup
                    className="flex flex-col items-center space-y-4"
                    value={values.homeowner}
                    onValueChange={(value) => setFieldValue("homeowner", value)}
                  >
                    <div
                      className={`flex items-center justify-between w-full max-w-sm border rounded-lg p-4 cursor-pointer ${
                        values.homeowner === "Yes"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFieldValue("homeowner", "Yes")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`h-6 w-6 rounded-full border-2 flex justify-center items-center ${
                            values.homeowner === "Yes"
                              ? "border-green-500 bg-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {values.homeowner === "Yes" && (
                            <div className="h-3 w-3 bg-white rounded-full" />
                          )}
                        </div>
                        <label htmlFor="yes" className="text-base font-medium">
                          Yes
                        </label>
                      </div>
                    </div>

                    <div
                      className={`flex items-center justify-between w-full max-w-sm border rounded-lg p-4 cursor-pointer ${
                        values.homeowner === "No"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFieldValue("homeowner", "No")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`h-6 w-6 rounded-full border-2 flex justify-center items-center ${
                            values.homeowner === "No"
                              ? "border-green-500 bg-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {values.homeowner === "No" && (
                            <div className="h-3 w-3 bg-white rounded-full" />
                          )}
                        </div>
                        <label htmlFor="no" className="text-base font-medium">
                          No
                        </label>
                      </div>
                    </div>

                    {values.homeowner === "No" && (
                      <div className="mt-4 text-sm text-gray-700">
                        Our installers require the homeowner or someone
                        authorized to make property changes be present during
                        the estimate. Would you like to continue?
                      </div>
                    )}
                  </RadioGroup>

                  <ErrorMessage
                    name="homeowner"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </>
              )}

              {/* mobile, modular or manu-------------------*/}
              {currentStep === 1 && (
                <>
                  <RadioGroup
                    className="flex flex-col items-center space-y-4"
                    value={values.mobileHome}
                    onValueChange={(value) =>
                      setFieldValue("mobileHome", value)
                    }
                  >
                    <div
                      className={`flex items-center justify-between w-full max-w-sm border rounded-lg p-4 cursor-pointer ${
                        values.mobileHome === "Yes"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFieldValue("mobileHome", "Yes")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`h-6 w-6 rounded-full border-2 flex justify-center items-center ${
                            values.mobileHome === "Yes"
                              ? "border-green-500 bg-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {values.mobileHome === "Yes" && (
                            <div className="h-3 w-3 bg-white rounded-full" />
                          )}
                        </div>
                        <label
                          htmlFor="mobileYes"
                          className="text-base font-medium"
                        >
                          Yes
                        </label>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-between w-full max-w-sm border rounded-lg p-4 cursor-pointer ${
                        values.mobileHome === "No"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFieldValue("mobileHome", "No")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`h-6 w-6 rounded-full border-2 flex justify-center items-center ${
                            values.mobileHome === "No"
                              ? "border-green-500 bg-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {values.mobileHome === "No" && (
                            <div className="h-3 w-3 bg-white rounded-full" />
                          )}
                        </div>
                        <label
                          htmlFor="mobileNo"
                          className="text-base font-medium"
                        >
                          No
                        </label>
                      </div>
                    </div>

                    {values.mobileHome === "Yes" && (
                      <div className="mt-4 text-sm text-gray-700">
                        Unfortunately, our installers do not work with mobile,
                        modular, or manufactured homes. Would you still like to
                        continue?
                      </div>
                    )}
                  </RadioGroup>

                  <ErrorMessage
                    name="mobileHome"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </>
              )}

              {/* name and email-------------------- */}
              {currentStep === 2 && (
                <div className="w-full lg:w-1/3 mx-auto">
                  <Field
                    name="name"
                    as={Input}
                    placeholder="Full Name"
                    className="mb-4 p-6 rounded-md placeholder:font-semibold"
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
                    className="mb-4 p-6 rounded-md placeholder:font-semibold"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mb-2"
                  />
                </div>
              )}

              {/* phone number and submit---------------- */}
              {currentStep === 3 && (
                <div>
                  
                  <div className="flex items-center justify-center gap-3 mb-2 w-full lg:w-1/2 mx-auto">
                    <div className="relative w-full">
                      <Field
                        name="phone"
                        type="tel"
                        as={Input}
                        placeholder="Phone Number"
                        className="p-6 pl-12 w-full rounded-md placeholder:font-semibold"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {/* <Lock className="text-[#fa8c16] h-5 w-5"/> */}
                        <LockKeyhole
                          size={20}
                          strokeWidth={3}
                          className="text-[#fa8c16]"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-green-500 p-6 text-white hover:bg-green-600 disabled:bg-green-300"
                      disabled={!isValid}
                    >
                      {isLastStep ? "Submit my request" : "Next"}
                    </Button>
                  </div>
                  <p className="my-6 text-center text-[10px] text-gray-500 font-semibold">
                    Neu Media Group, the operator of this website, and/or our
                    local partner will contact you via a call, text, or email
                    using manual or automated technology at the telephone number
                    provided, including your wireless number, to arrange a
                    convenient time to do an in-home estimate for you. You
                    understand that your consent is not required to purchase
                    products or services, and you understand that you may revoke
                    your consent at any time.
                  </p>
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

export default MultiStepForm;

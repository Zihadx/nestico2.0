"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Forms/FormInput";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const initialValues = { email: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Send reset link to:", values.email);
    router.push("/email-verification");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="w-full max-w-md bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-slate-700 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-slate-800 dark:text-white">
              <Mail className="w-6 h-6 text-cyan-500" /> Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col gap-4">
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border border-slate-300 text-slate-800 placeholder-slate-400 
                             dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:placeholder-slate-400 rounded-lg"
                />

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium py-2 rounded-xl shadow-lg"
                >
                  Send Reset Link
                </Button>

                <p className="text-slate-600 dark:text-slate-400 text-center text-sm mt-3">
                  Remembered?{" "}
                  <a href="/login" className="text-cyan-500 hover:underline dark:text-cyan-400">
                    Back to Login
                  </a>
                </p>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

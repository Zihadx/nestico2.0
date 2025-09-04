"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, KeyRound } from "lucide-react";
import FormInput from "@/components/Forms/FormInput";

export default function LoginPage() {
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Login Data:", values);
    // API/auth logic here
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* Left side brand/illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex flex-col items-center justify-center p-10 relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mb-6"
        >
          <Home className="w-20 h-20 text-cyan-500 drop-shadow-lg" />
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-600 bg-clip-text text-transparent">
          Nestico Home Services
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-md text-center">
          One login to manage all your home service needs. Clean, repair, and
          secure your home with trust.
        </p>
      </motion.div>

      {/* Right side form */}
      <div className="flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="w-full bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-slate-700 shadow-2xl rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-slate-800 dark:text-white">
                <KeyRound className="w-6 h-6 text-cyan-500" /> Welcome Back
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
                    placeholder="Email Address"
                    className="bg-white border border-slate-300 text-slate-800 placeholder-slate-400 
                               dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:placeholder-slate-400 rounded-lg"
                  />
                  <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-white border border-slate-300 text-slate-800 placeholder-slate-400 
                               dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:placeholder-slate-400 rounded-lg"
                  />

                  <div className="flex justify-end">
                    <a
                      href="/forgot-password"
                      className="text-sm text-cyan-600 hover:underline dark:text-cyan-400"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 
                               text-white font-medium py-2 rounded-xl shadow-lg"
                  >
                    Login
                  </Button>
                </Form>
              </Formik>

              {/* Social login / Signup links */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  or continue with
                </span>
                <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200
                             dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 w-full"
                >
                  <img
                    src="/images/social-logo/google.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200
                             dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 w-full"
                >
                  <img
                    src="/images/social-logo/facebook.png"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200
                             dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 w-full"
                >
                  <img
                    src="/images/social-logo/phone.png"
                    alt="Phone"
                    className="w-5 h-5"
                  />
                </Button>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-center text-sm mt-5">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  className="text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  Sign up
                </a>
              </p>
              <p className="text-slate-500 dark:text-slate-500 text-xs text-center mt-2">
                Secured by Nestico 🔒
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

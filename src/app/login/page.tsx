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
    // Here call your API/auth logic
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-950 to-slate-900 text-white mt-20">
      {/* Left side brand/illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex flex-col items-center justify-center p-10 relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-7xl mb-6"
        >
          <Home className="w-20 h-20 text-cyan-400 drop-shadow-lg" />
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Nestico Home Services
        </h1>
        <p className="text-slate-300 mt-4 max-w-md text-center">
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
        >
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-white">
                <KeyRound className="w-6 h-6 text-cyan-400" /> Welcome Back
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
                  />
                  <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <div className="flex justify-end">
                    <a
                      href="/forgot-password"
                      className="text-sm text-cyan-400 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg"
                  >
                    Login
                  </Button>
                </Form>
              </Formik>

              {/* Social login / Signup links */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-slate-400 text-sm">or continue with</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <img
                    src="images/social-logo/google.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <img
                    src="images/social-logo/facebook.png"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <img
                    src="/images/social-logo/phone.png"
                    alt="Phone"
                    className="w-5 h-5"
                  />
                </Button>
              </div>

              <p className="text-slate-400 text-center text-sm mt-3">
                Don’t have an account?{" "}
                <a href="/signup" className="text-cyan-400 hover:underline">
                  Sign up
                </a>
              </p>
              <p className="text-slate-500 text-xs text-center mt-2">
                Secured by Nestico 🔒
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

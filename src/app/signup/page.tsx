"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, UserPlus } from "lucide-react";
import FormInput from "@/components/Forms/FormInput";

export default function SignupPage() {
  const initialValues = { name: "", email: "", password: "", confirmPassword: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Signup Data:", values);
    // call your API for signup here
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-950 to-slate-900 text-white mt-20">
      {/* Left branding */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:flex flex-col items-center justify-center p-10 relative">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="text-7xl mb-6">
          <Home className="w-20 h-20 text-cyan-400 drop-shadow-lg" />
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Nestico Home Services
        </h1>
        <p className="text-slate-300 mt-4 max-w-md text-center">
          Join thousands of homeowners simplifying their lives with Nestico. Book, manage, and trust home services — all in one place.
        </p>
      </motion.div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-white">
                <UserPlus className="w-6 h-6 text-cyan-400" /> Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className="flex flex-col gap-4">
                 
                  <FormInput name="email" type="email" placeholder="Email Address" />
                  <FormInput name="password" type="password" placeholder="Password" />
                  <FormInput name="confirmPassword" type="password" placeholder="Confirm Password" />

                  <Button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg"
                  >
                    Sign Up
                  </Button>

                  <p className="text-slate-400 text-center text-sm mt-3">
                    Already have an account?{" "}
                    <a href="/login" className="text-cyan-400 hover:underline">
                      Log in
                    </a>
                  </p>
                  <p className="text-slate-500 text-xs text-center mt-2">Secured by Nestico 🔒</p>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

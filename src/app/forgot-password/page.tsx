"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Send reset link to:", values.email);
      // after sending email → go to verification page
      router.push("/email-verification");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white mt-20">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <Mail className="w-6 h-6 text-cyan-400" /> Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-400"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-400 text-sm">{formik.errors.email}</p>
              )}


              <Button type="submit" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl shadow-lg">
                Send Reset Link
              </Button>


              <p className="text-slate-400 text-center text-sm mt-3">
                Remembered?{" "}
                <a href="/login" className="text-cyan-400 hover:underline">
                  Back to Login
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

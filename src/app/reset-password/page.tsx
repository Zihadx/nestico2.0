"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function ResetPasswordPage() {
  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      password: Yup.string().min(6, "At least 6 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Password reset success:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <Lock className="w-6 h-6 text-cyan-400" /> Reset Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
              <Input
                type="password"
                placeholder="New Password"
                {...formik.getFieldProps("password")}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-400"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-400 text-sm">{formik.errors.password}</p>
              )}
              <Input
                type="password"
                placeholder="Confirm Password"
                {...formik.getFieldProps("confirmPassword")}
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-400"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-400 text-sm">{formik.errors.confirmPassword}</p>
              )}
              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg"
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

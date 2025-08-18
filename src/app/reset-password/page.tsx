"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Forms/FormInput";

export default function ResetPasswordPage() {
  const router = useRouter();

  const initialValues = { password: "", confirmPassword: "" };
  const validationSchema = Yup.object({
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("New password set:", values.password);
    router.push("/login"); // redirect to login after reset
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white mt-20">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <Lock className="w-6 h-6 text-cyan-400" /> Reset Password
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
                  name="password"
                  type="password"
                  placeholder="New Password"
                />
                <FormInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm New Password"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl shadow-lg"
                >
                  Reset Password
                </Button>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

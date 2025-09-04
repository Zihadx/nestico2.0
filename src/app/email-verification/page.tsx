"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmailVerificationPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState(30);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => (prev <= 1 ? 0 : prev - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length === 6) {
      console.log("OTP Submitted:", code);
      router.push("/reset-password");
    } else {
      alert("Please enter the full 6-digit code");
    }
  };

  const handleResend = () => {
    if (resendTimer === 0) setResendTimer(30);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-slate-700 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-slate-800 dark:text-white">
              <ShieldCheck className="w-6 h-6 text-cyan-500" /> Verify Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400 text-sm text-center mb-6">
              Enter the 6-digit code we sent to your email
            </p>

            <div className="flex gap-3 justify-center mb-6">
              {otp.map((digit, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  ref={(el: HTMLInputElement | null) => {
                    inputsRef.current[i] = el;
                  }}
                  className="w-14 h-14 text-center text-lg bg-white border border-slate-300 text-slate-800 rounded-xl
               dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 focus:ring-2 focus:ring-cyan-500 transition"
                />
              ))}
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-800 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium py-2 rounded-xl shadow-lg"
            >
              Verify
            </Button>

            <p className="text-slate-600 dark:text-slate-400 text-center text-sm mt-4">
              Didn’t receive code?{" "}
              <button
                onClick={handleResend}
                disabled={resendTimer > 0}
                className={`ml-1 ${
                  resendTimer === 0
                    ? "text-cyan-500 hover:underline"
                    : "text-slate-400 dark:text-slate-600 cursor-not-allowed"
                }`}
              >
                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
              </button>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

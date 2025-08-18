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
  const [resendTimer, setResendTimer] = useState(30); // 30s cooldown
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  // Countdown logic (auto start + restart when timer reset)
  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
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
    if (resendTimer === 0) {
      console.log("Resend OTP triggered");
      setResendTimer(30); // triggers useEffect countdown
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <ShieldCheck className="w-6 h-6 text-cyan-400" /> Verify Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400 text-sm text-center mb-6">
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
                  ref={(el) => {
                    inputsRef.current[i] = el;
                  }}
                  className="w-12 h-12 text-center text-lg bg-white/5 border-white/20 text-white rounded-xl focus:ring-2 focus:ring-cyan-400"
                />
              ))}
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg"
            >
              Verify
            </Button>
            <p className="text-slate-400 text-center text-sm mt-4">
              Didn’t receive code?{" "}
              <button
                onClick={handleResend}
                disabled={resendTimer > 0}
                className={`ml-1 ${
                  resendTimer === 0
                    ? "text-cyan-400 hover:underline"
                    : "text-slate-600"
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";

export default function emailVerificationPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-white">
              <ShieldCheck className="w-6 h-6 text-cyan-400" /> Verify OTP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 justify-center mb-6">
              {otp.map((digit, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  className="w-12 h-12 text-center text-lg bg-white/5 border-white/20 text-white rounded-xl"
                />
              ))}
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg"
            >
              Verify
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

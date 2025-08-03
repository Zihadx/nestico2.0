"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSubmitted(false);

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-sky-100 via-white to-indigo-100"
    >
      <Card className="w-full max-w-3xl shadow-2xl border-none rounded-3xl backdrop-blur-md bg-white/60">
        <CardContent className="p-10 sm:p-12 md:p-14 space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Let’s Connect
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              We’ll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Sajjad Khan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-white/70 backdrop-blur-md"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="sajjad@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-white/70 backdrop-blur-md"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-xl bg-white/70 backdrop-blur-md"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 text-white bg-gradient-to-r from-[#22d3ee] to-[#104b5f] hover:from-[#104b5f] hover:to-[#22d3ee]",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail  className="mr-2" size={18} /> Send Message
                  </>
                )}
              </Button>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    className="text-green-700 text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    ✅ Message sent successfully.
                  </motion.p>
                )}
              </AnimatePresence>
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;

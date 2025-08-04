"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  User,
  MessageSquareText,
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
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
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-sky-100 via-white to-indigo-100"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/60 rounded-3xl shadow-xl backdrop-blur-md p-8 md:p-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900"> Let’s Connect</h2>
            <p className="text-gray-600 mt-2">We’d be happy to assist you!</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm">
              <Phone className="text-green-500" />
              <span>+0123456789</span>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm bg-gradient-to-r from-[#104b5f] to-[#22d3ee] text-white">
              <Mail className="text-white" />
              <span>example@email.com</span>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm">
              <MapPin className="text-blue-500" />
              <span>123 Example Street, Rajshahi, Bangladesh</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#104b5f] to-[#22d3ee] text-white hover:opacity-80"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#104b5f] to-[#22d3ee] text-white hover:opacity-80"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#104b5f] to-[#22d3ee] text-white hover:opacity-80"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Sazzad"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="rounded-md bg-white/70 backdrop-blur-md my-2 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Khan"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="rounded-md bg-white/70 backdrop-blur-md my-2 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="sazzadkhan@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md bg-white/70 backdrop-blur-md my-2 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
              />
            </div>

            <div>
              <Label htmlFor="mobile" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Mobile
              </Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+8801XXXXXXXXX"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="rounded-md bg-white/70 backdrop-blur-md my-2 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-md bg-white/70 backdrop-blur-md my-2 focus-visible:border-cyan-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 focus:outline-none"
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
                  <Mail className="mr-2" size={18} /> Send Message
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
      </div>
    </motion.section>
  );
};

export default ContactForm;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of services do you offer?",
    answer:
      "We offer a wide range of home services including electrical work, plumbing, car repair, cleaning, and interior design.",
  },
  {
    question: "Are your technicians verified and trained?",
    answer:
      "Yes, every team member is background-checked, professionally trained, and committed to providing respectful service.",
  },
  {
    question: "Do you offer emergency 24/7 support?",
    answer:
      "Absolutely. Our emergency response team is on call 24/7 to handle urgent repairs or issues.",
  },
  {
    question: "How can I book a service?",
    answer:
      "You can contact us through the contact form, WhatsApp button, or call our hotline directly.",
  },
  {
    question: "Is there a satisfaction guarantee?",
    answer:
      "Yes. We won’t close a job until you're fully satisfied — no questions asked.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Lottie */}
        <div className="flex justify-center">
          {/* <Lottie animationData={faqAnimation} loop className="w-full max-w-md" /> */}
          <h1>Lottie</h1>
        </div>

        {/* Right Side - FAQ */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-zinc-800 dark:text-white text-center md:text-left">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={index}
                  className="border border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="text-blue-500" />
                    ) : (
                      <ChevronDown className="text-blue-500" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-4 pb-4 text-sm text-muted-foreground"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

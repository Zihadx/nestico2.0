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
    question: "🛠️ What types of services do you offer?",
    answer:
      "We offer a wide range of home services including electrical work, plumbing, car repair, cleaning, and interior design.",
  },
  {
    question: "✅ Are your technicians verified and trained?",
    answer:
      "Yes, every team member is background-checked, professionally trained, and committed to providing respectful service.",
  },
  {
    question: "🚨 Do you offer emergency 24/7 support?",
    answer:
      "Absolutely. Our emergency response team is on call 24/7 to handle urgent repairs or issues.",
  },
  {
    question: "📞 How can I book a service?",
    answer:
      "You can contact us through the contact form, WhatsApp button, or call our hotline directly.",
  },
  {
    question: "🎯 Is there a satisfaction guarantee?",
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
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/images/others/faq.png')",
      }}
    >
      <div className="relative z-10 max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 rounded-3xl border border-gray-200 backdrop-blur-2xl bg-gradient-to-r from-[#22d3ee]/30 to-[#104b5f]/30" />

        {/* Card content-------------- */}
        <div className="relative z-10 p-8 sm:p-10 text-gray-900">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <ChevronUp className="text-[#104b5f]" />
                      ) : (
                        <ChevronDown className="text-[#104b5f]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-5 pb-4"
                      >
                        <p className="text-gray-700 font-semibold">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

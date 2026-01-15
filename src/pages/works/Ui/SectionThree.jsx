'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services offered?",
      answer: "This is different we get that, you may have questions, here are some answers."
    },
    {
      question: "Who is this for?",
      answer: "This is different we get that, you may have questions, here are some answers."
    },
    {
      question: "How projects start?",
      answer: "This is different we get that, you may have questions, here are some answers."
    },
    {
      question: "Do you offer support?",
      answer: "This is different we get that, you may have questions, here are some answers."
    },
    {
      question: "What about updates?",
      answer: "This is different we get that, you may have questions, here are some answers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen container py-16 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18">
        {/* Left Section */}
        <div className="lg:pr-8">
          <h1 className="text-5xl lg:text-6xl font-semibold text-[#26164F] mb-6 leading-tight">
            FREQUENTLY ASKED<br />QUESTIONS
          </h1>
          <p className="text-gray-600 text-lg font-extralight">
            This is different we get that, you may have questions, here are some answers.
          </p>
        </div>

        {/* Right Section - FAQ Items */}
        <div className="space-y-3 py-8  ">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-xl lg:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <span className="text-3xl font-light text-gray-900 transition-transform duration-300">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-base lg:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
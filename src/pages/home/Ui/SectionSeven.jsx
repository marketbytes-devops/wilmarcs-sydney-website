"use client";

import { useState } from "react";
import DetoIcon from "@/components/Icons/DetoIcon";

const SectionSeven = () => {
  const testimonials = [
    {
      quote:
        "“He quickly delivered excellent design a per required specifications. New landing page will have refreshing simple look, while keeping page load light on images and at the same keeping professional look. Finally, it also seems very reasonable to implement responsive design, so I'm very happy with that.”",
      author: "Deniyel Karios",
      title: "CEO, Company Name",
    },
    {
      quote:
        "“He quickly delivered excellent design a per required specifications. New landing page will have refreshing simple look, while keeping page load light on images and at the same keeping professional look. Finally, it also seems very reasonable to implement responsive design, so I'm very happy with that.”",
      author: "Sarah Johnson",
      title: "Product Manager, TechCorp",
    },
    {
      quote:
        "“He quickly delivered excellent design a per required specifications. New landing page will have refreshing simple look, while keeping page load light on images and at the same keeping professional look. Finally, it also seems very reasonable to implement responsive design, so I'm very happy with that.”",
      author: "Michael Chen",
      title: "Founder, StartupX",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <>
      <div className="container mx-auto bg-white">
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-start xl:gap-16 gap-4">
            <div className="w-full lg:py-32 py-0">
              <h4
                className="text-center lg:text-left
                            leading-tight font-semibold text-gray-900"
              >
                What Clients Say About the Tool
              </h4>
            </div>
            <div className="w-full lg:mb-28 mb-8">
              <div className="bg-white rounded-3xl shadow-[5px_10px_15.8px_-1px_#0000002E] 
                             p-8 md:p-12 relative overflow-hidden flex flex-col
                              min-h-[520px] md:min-h-[580px]">
                <blockquote className="relative z-10 flex flex-col flex-1">
                  <span className="absolute -top-8 -left-6  leading-none">
                    <DetoIcon className="text-[#26164F]"/>
                  </span>
                  <span className="text-lg md:text-[24px] lg:text-left text-center  text-gray-700
                                   leading-tight mb-12 pt-12">
                    {current.quote}
                  </span>
                  <div className="flex flex-col md:flex-row items-end justify-between mt-auto">

                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-dashed border-gray-400 shrink-0" />
                      <div>
                        <cite className="not-italic font-semibold text-gray-900">
                          {current.author}
                        </cite>
                        <p className="text-sm text-gray-500">{current.title}</p>
                      </div>
                    </footer>
                    <div className="flex items-center gap-3 mt-6 md:mt-0">
                      <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-black text-white hover:bg-[#271751] cursor-pointer transition"
                        aria-label="Previous testimonial"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-black hover:bg-[#271751] text-white cursor-pointer transition"
                        aria-label="Next testimonial"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default SectionSeven;

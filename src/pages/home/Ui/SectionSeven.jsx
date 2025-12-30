"use client";

import { useState } from "react";
import Image from "next/image";
import PeopleIcon from "@/components/Icons/PeopleIcon";
import halfTone from '../../../assets/images/home/halftone.png';
import lastPic1 from '../../../assets/images/home/lastpic1.jpg';
import lastPic2 from '../../../assets/images/home/lastpic2.jpg';
import lastPic3 from '../../../assets/images/home/lastpic3.png';

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
        "“Amazing work! The tool transformed our workflow and saved us countless hours. Professional, fast, and exactly what we needed.”",
      author: "Sarah Johnson",
      title: "Product Manager, TechCorp",
    },
    {
      quote:
        "“Best decision we made. Clean UI, great performance, and outstanding support throughout the project.”",
      author: "Michael Chen",
      title: "Founder, StartupX",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <>
      <div className="max-w-[85%] mx-auto py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
            <div className="w-full md:w-1/2 py-32">
              <h2 className="text-5xl md:text-6xl lg:text-[73px] leading-tight font-bold text-gray-900">
                What Clients Say About the Tool
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-3xl shadow-[5px_10px_15.8px_-1px_#0000002E] p-8 md:p-12 relative overflow-hidden flex flex-col min-h-[520px] md:min-h-[580px]">
                <blockquote className="relative z-10 flex flex-col flex-1">
                  <span className="absolute -top-8 -left-6 text-9xl text-black font-serif leading-none opacity-20">
                    “
                  </span>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 pt-12">
                    {current.quote}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-dashed border-gray-400 shrink-0" />
                      <div>
                        <cite className="not-italic font-semibold text-gray-900">
                          {current.author}
                        </cite>
                        <p className="text-sm text-gray-500">{current.title}</p>
                      </div>
                    </footer>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-gray-100 hover:bg-[#271751] hover:text-white transition"
                        aria-label="Previous testimonial"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-gray-100 hover:bg-[#271751] hover:text-white transition"
                        aria-label="Next testimonial"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

      <div>
        <div className="border-t border-gray-300 w-full" />
        <div className="grid grid-cols-12 gap-4 py-3">
          <div className="col-span-3 flex items-center">
            <Image
              src={halfTone}
              alt="Halftone background"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center relative -left-32">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                  <PeopleIcon />
                </div>
                <p className="text-sm text-gray-600">Work Together</p>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Let's talk about your project
              </h2>
              <div className="flex flex-row gap-4 items-center max-w-md">
                <input
                  type="email"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#271751]"
                  placeholder="Your email address"
                />
                <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Send enquiry
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-end relative -left-32">
            <div className="flex w-full gap-2">
              <Image
                src={lastPic1}
                alt="Project 1"
                width={112}
                height={128}
                className="w-28 h-32 rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic2}
                alt="Project 2"
                width={183}
                height={228}
                className="w-[183px] h-[228px] rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic3}
                alt="Project 3"
                width={128}
                height={144}
                className="w-32 h-36 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full" />
      </div>
    </>
  );
};

export default SectionSeven;
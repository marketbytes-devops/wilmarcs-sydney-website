"use client";

import { useState } from "react";
import Image from "next/image";
import PeopleIcon from "@/components/Icons/PeopleIcon";
import halfTone from "../../../assets/images/home/halftone.png";
import lastPic1 from "../../../assets/images/home/lastpic1.jpg";
import lastPic2 from "../../../assets/images/home/lastpic2.jpg";
import lastPic3 from "../../../assets/images/home/lastpic3.png";
import Button from "./../../../components/Button/index";

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
                  <span className="absolute -top-8 -left-6 text-9xl text-[#26164F] font-serif leading-none opacity-20">
                    “
                  </span>
                  <span className="text-lg md:text-[24px] lg:text-left text-center  text-gray-700
                                   leading-tight mb-12 pt-12">
                    {current.quote}
                  </span>
                  <div className="flex flex-col md:flex-row items-center justify-between  ">
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

      <div>
        <div className="border-t border-gray-300 w-full" />
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-6 py-3 lg:px-0 px-6">
          {/* Left Halftone Image */}
          <div className="hidden lg:block col-span-1  lg:col-span-3 flex items-center">
            <Image
              src={halfTone}
              alt="Halftone background"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Center Content */}
          <div className="col-span-1  lg:col-span-6
                          flex flex-col justify-center relative lg:-left-32"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 lg:justify-start justify-center">
                <div className="w-5 h-5">
                  <PeopleIcon />
                </div>
                <p className=" text-gray-600">Work Together</p>
              </div>
              <h5 className="  font-semibold text-center lg:text-left ">
                Let's talk about your project
              </h5>
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-2 lg:mb-0 ">
                <input
                  type="email"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#271751]"
                  placeholder="Your email address"
                />
                <Button
                  className="bg-black  text-white sm:py-4 px-8 py-2
                            rounded-full font-medium 
                          hover:bg-gray-800 transition  
                            bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#666666_360deg)] 
                            hover:bg-[conic-gradient(from_180deg_at_50%_50%,#111111_180deg,#777777_360deg)]"
                >
                  Send enquiry
                </Button>
              </div>
            </div>
          </div>

          {/* Right Project Images */}
          <div className="hidden lg:block col-span-1  lg:col-span-3 items-center justify-end relative lg:-left-32">
            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-1">
              <Image
                src={lastPic1}
                alt="Project 1"
                width={112}
                height={128}
                className="w-full mt-12 md:w-28 lg:w-28 h-32 lg:h-32 rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic2}
                alt="Project 2"
                width={183}
                height={228}
                className="w-full mt-4 md:w-[183px] lg:w-[183px] h-56 md:h-[228px] lg:h-[228px] rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic3}
                alt="Project 3"
                width={128}
                height={144}
                className="w-full mt-14 md:w-32 lg:w-32 h-36 lg:h-36 rounded-lg shadow-lg object-cover"
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

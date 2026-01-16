"use client";

import { useState } from "react";
import QuoteIcon from "../../../components/Icons/Quotes";
import worksimg from "../../../assets/images/works/worksimg.png";
import Image from "next/image";

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "He quickly delivered excellent design a per required specifications. New landing page will have refreshing simple look, while keeping page load light on images and at the same fetching professional response.",
      name: "Daniyel Karlos",
      role: "UI Designer",
      image: worksimg,
    },
    {
      id: 2,
      text: "He quickly delivered excellent design a per required specifications. Finally, it also seems very reasonable to implement responsive design, so I'm very happy with that.",
      name: "Daniyel Karlos",
      role: "UI Designer",
      image: worksimg,
    },
    {
      id: 3,
      text: "He quickly delivered excellent design a per required specifications. New landing page will have refreshing simple look, while keeping page load light on images.",
      name: "Daniyel Karlos",
      role: "UI Designer",
      image: worksimg,
    },
  ];

  // Calculate how many slides we need (showing 2 cards per slide)
  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get testimonials for current slide
  const getTestimonialsForSlide = (slideIndex) => {
    const startIndex = slideIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="bg-white container ">
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#26164F] uppercase tracking-tight">
          WHAT CLIENTS SAY ABOUT THE TOOL
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, slideIndex) => {
              const slideTestimonials = getTestimonialsForSlide(slideIndex);

              return (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {slideTestimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className=" bg-white rounded-2xl shadow-xl
  p-10 md:p-12
  min-h-[380px] md:min-h-[440px]
  border border-gray-100
  flex flex-col"
                      >
                        <div className="relative w-14 h-12">
                          <QuoteIcon className="absolute top-0 left-0 w-12 h-10 md:w-14 md:h-12" />
                        </div>

                        <span className="text-gray-700 text-[23px]  mb-8 leading-relaxed">
                          {testimonial.text}
                        </span>
                        <div className="flex items-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 bg-gray-200"
                          />
                          <div>
                            <p className="font-bold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-3 bg-gray-800 rounded-full"
                  : "w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import worksimg from "../../../assets/images/works/worksimg.png";
import Image from "next/image";
import QuoteIcon from "../../../components/Icons/Quotes";

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = isMobile
    ? testimonials.length
    : Math.ceil(testimonials.length / 2);

  const goToSlide = (index) => {
    setCurrentSlide(Math.max(0, Math.min(totalSlides - 1, index)));
  };

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationID = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentTranslate = 0;

    const getPositionX = (e) =>
      e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;

    const touchStart = (e) => {
      isDragging.current = true;
      startX.current = getPositionX(e);
      startTranslate.current = -currentSlide * container.offsetWidth;
      prevTranslate.current = startTranslate.current;

      container.style.transition = "none";
      cancelAnimationFrame(animationID.current);
    };

    const touchMove = (e) => {
      if (!isDragging.current) return;
      const currentPosition = getPositionX(e);
      currentTranslate =
        prevTranslate.current + currentPosition - startX.current;

      container.style.transform = `translateX(${currentTranslate}px)`;
    };

    const touchEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const movedBy = currentTranslate - startTranslate.current;
      const slideWidth = container.offsetWidth;
      const threshold = slideWidth * 0.25;

      let newIndex = currentSlide;
      if (movedBy < -threshold && currentSlide < totalSlides - 1) {
        newIndex = currentSlide + 1;
      }
      if (movedBy > threshold && currentSlide > 0) {
        newIndex = currentSlide - 1;
      }

      container.style.transition = "transform 500ms ease-in-out";
      container.style.transform = `translateX(-${newIndex * 100}%)`;

      setCurrentSlide(newIndex);

      currentTranslate = -newIndex * slideWidth;
      prevTranslate.current = currentTranslate;
    };

    container.addEventListener("mousedown", touchStart);
    container.addEventListener("touchstart", touchStart);

    window.addEventListener("mousemove", touchMove);
    window.addEventListener("touchmove", touchMove, { passive: false });

    window.addEventListener("mouseup", touchEnd);
    window.addEventListener("mouseleave", touchEnd);
    window.addEventListener("touchend", touchEnd);

    return () => {
      container.removeEventListener("mousedown", touchStart);
      container.removeEventListener("touchstart", touchStart);
      window.removeEventListener("mousemove", touchMove);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("mouseup", touchEnd);
      window.removeEventListener("mouseleave", touchEnd);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="bg-white container">
      <div className="mb-12 sm:mb-1 container">
        <h2 className=" sm:text-start text-center  font-bold text-[#26164F] uppercase tracking-tight">
          WHAT CLIENTS SAY ABOUT THE TOOL
        </h2>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out select-none cursor-grab active:cursor-grabbing"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {isMobile
              ? testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl mb-4 shadow-xl p-2  flex flex-col">
                      

                      <span className="text-gray-700 p-4 text-center justify-start text-sm mb-3 leading-relaxed">
                        {testimonial.text}
                      </span>
                      <div className="flex items-center ">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4  bg-gray-200"
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
                  </div>
                ))
              : [...Array(totalSlides)].map((_, slideIndex) => {
                  const slideTestimonials = testimonials.slice(
                    slideIndex * 2,
                    slideIndex * 2 + 2
                  );

                  return (
                    <div key={slideIndex} className="w-full flex-shrink-0 sm:mt-5 px-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {slideTestimonials.map((testimonial) => (
                          <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl mb-4 shadow-xl p-2 md:p-12 md:min-h-[440px] border border-gray-100 flex flex-col"
                          >
                            <div className=" relative">
                              <QuoteIcon
                                className="  text-[#26164F] md:w-14 md:h-14 lg:w-20 lg:h-20"
                              />
                            </div>

                            <span className="text-gray-700 sm:text-[23px] text-sm mb-8 leading-relaxed">
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

        <div className="flex justify-center items-center mt-3 sm:mt-6 mb-8 space-x-2">
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
      </div>
    </div>
  );
}

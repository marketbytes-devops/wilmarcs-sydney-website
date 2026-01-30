"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./../../../components/Button/index";
import RightArrow from "@/components/Icons/RightArrow";
import Link from "next/link";
import ModalForm from "../../../components/Form/ModalForm";
import { createPortal } from "react-dom";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [openPlanModal, setOpenPlanModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const video1 = "/videos/services/CSR.mp4";
  const video2 = "/videos/services/CSR.mp4";
  const video3 = "/videos/services/Event.mp4";
  const video4 = "/videos/services/Testimonial.mp4";
  const video5 = "/videos/services/Social.mp4";

  useEffect(() => {
    if (openPlanModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openPlanModal]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const cards = cardsRef.current.filter(card => card !== null);

    cards.forEach((card, i) => {
      const isLast = i === cards.length - 1;

      let scale = 1;
      let rotation = 0;

      if (!isLast) {
        scale = isMobile ? 0.95 : 0.9 + 0.025 * i;
        rotation = isMobile ? -5 : -10;
      }

      gsap.to(card, {
        scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: card,
         start: `top ${
  isMobile
    ? "top+=60"
    : window.innerWidth >= 1536
    ? 180 + 10 * i
    : 90 + 10 * i
}`,

          end: isLast
            ? isMobile
              ? "+=400"
              : "+=900"
            : "bottom 600",
          endTrigger: containerRef.current,
          scrub: true,
          pin: true,
          pinSpacing: isMobile && isLast ? true : false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
      <div className="w-full flex flex-col lg:flex-row md:mb-12 md:pt-12 gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%]"></div>
        <div className="w-full lg:w-[50%] text-center lg:text-right">
          <h3 className="text-[#24144C] font-semibold leading-tight">
            WHAT WE DO
          </h3>
          <p className="mt-3 font-extralight text-[#404040] justify-center">
            At Wilmarcs Motion Pictures, we are passionate about creating
            meaningful and impactful films that tell your story. At Wilmarcs
            Motion Pictures, we are passionate about creating meaningful and
            impactful films that tell your story.
          </p>
        </div>
      </div>

      <section
        ref={containerRef}
        className={`mt-4 sm:mt-0 relative ${isMobile
            ? "pb-0"
            : "pt-[100px] pb-[800px] min-h-screen"
          }`}
      >
        {/* Card 1 - Corporate Films */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`w-full bg-gradient-to-br from-[#6A4EAD] to-[#2E1D5A] rounded-xl md:rounded-2xl p-4 sm:p-8 md:p-16 flex flex-col shadow-2xl  ${isMobile ? 'mb-6 sm:mb-8 h-auto' : 'h-[600px] mb-[50px]'}`}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">

            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Films
              </Button>
            </div>
            <div className="hidden sm:block ">
              <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-1 rounded-2xl hover:bg-white/30 transition text-sm">
                Plan A Project
              </Button>
            </div>

          </div>

          <span className="text-2xl sm:text-5xl md:text-[62px] uppercase text-white leading-none mb-6 md:mb-6 font-jakarta font-medium">
            Corporate And Brand Films
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <video
              src={video1}
              autoPlay
              loop
              muted
              playsInline
              className="h-[200px] sm:h-[250px] md:h-[700px] lg:h-[800px] lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1 md:order-1 lg:order-1"
            />
            <div className="flex-1 flex flex-col justify-center text-white order-2 md:order-2 lg:order-2">
              <p className="font-normal mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <Link
                href=""
                className="font-jakarta font-medium self-start text-sm md:text-[20px] flex items-center gap-8 group transition-all duration-300"
              >
                See More
                <RightArrow className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-3" />
              </Link>
            </div>

          </div>
          <div className="block mt-2 sm:hidden">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>
        </div>


        {/* Card 2 - Documentary Films */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
 className={`w-full shadow-2xl bg-gray-200 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 flex flex-col ${isMobile ? 'mb-6 sm:mb-8 h-auto' : 'h-[600px] mb-[50px]'}`}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-black text-sm font-medium">
              Films
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-black border-3 border-black px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Films
              </Button>
            </div>
            <div className="hidden sm:block">
            <Button onClick={() => setOpenPlanModal(true)} className="text-black border-3 border-black px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
            </div>
          </div>

          <span className="text-2xl sm:text-5xl md:text-[62px] uppercase text-black leading-none mb-6 md:mb-8">
            CSR And Impact Stories
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <video
              src={video2}
              autoPlay
              loop
              muted
              playsInline
           className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[800px] lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
            />
            <div className="flex-1 flex flex-col justify-center text-black order-2">
              <p className="mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <Link
                href=""
                className="font-jakarta font-medium self-start text-sm md:text-[20px] flex items-center gap-8 group transition-all duration-300"
              >
                See More
                <RightArrow
                  className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-3"
                  color="black"
                />
              </Link>
            </div>
          </div>
           <div className="block sm:hidden mt-2">
            <Button onClick={() => setOpenPlanModal(true)} className="text-black border-3 border-black px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>
        </div>

        {/* Card 3 - Commercial Films */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={`w-full shadow-2xl bg-gradient-to-br from-[#6A4EAD] to-[#2E1D5A] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 flex flex-col ${isMobile ? 'mb-6 sm:mb-8 h-auto' : 'h-[600px] mb-[50px]'}`}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Stories
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Stories
              </Button>
            </div>
            <div className="hidden sm:block">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
            </div>
          </div>

          <span className="text-2xl sm:text-5xl md:text-[62px] uppercase text-white leading-none mb-6 md:mb-8">
            Event And Launch Films
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <video
              src={video3}
              autoPlay
              loop
              muted
              playsInline
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[800px] lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
            />
            <div className="flex-1 flex flex-col justify-center text-white order-2">
              <p className="mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <Link
                href=""
                className="font-jakarta font-medium self-start text-sm md:text-[20px] flex items-center gap-8 group transition-all duration-300"
              >
                See More
                <RightArrow className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-3" />
              </Link>
            </div>
          </div>
            <div className="block sm:hidden mt-2">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>
        </div>

        {/* Card 4 - Event Coverage */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className={`w-full bg-gray-600 rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-16 shadow-2xl flex flex-col ${isMobile ? 'mb-6 sm:mb-8 h-auto' : 'h-[600px] mb-[50px]'}`}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Stories
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Stories
              </Button>
            </div>
            <div className="hidden sm:block">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
            </div>
          </div>

          <span className="text-2xl sm:text-5xl md:text-[62px] uppercase text-white leading-none mb-6 md:mb-8">
            Testimonial And Case Studies
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <video
              src={video4}
              autoPlay
              loop
              muted
              playsInline
              className="h-[200px] sm:h-[250px] md:h-[800px] lg:h-[800px] lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="flex-1 flex flex-col justify-center text-white order-2">
              <p className="mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <Link
                href=""
                className="font-jakarta font-medium self-start text-sm md:text-[20px] flex items-center gap-8 group transition-all duration-300"
              >
                See More
                <RightArrow className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-3" />
              </Link>
            </div>
          </div>
            <div className="block sm:hidden mt-2">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>
        </div>

        {/* Card 5 - Music Videos */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className={`w-full bg-gray-800 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 shadow-2xl flex flex-col ${isMobile ? 'mb-6 sm:mb-8 h-auto' : 'h-[600px] mb-[50px]'}`}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Social
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Social
              </Button>
            </div>
            <div className="hidden sm:block">
            <Button
              onClick={() => setOpenPlanModal(true)}
              className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm"
            >
              Plan A Project
            </Button>
            </div>
          </div>

          <span className="text-2xl sm:text-5xl md:text-[62px] uppercase text-white leading-none mb-6 md:mb-8">
            Social-First Content Packs
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <video
              src={video5}
              autoPlay
              loop
              muted
              playsInline
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[800px] lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
            />
            <div className="flex-1 flex flex-col justify-center text-white order-2">
              <p className="mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story.
              </p>
              <Link
                href=""
                className="font-jakarta font-medium self-start text-sm md:text-[20px] flex items-center gap-8 group transition-all duration-300"
              >
                See More
                <RightArrow className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-3" />
              </Link>
            </div>
          </div>
             <div className="block sm:hidden mt-2">
            <Button onClick={() => setOpenPlanModal(true)} className="text-white border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>
        </div>

      </section>

      {openPlanModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
            onClick={() => setOpenPlanModal(false)}
          >
            <div
              className="bg-white w-full max-w-5xl h-auto p-6 md:p-8 rounded-2xl relative overflow-hidden flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenPlanModal(false)}
                className="absolute top-4 right-4 text-3xl font-bold cursor-pointer"
              >
                ×
              </button>

              <ModalForm closeModal={() => setOpenPlanModal(false)} />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default SectionFour;
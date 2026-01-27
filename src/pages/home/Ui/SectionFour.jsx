"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img1 from "../../../assets/images/home/section4_2.png";
import sectionFourImg from "../../../assets/images/home/section4.jpg";
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

    const cards = cardsRef.current;

    if (cards.length > 0) {
      const cardGap = 22;

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${80 + index * cardGap}`,
          endTrigger: cards[cards.length - 1],
          end: `bottom top+=${50 + index * cardGap}`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: `top top+=${50 + (index + 1) * cardGap}`,
              end: `top top+=${50 + index * cardGap}`,
              scrub: true,
            },
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
      <div className="w-full flex flex-col lg:flex-row -mb-10 md:mb-12 md:pt-20 gap-6 lg:gap-0">
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

      <section className={`relative ${isMobile ? 'pb-0' : 'pb-[680vh] sm:pb-[100vh] lg:pb-[180vh] md:pb-[60vh]'}`}>
        {/* Card 1 - Corporate Films */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`sm:h-screen sm:w-full shadow-2xl bg-linear-to-br from-[#6A4EAD] to-[#2E1D5A] rounded-xl md:rounded-2xl p-4 sm:p-8 md:p-16 flex flex-col ${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Films
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2
               rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Films
              </Button>
            </div>
            <Button onClick={() => setOpenPlanModal(true)} className="text-white  border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>

          <span
            className="text-4xl sm:text-5xl md:text-[80px] uppercase text-white leading-none mb-6 md:mb-6 font-jakarta font-medium"
          >
            Corporate Films
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <Image
              src={img1}
              alt="Corporate Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[600px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1 md:order-1 lg:order-1"
            />
            <div
              className="flex-1 flex flex-col justify-center text-white order-2 md:order-2 lg:order-2"
            >
              <p className="font-normal  mb-4 md:mb-6">
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
        </div>

        {/* Card 2 - Documentary Films */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className={`sm:h-screen sm:w-full bg-gray-200 shadow-2xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 flex flex-col ${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
          style={{ zIndex: 2 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-black text-sm font-medium">
              Films
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-black border-3 border-black px-4 sm:px-14 py-2
               rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Films
              </Button>
            </div>
            <Button className="text-black border-3 border-black px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>

          <span className="text-4xl sm:text-5xl md:text-[80px] uppercase text-black leading-none mb-6 md:mb-8">
            Documentary Films
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <Image
              src={img1}
              alt="Documentary Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
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
        </div>

        {/* Card 3 - Commercial Films */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={`sm:h-screen sm:w-full shadow-2xl bg-linear-to-br from-[#6A4EAD] to-[#2E1D5A] 
                   rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 flex flex-col ${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
          style={{ zIndex: 3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Stories
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2
               rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Stories
              </Button>
            </div>
            <Button className="text-white  border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>

          <span className="text-4xl sm:text-5xl md:text-[80px] uppercase text-white leading-none mb-6 md:mb-8">
            Commercial Films
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <Image
              src={img1}
              alt="Commercial Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
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
        </div>

        {/* Card 4 - Event Coverage */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className={`sm:h-screen sm:w-full bg-gray-600 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16
                    shadow-2xl flex flex-col ${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
          style={{ zIndex: 4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Stories
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2
               rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Stories
              </Button>
            </div>
            <Button className="text-white  border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>

          <span className="text-4xl sm:text-5xl md:text-[80px] uppercase text-white leading-none mb-6 md:mb-8">
            Event Coverage
          </span>

          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
            <div className="h-[200px] sm:h-[250px] md:h-[800px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%]">
              <Image src={img1} alt="Event Coverage" width={800} className="h-full w-full object-cover rounded-2xl md:rounded-3xl shadow-2xl" />
            </div>
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
        </div>

        {/* Card 5 - Music Videos + Short Films */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className={`w-full h-full bg-gray-800 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-16 shadow-2xl ${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
          style={{ zIndex: 5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <p className="block sm:hidden text-white text-sm font-medium">
              Social
            </p>
            <div className="hidden sm:block">
              <Button
                className="text-white border-3 border-white px-4 sm:px-14 py-2
               rounded-2xl hover:bg-white/30 transition text-sm"
              >
                Social
              </Button>
            </div>
            <Button className="text-white  border-3 border-white px-4 sm:px-14 py-2 rounded-2xl hover:bg-white/30 transition text-sm">
              Plan A Project
            </Button>
          </div>

          {/* Music Videos */}
          <span className="text-4xl sm:text-5xl md:text-[80px] uppercase text-white leading-none mb-6  md:mb-8">
            Music Videos
          </span>
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8 mb-12 md:mb-16 mt-3">
            <Image
              src={img1}
              alt="Music Videos"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1"
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

          {/* Short Films */}
          <span
            className="text-4xl sm:text-5xl md:text-[80px] uppercase text-right block text-white mb-6 md:mb-8"
          >
            Short Films
          </span>
          <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8 mt-3 pb-4 md:pb-8">
            <div className="flex-1 flex flex-col  justify-center text-white order-2 md:order-2 lg:order-1">
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
                />
              </Link>
            </div>
            <Image
              src={sectionFourImg}
              alt="Short Films"
              width={800}
              height={500}
              className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-auto lg:max-h-[325px] w-full md:w-full lg:w-[35%]
                        object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1 md:order-1 lg:order-2"
            />
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
              className="bg-white w-full max-w-5xl h-[90vh]
                         p-6 md:p-8
                         rounded-2xl relative
                         overflow-hidden flex items-center"
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
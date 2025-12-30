"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from '../../../assets/images/home/section4_2.png';
import sectionFourImg from '../../../assets/images/home/section4.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, {
      scale: 1,
      opacity: 1,
      transformOrigin: "center top",
    });

    cards.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "+=1000",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => {
          gsap.to(card, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        },
        onLeave: () => {
          gsap.to(card, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        },
        onEnterBack: () => {
          gsap.to(card, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        },
        onLeaveBack: () => {
          gsap.to(card, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        },
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 mx-auto pb-[150vh]">
      <div className="w-full flex flex-col lg:flex-row mb-12 md:mb-16 pt-12 md:pt-20 gap-6 lg:gap-0">
        <div className="w-full lg:w-[50%]"></div>
        <div className="w-full lg:w-[50%] text-left lg:text-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight">
            WHAT WE DO
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#404040]">
            At Wilmarcs Motion Pictures, we are passionate about creating meaningful
            and impactful films that tell your story. At Wilmarcs Motion Pictures, we are passionate about creating meaningful
            and impactful films that tell your story.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex flex-col gap-[30vh] md:gap-[40vh] lg:gap-[50vh]"
      >
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="w-full h-screen shadow-2xl bg-gradient-to-br from-[#6A4EAD] to-[#2E1D5A] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Films
            </button>
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Plan A Project
            </button>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] uppercase text-white leading-none mb-6 md:mb-8">
            Corporate Films
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
            <Image
              src={img1}
              alt="Corporate Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-auto w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
              priority
            />
            <div className="flex-1 flex flex-col justify-center text-white">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="w-full h-screen bg-gray-200 shadow-2xl rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <button className="text-black bg-black/10 px-4 sm:px-6 py-2 rounded-lg hover:bg-black/20 transition text-sm">
              Films
            </button>
            <button className="text-black bg-black/10 px-4 sm:px-6 py-2 rounded-lg hover:bg-black/20 transition text-sm">
              Plan A Project
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] uppercase text-black leading-none mb-6 md:mb-8">
            Documentary Films
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
            <Image
              src={img1}
              alt="Documentary Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-auto w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="flex-1 flex flex-col justify-center text-black">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="w-full h-screen shadow-2xl bg-gradient-to-br from-[#6A4EAD] to-[#2E1D5A] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Films
            </button>
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Plan A Project
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] uppercase text-white leading-none mb-6 md:mb-8">
            Commercial Films
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
            <Image
              src={img1}
              alt="Commercial Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-auto w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="flex-1 flex flex-col justify-center text-white">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="w-full h-screen bg-gray-600 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Films
            </button>
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Plan A Project
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] uppercase text-white leading-none mb-6 md:mb-8">
            Event Coverage
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
            <Image
              src={img1}
              alt="Event Coverage"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-auto w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="flex-1 flex flex-col justify-center text-white">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="w-full h-auto bg-gray-800 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-6 md:mb-8">
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Films
            </button>
            <button className="text-white bg-white/20 px-4 sm:px-6 py-2 rounded-lg hover:bg-white/30 transition text-sm">
              Plan A Project
            </button>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] uppercase text-white leading-none mb-6 md:mb-8">
            Music Videos
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
            <Image
              src={img1}
              alt="Music Videos"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[300px] w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="flex-1 flex flex-col justify-center text-white">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] uppercase text-right text-white leading-none mb-6 md:mb-8">
            Short Films
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 pb-4 md:pb-8">
            <div className="flex-1 flex flex-col justify-center text-white order-2 md:order-1">
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Wilmarcs Motion Pictures, we are passionate about creating
                meaningful and impactful films that tell your story
              </p>
              <button className="font-semibold hover:underline self-start text-sm md:text-base">
                See More →
              </button>
            </div>
            <Image
              src={sectionFourImg}
              alt="Short Films"
              width={800}
              height={600}
              className="h-[200px] sm:h-[250px] md:h-[300px] w-full md:w-[45%] object-cover rounded-2xl md:rounded-3xl shadow-2xl order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
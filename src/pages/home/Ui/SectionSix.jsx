"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import sectionSixGif from '../../../assets/videos/home/section-six.gif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionSix = () => {
  const itemsRef = useRef([]);
  const leftContentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    itemsRef.current.forEach((item) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-[85%] mx-auto">
      <h1
        ref={titleRef}
        className="text-[110px] text-[#271751] relative z-10 leading-tight"
      >
        WHY WILMARCS
      </h1>
      <div className="grid grid-cols-3 -mt-12">
        <div ref={leftContentRef} className="py-48 text-left">
          <p className="text-lg leading-relaxed mb-8">
            We combine artistry and technical expertise to deliver visually
            stunning films. Every film is custom-made to align with your
            brand and communication goals. Our structured process ensures
            that you're always in the loop and that your film is delivered
            on time and on budget. With years of experience in corporate, CSR,
            and event filmmaking, our team understands how to craft powerful
            stories that resonate with your audience.
          </p>
          <button className="bg-[#201147] text-white py-4 px-10 rounded-full font-medium hover:bg-[#271751] transition">
            Plan A Project
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={sectionSixGif}
            alt="Why Wilmarcs visual"
            width={551}
            height={900}
            className="w-full max-w-[551px] h-screen object-cover rounded-2xl shadow-2xl"
            unoptimized
            priority
          />
        </div>

        <div className="py-28 -ml-12">
          {[
            'Reliable timelines',
            'Founder-led direction',
            'Corporate-friendly workflows',
            'Story-first approach',
            'Cinematic visuals',
          ].map((text, index) => (
            <p
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="bg-white p-5 drop-shadow-xl mt-3 first:mt-0 text-lg font-medium"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import HeroSection from "./Ui/HeroSection";
import SectionTwo from "./Ui/SectionTwo";
import SectionThree from "./Ui/SectionThree";
import SectionFour from "./Ui/SectionFour";
import SectionFive from "./Ui/SectionFive";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function AboutUsPage() {
  const boxRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const section = sectionRef.current;

    if (!box || !section) return;

    gsap.to(box, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -400, y: 800 },
          { x: -200, y: 700 },
          { x: -100, y: 1200 },
        ],
        curviness: 1.5,
      },
      ease: "none",
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      {/* MOVING BOX */}
      <div
        ref={boxRef}
        className="fixed top-56 left-1/2 -translate-x-1/2
                   w-20 h-20 bg-orange-500 rounded-xl z-50 pointer-events-none"
      />

      {/* SCROLL AREA */}
      <div
        ref={sectionRef}
        className="relative h-auto overflow-y-hidden"
      >
        <div className="  ">
          <HeroSection/>
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black text-4xl ">
          <SectionTwo/>
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black  text-4xl">
          <SectionThree/>
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black  text-4xl">
          <SectionFour/>
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black  text-4xl">
          <SectionFive/>
        </div>
      </div>
    </>
  );
}

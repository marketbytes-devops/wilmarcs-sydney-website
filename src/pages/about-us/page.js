"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Pointer from "@/components/icons/Pointer";

import HeroSection from "./Ui/HeroSection";
import SectionTwo from "./Ui/SectionTwo";
import SectionThree from "./Ui/SectionThree";
import SectionFour from "./Ui/SectionFour";
import SectionFive from "./Ui/SectionFive";
import SectionSix from "./Ui/SectionSix";
import SectionSeven from "./Ui/SectionSeven";

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
     start: "top 80%",
    end: "bottom 20%", // till SectionFour
    scrub: 1,
  },
  motionPath: {
  path: [
    { x: -100, y: 0 },
    { x: 120, y: 400 },
    { x: -80, y: 900 },
    { x: 60, y: 1400 },
    { x: 0, y: 2000 },
  ],
  curviness: 1.5,
},

  ease: "none",
});


    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* MOVING BOX */}
      <div
        ref={boxRef}
        className="fixed top-56 left-1/2 -translate-x-1/2
                   z-0 pointer-events-none"
      >
        <Pointer />
      </div>

      {/* SCROLL AREA */}
      <div ref={sectionRef} className="relative h-auto overflow-y-hidden z-10">
        <div className="  ">
          <HeroSection />
        </div>

        <div className="lg:mt-12 mt-4 ">
          <SectionTwo />
        </div>

        <div className="lg:mt-12 mt-4 ">
          <SectionThree />
        </div>

        <div className="lg:mt-12 mt-6 ">
          <SectionFour />
        </div>

        <div className="lg:mt-12 mt-4 ">
          <SectionFive />
        </div>

        <div className="lg:mt-12 mt-4 ">
          <SectionSix />
        </div>

        <div className="lg:mt-12 mt-4 ">
          <SectionSeven />
        </div>
      </div>
    </>
  );
}

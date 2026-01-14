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
    start: "top top",
    end: "50% bottom", // till SectionFour
    scrub: 1,
  },
  motionPath: {
    path: [
      { xPercent: -30, yPercent: 0 },
      { xPercent: 30, yPercent: 25 },
      { xPercent: -25, yPercent: 50 },
      { xPercent: 20, yPercent: 75 },
      { xPercent: 0, yPercent: 100 },
    ],
    curviness: 1.8,
    autoRotate: true,
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
        className="absolute top-56 left-1/2 -translate-x-1/2
                   z-0 pointer-events-none"
      >
        <Pointer />
      </div>

      {/* SCROLL AREA */}
      <div ref={sectionRef} className="relative h-auto overflow-y-hidden z-10">
        <div className="  ">
          <HeroSection />
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black">
          <SectionTwo />
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black">
          <SectionThree />
        </div>

        <div className="lg:mt-12 mt-6 bg-white text-black">
          <SectionFour />
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black">
          <SectionFive />
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black">
          <SectionSix />
        </div>

        <div className="lg:mt-12 mt-4 bg-white text-black">
          <SectionSeven />
        </div>
      </div>
    </>
  );
}

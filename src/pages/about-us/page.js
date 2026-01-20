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
import SectionSix from "./Ui/SectionSix";
import SectionSeven from "./Ui/SectionSeven";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function AboutUsPage() {

  return (
    <>
  
      <div className="">
        <div className="">
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

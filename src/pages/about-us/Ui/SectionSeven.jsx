"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import comiccon from "@/assets/images/about/comiccon-india.png";
import samsung from "@/assets/images/about/samsung.png";
import paytm from "@/assets/images/about/paytm.png";
import cafe from "@/assets/images/about/cafe-coffee-day.png";
import himalaya from "@/assets/images/about/himalaya.png";
import embassy from "@/assets/images/about/embassy.png";

export default function PlacesMentioned() {
  const gridRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="w-full container bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:[grid-template-columns:40%_60%] gap-5 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-black uppercase leading-tight">
              Places we've been <br /> mentioned.
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-extralight max-w-md">
              We've been recognised by some respected brands and publications for
              our work. Here are a few that have caught people's attention.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div ref={gridRef} className="relative grid grid-cols-3 grid-rows-3">

            {/* STATIC LINE + DOTS */}
            <div className="absolute inset-0 pointer-events-none">
              <StaticLineWithDots x="3%" />
              <StaticLineWithDots x="33.333%" />
              <StaticLineWithDots x="68.666%" />
              <StaticLineWithDots x="100%" />
            </div>

            {/* ANIMATED SEGMENTS */}
            <div className="absolute inset-0 pointer-events-none">
              <AnimatedSegments x="3%" progress={scrollYProgress} />
              <AnimatedSegments x="33.333%" progress={scrollYProgress} />
              <AnimatedSegments x="68.666%" progress={scrollYProgress} />
              <AnimatedSegments x="100%" progress={scrollYProgress} />
            </div>

            {/* LOGOS */}
            <Logo img={comiccon} />
            <Logo img={samsung} />
            <Logo img={paytm} />

            <Logo img={cafe} />
            <Logo img={himalaya} />
            <Logo img={embassy} />

            <Logo img={comiccon} />
            <Logo img={samsung} />
            <Logo img={paytm} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* STATIC LINE + DOTS */
function StaticLineWithDots({ x }) {
  return (
    <div
      className="absolute top-0 h-full w-px bg-[#8D8D8D]"
      style={{ left: x }}
    >
      <Dot y="1.6%" />
      <Dot y="50%" />
      <Dot y="83.3%" />
    </div>
  );
}


function AnimatedSegments({ x, progress }) {
  const seg1 = useTransform(progress, [0.1, 0.3], [0, 1]);
  const seg2 = useTransform(progress, [0.3, 0.6], [0, 1]);
  const seg3 = useTransform(progress, [0.6, 0.9], [0, 1]);

  return (
    <div className="absolute top-0 h-full w-px" style={{ left: x }}>
      {/* Segment 1 */}
      <motion.div
        style={{ scaleY: seg1 }}
        className="absolute top-[1.6%] h-[48.4%] w-px bg-[#1a1a2e] origin-top"
      />

      {/* Segment 2 */}
      <motion.div
        style={{ scaleY: seg2 }}
        className="absolute top-[50%] h-[33.3%] w-px bg-[#1a1a2e] origin-top"
      />

      {/* Segment 3 */}
      <motion.div
        style={{ scaleY: seg3 }}
        className="absolute top-[83.3%] h-[16.7%] w-px bg-[#1a1a2e] origin-top"
      />
    </div>
  );
}

/* DOT */
function Dot({ y }) {
  return (
    <span
      className="absolute left-1/2 w-4 h-4 bg-[#8D8D8D] rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{ top: y }}
    />
  );
}

/* LOGO */
function Logo({ img }) {
  return (
    <div className="flex items-center justify-center h-[180px]">
      <Image src={img} alt="brand logo" className="object-contain" priority />
    </div>
  );
}

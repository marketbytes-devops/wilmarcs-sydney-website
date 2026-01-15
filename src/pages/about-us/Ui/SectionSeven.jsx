"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

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

  /* MOBILE MARQUEE (react-fast-marquee) */
  function MobileMarquee({ logos }) {
    return (
      <Marquee speed={100} pauseOnHover gradient={false} className="py-2">
        {logos.map((img, i) => (
          <div
            key={i}
            className="mx-3 flex items-center justify-center h-[80px]"
          >
            <Image src={img} alt="brand logo" className="object-contain" />
          </div>
        ))}
      </Marquee>
    );
  }

  return (
    <section className="w-full container bg-white lg:py-24 sm:py-6 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:[grid-template-columns:40%_60%] gap-5 items-start">
          {/* LEFT */}
          <div>
            <h2 className="font-black uppercase leading-tight text-center lg:text-left">
              Places we've been <br /> mentioned.
            </h2>

            <p className="lg:mt-6 mt-2 text-center lg:text-left text-gray-600 font-extralight w-full lg:max-w-md">
              We've been recognised by some respected brands and publications
              for our work. Here are a few that have caught people's attention.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div
            ref={gridRef}
            className="relative hidden lg:grid grid-cols-3 grid-rows-3"
          >
            {/* STATIC LINE + DOTS */}
            <div className="absolute inset-0 pointer-events-none ">
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

          {/* MOBILE ONLY — MARQUEE */}
          <div className="block lg:hidden mt-2">
            <MobileMarquee
              logos={[comiccon, samsung, paytm, cafe, himalaya, embassy]}
            />
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
      className="absolute top-0 h-full w-[2px]  bg-[#E0E0E0]"
      style={{ left: x }}
    >
      <Dot y="1%" />
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
      className="absolute left-1/2 w-4 h-4 bg-[#1a1a2e] rounded-full -translate-x-1/2 -translate-y-1/2"
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

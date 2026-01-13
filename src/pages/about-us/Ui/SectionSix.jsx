"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../../components/Button";

import sectionsixabout from "@/assets/images/about/sectionsixabout.png";

const contentItems = [
  {
    label: "Sydney-based",
    color: "purple",
    image: sectionsixabout,
    description: "Hand pointing to Sydney, Australia on a globe",
  },
  {
    label: "Professionally structured",
    color: "white",
    image: sectionsixabout,
    description: "Professional film production setup / structured workflow",
  },
  {
    label: "Client-aligned",
    color: "white",
    image: sectionsixabout,
    description: "Team working closely with client / collaboration scene",
  },
];

export default function OperatingModelSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = contentItems[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentItems.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container rounded-3xl bg-[#C7D5D8] lg:py-14 py-6 px-5 sm:px-10 md:px-14  flex items-center">
      <div
        className="
  max-w-7xl mx-auto w-full
  grid
  grid-cols-1
  lg:[grid-template-columns:52%_45%]
  gap-12 xl:gap-12
  items-center
"
      >
        {/* LEFT - Text Content */}
        <div className="space-y-2 md:space-y-4">
          <h5 className=" font-bold text-gray-900 tracking-tight text-center lg:text-left">
            OPERATING MODEL
          </h5>

          <p className="text-center lg:text-left text-[#0B0B0B] font-normal  leading-relaxed max-w-2xl">
            Wilmarcs Motion Pictures is a dedicated film studio specializing in
            structured and intentional storytelling.
          </p>

          {/* Clickable Pills */}
          <div className="grid lg:mt-8 mt-4 gap-4 md:gap-6  ">
            {contentItems.map((item, index) => (
              <Button
                key={item.label}
                onClick={() => setActiveIndex(index)}
                className={`
  px-4 py-3 rounded-xl !text-xl justify-start transition-all duration-300
  ${
    activeIndex === index
      ? "bg-gradient-to-r from-[#2B1A56] to-[#6D51B3] text-white"
      : "bg-[#E3E9E9] text-black"
  }
`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            className="bg-black px-12 py-4 text-white mt-2 w-full lg:w-auto
                       transition-all duration-300 bg-gradient-to-r from-[#000000] to-[#666666]"
          >
            {" "}
            Schedule a conversation
          </Button>
        </div>

        {/* RIGHT - Image Area */}
        <div className="relative order-1 lg:order-2">
          <div
            className="aspect-[4/3] sm:aspect-square md:aspect-[5/4] lg:aspect-square
                       rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <Image
              key={currentItem.image.src}
              src={currentItem.image}
              alt={currentItem.description}
              fill
              className="object-cover transition-opacity duration-500"
              priority={activeIndex === 0}
              quality={85}
            />
          </div>

          {/* Carousel dots (optional - you can remove if not needed) */}
          <div className="  flex gap-3 mt-4 justify-center">
            {contentItems.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5  rounded-full transition-all duration-300 ${
                  i === activeIndex ? " bg-[#5D5D5D] px-4 " : "bg-[#5D5D5D] "
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

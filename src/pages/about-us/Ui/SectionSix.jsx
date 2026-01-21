"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../../components/Button";
import ModalForm from "@/components/Form/ModalForm";
import { createPortal } from "react-dom";
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
  const [openPlanModal, setOpenPlanModal] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentItems.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="container rounded-3xl bg-[#C7D5D8] lg:py-14 py-6 px-5 sm:px-10 md:px-14 
                        flex items-center"
    >
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
        <div className="">
          <h5 className=" font-bold text-gray-900 tracking-tight text-center lg:text-left ">
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
            onClick={() => setOpenPlanModal(true)}
            className="bg-black px-12 py-4 text-white mt-6 w-full lg:w-auto
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

          {/* Carousel dots */}
          <div className="flex items-center justify-center gap-3 mt-5 lg:mt-6">
            {contentItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`
        w-3 h-3 rounded-full transition-all duration-300 ease-in-out
        
        ${
          i === activeIndex
            ? "bg-[#2B1A56] scale-125"
            : "bg-[#9CA3AF] hover:bg-gray-500"
        }
      `}
                aria-label={`Slide ${i + 1} of ${contentItems.length}`}
              />
            ))}
          </div>
        </div>
      </div>

     {openPlanModal &&
             createPortal(
               <div
                 className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
                 onClick={() => setOpenPlanModal(false)} // optional: close on backdrop click
               >
                 {/* Modal content – stop propagation so clicks inside don't close */}
                 <div
                   className="bg-white w-[95%] max-w-5xl max-h-[90vh] p-8 rounded-2xl relative overflow-y-auto"
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
    </section>
  );
}

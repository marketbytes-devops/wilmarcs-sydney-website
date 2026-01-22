"use client";
import React from "react";


const HeroSection = () => {
  return (
    <>
      <section className="bg-black mt-14">
        <div className="flex flex-col lg:flex-row container py-12 sm:py-20 md:py-24 lg:py-32 w-full gap-8 md:gap-10 lg:gap-0">

          <div className="text-white w-full lg:w-[50%] py-6 sm:py-10 md:py-12 lg:py-16 flex flex-col items-center lg:items-start">
            <h3 className="leading-tight font-bold text-center lg:text-left">Our Workflow</h3>
            <p className="mt-3 sm:mt-4 md:mt-2 w-fit leading-tight bg-white text-black p-2 sm:p-3 md:p-2 text-center lg:text-left mx-auto lg:mx-0">
              A structured process for clarity and predictability.
            </p>
          </div>

          <div className="relative w-full lg:w-[50%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-auto lg:min-h-[400px] overflow-hidden rounded-2xl lg:rounded-3xl">
            <video
              src='/videos/process/heroSection.mp4'
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

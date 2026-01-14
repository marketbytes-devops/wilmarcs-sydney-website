"use client";
import React from "react";


const HeroSection = () => {
  return (
    <>
      <section className="bg-black mt-14">
        <div className="flex flex-col lg:flex-row container py-32  w-full">

          <div className="text-white w-full lg:w-[50%] py-16 ">
            <h3 className="leading-tight font-bold text-center lg:text-left">Our Workflow</h3>
            <p className="mt-2 w-fit leading-tight bg-white text-black p-2  text-center lg:text-left">
                A structured process for clarity and predictability.
            </p>
          </div>

          <div className="relative w-full mt-12 lg:w-[50%] lg:h-auto h-[200px] overflow-hidden rounded-2xl">
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

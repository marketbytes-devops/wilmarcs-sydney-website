import React from "react";

import CurvedCard from "@/components/CurvedCard";
import kevin from "./../../../assets/images/about/kevin.png";
import Image from "next/image";

const SectionThree = () => {
  return (
    <>
      <section className="container">
        <div className="flex flex-col lg:flex-row  lg:gap-18 gap-4">
          <div className="relative w-full lg:w-[30%] mx-auto">
            <Image
              src={kevin}
              alt="kevinImage"
              width={356}
              height={500}
              className="rounded-3xl lg:h-[400px] lg:w-[356px] w-full h-auto"
            />

            <div className="absolute rounded-3xl inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />

            {/* TEXT */}
            <div className="absolute bottom-4 right-18 left-18 text-center text-white z-10">
              <p className="font-bold">Kevin Wilson</p>
              <p className="font-semibold ">Founder — Director</p>
            </div>
          </div>

          <div className="w-full lg:w-[70%] lg:mt-32 mt-2">
            <h2 className="font-semibold text-center lg:text-left">
              Founder-led, disciplined, clarity-driven filmmaking.
            </h2>
            <p className="mt-3 text-center lg:text-left font-thin leading-relaxed">
              Kevin Wilson, the founder of Wilmarcs Motion Pictures, brings
              years of industry experience to every project. With a disciplined
              approach, Kevin ensures clarity-driven filmmaking, guiding each
              narrative from start to finish.
            </p>
          </div>
          <div className="lg:w-[20%] hidden"></div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;

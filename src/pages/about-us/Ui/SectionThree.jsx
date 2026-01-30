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
              className="rounded-3xl lg:h-[400px] w-auto h-auto"
            />
            {/* TEXT */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white z-10">
              <p className="font-bold">Kevin Wilson</p>
              <p className="font-semibold">Founder — Director</p>
            </div>
            <div className="absolute rounded-3xl inset-0" />
          </div>

          <div className="w-full lg:w-[70%] lg:mt-40 mt-2">
            <h2 className="font-semibold text-center lg:text-left">
              Founder-led, disciplined, clarity-driven filmmaking.
            </h2>
            <p className="mt-3 text-center lg:text-left font-thin text-black/90 leading-relaxed">
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

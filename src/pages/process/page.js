"use client";

import SectionTwo from "../process/Ui/SectionTwo";
import SectionThree from "../process/Ui/SectionThree";
import HeroSection from "../process/Ui/HeroSection";

const ProcessPage = () => {

  return (
    <>
    <section>
      <HeroSection/>
    </section>
     <section className="lg:mt-18 md:mt-10 mt-6">
        <SectionTwo />
      </section>
      <section className=" lg:-mt-32  md:-mt-40 !-mt-44 lg:mb-18 md:mb-10 mb-6">
        <SectionThree />
      </section>
      
    </>
  );
};

export default ProcessPage;

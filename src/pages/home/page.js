"use client";
import HeroSection from "./Ui/HeroSection";
import SectionFive from "./Ui/SectionFive";
import SectionFour from "./Ui/SectionFour";
import SectionSeven from "./Ui/SectionSeven";
import SectionSix from "./Ui/SectionSix";
import SectionThree from "./Ui/SectionThree";
import SectionTwo from "./Ui/SectionTwo";


const HomePage = () => {

  return (
    <>
      <header>
        <HeroSection />
      </header>
      <section className="lg:mt-20 sm:mt-10 mt-6">
        <SectionTwo />
      </section>
      <section className="lg:mt-18 mt-6">
        <SectionThree />
      </section>
      <section className="lg:mt-5 mt-0">
        <SectionFour />
      </section>
      <section className="-mt-12 lg:mt-16">
        <SectionFive />
      </section>
      <section className="mt-5 md:mt-22">
        <SectionSix />
      </section>
      <section className="-mt-4 sm:mt-22">
        <SectionSeven />
      </section>
    </>
  );
};

export default HomePage;

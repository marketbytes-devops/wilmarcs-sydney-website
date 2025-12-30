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
      <section>
        <SectionTwo />
      </section>
      <section className="mt-6">
        <SectionThree />
      </section>
      <section className="mt-5">
        <SectionFour />
      </section>
      <section className="mt-6">
        <SectionFive />
      </section>
      <section className="mt-5">
        <SectionSix />
      </section>
      <section className="mt-5">
        <SectionSeven />
      </section>
    </>
  );
};

export default HomePage;

"use client";

import Button from "@/components/Button";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createPortal } from "react-dom";

import ModalForm from "@/components/Form/ModalForm";
import card1 from "@/assets/images/about/card1.png";
import card2 from "@/assets/images/about/card2.png";
import card3 from "@/assets/images/about/card3.png";

gsap.registerPlugin(ScrollTrigger);

const SectionFive = () => {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [openPlanModal, setOpenPlanModal] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    const scrollWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(track, {
      x: -(scrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  function Card({ title, image, height }) {
    return (
      <div className="md:min-w-[380px] max-w-full">
        <p className="mb-3  font-semibold text-gray-900">{title}</p>

        <div
          className={`relative w-full ${height} overflow-hidden rounded-2xl`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  const mobileSliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8px",
  };

  return (
    <>
      <section className="container">
        <div className="flex flex-col lg:flex-row items-center py-4 lg:gap-6 gap-3">
          <div className="w-full lg:w-[80%] text-center lg:text-left">
            <h4 className="leading-tight">WHO WE WORK WITH</h4>
            <p className="mt-2 lg:mt-0">
              Kevin Wilson, the founder of Wilmarcs Motion Pictures, brings
              years of{" "}
            </p>
          </div>
          <div className="w-full lg:w-[20%] flex justify-center lg:justify-end ">
            <Button
              onClick={() => setOpenPlanModal(true)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`flex items-center overflow-hidden whitespace-nowrap text-white
                         text-[15px] px-12 py-4 w-full lg:w-auto
                        transition-all duration-[600ms] ease-in-out
                                    ${
                                      hovered
                                        ? " bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#381A8C_0deg,#1A0F37_180deg,#936FEC_360deg)]"
                                        : "bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#936FEC_0deg,#1A0F37_180deg,#381A8C_360deg)]"
                                    }`}
            >
              Plan a Project
            </Button>
          </div>
        </div>
        <div className="border border-gray-400"></div>
      </section>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-white py-18 container hidden md:block"
      >
        <div
          ref={trackRef}
          className="flex items-end gap-10 will-change-transform"
        >
          {/* ROW 1 */}
          <Card title="CSR teams" image={card1} height="h-[360px]" />
          <Card title="Corporates" image={card2} height="h-[300px]" />
          <Card title="Event teams" image={card3} height="h-[260px]" />

          {/* ROW 2 */}
          <Card title="Corporates" image={card2} height="h-[300px]" />
          <Card title="Event teams" image={card1} height="h-[380px]" />
        </div>
      </section>

      {/* MOBILE SLIDER (below md) */}
      <section className="block md:hidden bg-white py-6">
        <Slider {...mobileSliderSettings}>
          <div className="px-3">
            <Card title="CSR teams" image={card1} height="h-[300px]" />
          </div>

          <div className="px-3">
            <Card title="Corporates" image={card2} height="h-[300px]" />
          </div>

          <div className="px-3">
            <Card title="Event teams" image={card3} height="h-[300px]" />
          </div>

          <div className="px-3">
            <Card title="Corporates" image={card2} height="h-[300px]" />
          </div>

          <div className="px-3">
            <Card title="Event teams" image={card1} height="h-[300px]" />
          </div>
        </Slider>
      </section>

      {openPlanModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
            onClick={() => setOpenPlanModal(false)} 
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
    </>
  );
};

export default SectionFive;

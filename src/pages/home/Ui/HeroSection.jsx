"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../components/Button";
import Link from "next/link";
import Image from "next/image";
import HomeHero from "@/assets/videos/home/HomeHero.gif";
import ModalForm from "../../../components/Form/ModalForm";
import { createPortal } from "react-dom";

const HeroSection = () => {
  
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const [openPlanModal, setOpenPlanModal] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState({});

 
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (openPlanModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openPlanModal]);

  useEffect(() => {
    const checkDesktop = () => {
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      sliderRef.current?.slickPause();
      setIsScrolling(true);

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        sliderRef.current?.slickPlay();
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 900,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    swipe: false,
    touchMove: false,
    pauseOnHover: false,
    beforeChange: (_, next) => {
      setCurrentSlideIndex(next);
    },
  };

  const mobileSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
  };

  const slides = [
    { id: 1, video: "/videos/home/slider1.mp4" },
    { id: 2, video: "/videos/home/slider2.mp4" },
    { id: 3, video: "/videos/home/slider1.mp4" },
    { id: 4, video: "/videos/home/slider2.mp4" },
  ];

  const extendedSlides = [...slides, ...slides, ...slides];


  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden relative mt-4 sm:mt-0 overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/home/backgroundhero.png"
          className="absolute inset-0 w-full h-[590px] object-cover -z-10"
        >
          <source src="/videos/home/backgroundhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center h-[560px] px-5 text-white">
          <div className="mb-4">
            <Slider {...mobileSettings}>
              {slides.map((slide) => (
                <div key={slide.id}>
                  <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
                    <video
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      ref={(ref) => {
                        if (ref && playingVideos[slide.id] === false) ref.pause();
                      }}
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <span className="font-bold text-center mb-4">
            Cinematic films for brands that value clear communication.
          </span>
          <p className="text-center">
            You'll only receive updates on new templates.
            <br />
            No spam, just what you signed up for.
          </p>
        </div>
      </section>

      {/* DESKTOP*/}
      <section
        ref={sectionRef}
        className="hidden md:block relative overflow-hidden bg-black min-h-screen mt-7"
        style={{
          marginLeft: "24px",
          marginRight: "24px",
          borderRadius: "24px",
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={HomeHero}
            alt="Hero animation"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Vertical slider - always visible */}
        <div className="absolute inset-0 flex justify-end mt-28">
          <div className="relative w-[400px] h-[600px] overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
              {extendedSlides.map((slide, index) => (
                <div key={`${slide.id}-${index}`} className="py-2 h-full">
                  <div className="relative mx-auto w-[220px] h-[140px] rounded-xl overflow-hidden">
                    <video
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      ref={(ref) => {
                        if (ref && playingVideos[slide.id] === false) ref.pause();
                      }}
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/40 pointer-events-none"></div>

                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Main content - fixed position */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center py-8 mt-20">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="font-normal text-white leading-tight text-5xl lg:text-7xl">
              Cinematic Films For{" "}
              <span className="bg-gradient-to-b from-[#BBAEB9] to-[#6B41FF] bg-clip-text text-transparent px-4 py-2 inline-block rounded-2xl">
                Brands
              </span>
              <br />
              That Value Clear Communication.
            </h1>

            <div className="mt-8 max-w-lg">
              <p className="text-white/80 mb-8 text-lg">
                You'll only receive updates on new templates
                <br />
                no spam, just what you signed up for.
              </p>

              <div className="flex flex-wrap gap-5">
                <Button
                  onClick={() => setOpenPlanModal(true)}
                  className="text-black bg-white rounded-3xl py-3 px-10 font-semibold text-lg"
                >
                  Plan a Project
                </Button>
                <Link href="/works">
                  <Button className="text-white bg-black rounded-3xl py-3 px-10 font-semibold border border-white text-lg">
                    Watch Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {openPlanModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
            onClick={() => setOpenPlanModal(false)}
          >
            <div
              className="bg-white w-full max-w-5xl h-[90vh] p-6 md:p-8 rounded-2xl relative overflow-hidden flex items-center"
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

export default HeroSection;
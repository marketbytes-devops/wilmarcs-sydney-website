"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../../assets/images/home/heroimg1.png";
import hero2 from "../../../assets/images/home/heroimg2.png";
import hero3 from "../../../assets/images/home/heroimg3.png";
import hero4 from "../../../assets/images/home/heroimg4.png";

import bgImage1 from "../../../assets/images/home/backgroundhero.png";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const progress = Math.min(
        Math.max((scrollY - sectionTop) / (sectionHeight * 0.5), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    pauseOnHover: false,
    focusOnSelect: false,
    beforeChange: (_, next) => {
      if (!isScrolling) setCurrentSlideIndex(next);
    },
  };

  const slides = [
    { id: 1, thumbnail: hero1 },
    { id: 2, thumbnail: hero2 },
    { id: 3, thumbnail: hero3 },
    { id: 4, thumbnail: hero4 },
  ];

  const headingTransform = `translateY(${-scrollProgress * 20}px)`;
  const headingOpacity = Math.max(1 - scrollProgress * 1.2, 0);
  const paragraphTransform = `translateY(${scrollProgress * 100}px)`;

  const zoomProgress = Math.min(scrollProgress / 0.35, 1);

  const centerImageOpacity = zoomProgress;
  const centerImageScale = 0.7 + zoomProgress * 0.3;

  const sliderOpacity = Math.max(1 - scrollProgress * 2, 0);
  const sliderTransform = `translateX(${scrollProgress * 100}px)`;

  // Calculate section margin based on scroll progress
  const sectionMargin = scrollProgress > 0.3 ? "0px" : "24px"; 
  
  // Calculate background position based on scroll progress
  const bgRightPosition = scrollProgress > 0.3 ? "0px" : "-24px";

  return (
    <section
      ref={sectionRef}
      className="relative  overflow-hidden bg-black min-h-screen mt-14"
      style={{
        marginLeft: sectionMargin,
        marginRight: sectionMargin,
        transition: "margin 0.3s ease-out",
      }}
    >
      {/* RIGHT BACKGROUND */}
      <div 
        className="absolute top-0 h-[74%] w-[45%]"
        style={{
          right: bgRightPosition,
          transition: "right 0.3s ease-out",
        }}
      >
        <Image
          src={bgImage1}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0"></div>

        {/* CIRCLE MASK */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: sliderOpacity,
            transform: sliderTransform,
            transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          <div className="relative w-[700px] h-[600px] overflow-hidden">
            {/* FORCE SLICK HEIGHT */}
            <div className="h-full">
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id} className="py-2">
                    <div className="relative mx-auto w-[220px] h-[140px]">
                      <Image
                        src={slide.thumbnail}
                        alt={`Thumbnail ${slide.id}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full min-h-screen flex-col justify-center py-20 mt-30">
        <div className="container mx-auto  max-w-7xl">
          {/* HEADING */}
          <div
            style={{
              transform: headingTransform,
              opacity: headingOpacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h1 className="font-bold text-white leading-tight">
              Cinematic Films For{" "}
              <span className="text-purple-400 bg-purple-400/20 px-4 py-2 rounded-2xl inline-block">
                Brands
              </span>
              <br />
              That Value Clear Communication.
            </h1>
          </div>

          <div className="mt-2 relative min-h-[600px]">
            {/* PARAGRAPH */}
            <div
              className="w-full lg:w-1/2"
              style={{
                transform: paragraphTransform,
                transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                position: scrollProgress > 0.3 ? "absolute" : "relative",
                top: scrollProgress > 0.3 ? "calc(50% + 220px)" : "auto",
                left: scrollProgress > 0.3 ? "50%" : "auto",
                transform:
                  scrollProgress > 0.3
                    ? "translateX(-100%)"
                    : paragraphTransform,
              }}
            >
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                You'll only receive updates on new templates <br />
                no spam, just what you signed up for.
              </p>
              <div className="flex gap-5">
                <button className="text-black bg-white rounded-3xl py-3 px-8 font-semibold">
                  Plan a Project
                </button>
                <button className="text-white bg-black rounded-3xl py-3 px-8 font-semibold border border-white">
                  Watch Work
                </button>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                opacity: centerImageOpacity,
                transform: `translate(-50%, -50%) scale(${centerImageScale})`,
                transition:
                  "opacity 0.2s ease, transform 0.10s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="relative w-[500px] h-[340px]">
                <Image
                  src={slides[currentSlideIndex % slides.length].thumbnail}
                  alt="Hero slide"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
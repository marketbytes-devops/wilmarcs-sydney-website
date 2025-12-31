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

const HeroSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

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
    speed: 800,
    pauseOnHover: false,
    focusOnSelect: false,
    beforeChange: (current, next) => setCurrentSlideIndex(next),
    dotsClass: "slick-dots",
  };

  const slides = [
    { id: 1, thumbnail: hero1 },
    { id: 2, thumbnail: hero2 },
    { id: 3, thumbnail: hero3 },
    { id: 4, thumbnail: hero4 },
  ];

  const headingTransform = `translateY(${-scrollProgress * 300}px)`;
  const headingOpacity = 1 - scrollProgress * 2;
  const paragraphTransform = `translateY(${scrollProgress * 400}px)`;
  const centerImageOpacity = scrollProgress;
  const centerImageScale = 0.5 + scrollProgress * 0.5;
  const sliderOpacity = Math.max(1 - scrollProgress * 3, 0);
  const sliderTransform = `translateX(${scrollProgress * 100}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black min-h-screen"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex h-full min-h-screen flex-col justify-center py-20 mt-30">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Heading */}
          <div
            style={{
              transform: headingTransform,
              opacity: headingOpacity,
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <h1 className="text-5xl lg:text-5xl xl:text-4xl font-bold text-white leading-tight">
              Cinematic Films For{" "}
              <span className="text-purple-400 bg-purple-400/20 px-4 py-2 rounded-2xl inline-block">
                Brands
              </span>
              <br />
              That Value Clear Communication.
            </h1>
          </div>

          <div className="mt-2 relative min-h-[600px]">
            {/* Paragraph */}
            <div
              className="w-full lg:w-1/2"
              style={{
                transform: paragraphTransform,
                transition: "transform 0.1s ease-out",
                position: scrollProgress > 0.3 ? "absolute" : "relative",
                bottom: scrollProgress > 0.3 ? "40px" : "auto",
              }}
            >
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                You'll only receive updates on new templates <br />
                no spam, just what you signed up for.
              </p>
              
            </div>

            {/* Center Image */}
            <div
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                opacity: centerImageOpacity,
                transform: `translate(-50%, -50%) scale(${centerImageScale})`,
                transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
              }}
            >
              <div className="relative w-[600px] h-[340px]">
                <Image
                  src={slides[currentSlideIndex % slides.length].thumbnail}
                  alt="Hero slide"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute bottom-44 right-10 w-full flex justify-center lg:justify-end"
              style={{
                opacity: sliderOpacity,
                transform: sliderTransform,
                transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
              }}
            >
              <div className="w-[380px] h-[700px]">
                <Slider {...settings}>
                  {slides.map((slide) => (
                    <div key={slide.id} className="py-2">
                      <div className="relative mx-auto w-[220px] h-[150px]">
                        <Image
                          src={slide.thumbnail}
                          alt={`Thumbnail ${slide.id}`}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
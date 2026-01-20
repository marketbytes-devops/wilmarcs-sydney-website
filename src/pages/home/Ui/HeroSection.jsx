"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../components/Button";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [playingVideos, setPlayingVideos] = useState({});

 
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

 
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      sliderRef.current?.slickPause();

      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        sliderRef.current?.slickPlay();
      }, 200);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [isDesktop]);

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

  const headingTransform = `translateY(${-scrollProgress * 20}px)`;
  const headingOpacity = Math.max(1 - scrollProgress * 1.2, 0);
  const paragraphTransform = `translateY(${scrollProgress * 100}px)`;

  const zoomProgress = Math.min(scrollProgress / 0.35, 1);
  const centerImageOpacity = zoomProgress;
  const centerImageScale = 0.7 + zoomProgress * 0.3;

  const sliderOpacity = Math.max(1 - scrollProgress * 2, 0);
  const sliderTransform = `translateX(${scrollProgress * 100}px)`;

  const sectionMargin = scrollProgress > 0.3 ? "0px" : "24px";
  const bgRightPosition = scrollProgress > 0.3 ? "0px" : "-24px";

  const togglePlayPause = (id, videoRef) => {
    if (!videoRef) return;
    if (videoRef.paused) {
      videoRef.play();
      setPlayingVideos((p) => ({ ...p, [id]: true }));
    } else {
      videoRef.pause();
      setPlayingVideos((p) => ({ ...p, [id]: false }));
    }
  };

  return (
    <>
      {/* MOBILE */}
      <section className="md:hidden relative mt-4 sm:mt-0 overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-center h-[600px] px-5 text-white">
          {/* SLIDER */}
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

                    {/* Play / Pause Button Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 transition-opacity hover:bg-black/40"
                      onClick={(e) => {
                        const video = e.currentTarget.previousSibling;
                        togglePlayPause(slide.id, video);
                      }}
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        {playingVideos[slide.id] ? (
                          <div className="flex gap-1">
                            <div className="w-3 h-8 bg-black rounded"></div>
                            <div className="w-3 h-8 bg-black rounded"></div>
                          </div>
                        ) : (
                          <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[16px] border-y-transparent border-solid ml-2"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* PARAGRAPH */}
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

      {/* DESKTOP */}
      <section
        ref={sectionRef}
        className="hidden md:block relative overflow-hidden bg-black min-h-screen mt-10"
        style={{
          marginLeft: sectionMargin,
          marginRight: sectionMargin,
          borderRadius: scrollProgress > 0.3 ? "0" : "24px",
          transition: "margin 0.3s ease-out",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            right: bgRightPosition,
            transition: "right 0.3s ease-out",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/home/backgroundhero.png"
            className="w-full h-full object-cover"
          >
            <source src="/videos/home/backgroundhero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80 z-0"></div>

          {/* VERTICAL SLIDER */}
          <div
            className="absolute inset-0 flex justify-end mt-28"
            style={{
              opacity: sliderOpacity,
              transform: sliderTransform,
              transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            }}
          >
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

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/40 pointer-events-none"></div>

                      {/* Play / Pause Button Overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 transition-opacity hover:bg-black/30"
                        onClick={(e) => {
                          const video = e.currentTarget.previousSibling.previousSibling;
                          togglePlayPause(slide.id, video);
                        }}
                      >
                        <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                          {playingVideos[slide.id] ? (
                            <div className="flex gap-1">
                              <div className="w-2 h-7 bg-black rounded"></div>
                              <div className="w-2 h-7 bg-black rounded"></div>
                            </div>
                          ) : (
                            <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent border-solid ml-1"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full min-h-screen flex-col justify-center py-8 mt-20">
          <div className="container mx-auto max-w-7xl">
            <div
              style={{
                transform: headingTransform,
                opacity: headingOpacity,
                transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
              }}
            >
              <h1 className="font-normal text-white leading-tight">
                Cinematic Films For{" "}
                <span
                  className="bg-gradient-to-b from-[#BBAEB9] to-[#6B41FF] bg-clip-text text-transparent px-4 py-2 inline-block rounded-2xl"
                >
                  Brands
                </span>
                <br />
                That Value Clear Communication.
              </h1>
            </div>

            <div className="mt-2 relative min-h-[600px]">
              <div
                className="w-full lg:w-1/2"
                style={{
                  transform: paragraphTransform,
                  transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  position: scrollProgress > 0.3 ? "absolute" : "relative",
                  top: scrollProgress > 0.3 ? "calc(50% + 170px)" : "auto",
                  left: scrollProgress > 0.3 ? "50%" : "auto",
                  transform:
                    scrollProgress > 0.3
                      ? "translateX(-100%)"
                      : paragraphTransform,
                }}
              >
                <p className="text-white/80 mb-2 max-w-lg">
                  You'll only receive updates on new templates <br />
                  no spam, just what you signed up for.
                </p>
                <div className="flex gap-5">
                  <Button className="text-black bg-white rounded-3xl py-2 px-8 font-semibold">
                    Plan a Project
                  </Button>
                  <Button className="text-white bg-black rounded-3xl py-2 px-8 font-semibold border border-white">
                    Watch Work
                  </Button>
                </div>
              </div>

              <div
                className="absolute top-[40%] left-1/2 pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  opacity: centerImageOpacity,
                  transform: `translate(-50%, -50%) scale(${centerImageScale})`,
                  transition: "opacity 0.2s ease, transform 0.10s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="relative w-[500px] h-[340px]">
                  <video
                    key={currentSlideIndex}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={slides[currentSlideIndex % slides.length].video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
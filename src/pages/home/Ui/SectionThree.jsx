"use client";

import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img2.png";
import img3 from "../../../assets/images/home/img3.png";
import img4 from "../../../assets/images/home/img4.png";
import Button from "@/components/Button";

export default function SelectedWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);
  const [videoModeIndex, setVideoModeIndex] = useState(-1);

  const works = [
    {
      title: "Four Billion Meals",
      subtitle: "CSR Film",
      img: img1,
    },
    {
      title: "Inside Tesco",
      subtitle: "Corporate Culture Film",
      img: img2,
    },
    {
      title: "One Million Trees",
      subtitle: "Environmental CSR Film",
      img: img3,
    },
    {
      title: "High Stakes",
      subtitle: "Event Films",
      img: img4,
    },
  ];

  const videoUrls = {
    0: "https://your-video-url-for-four-billion-meals.mp4",
    1: "https://your-video-url-for-inside-tesco.mp4",
    2: "https://your-video-url-for-one-million-trees.mp4",
    3: "https://your-video-url-for-high-stakes.mp4",
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  const touchStart = (index) => (event) => {
    setCurrentSlide(index);
    setStartPos(getPositionX(event));
    setIsDragging(true);
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentSlide < works.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (movedBy > 50 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTranslatePosition();
  };

  const setTranslatePosition = () => {
    setCurrentTranslate(currentSlide * -40);
    setPrevTranslate(currentSlide * -40);
  };

  useEffect(() => {
    setTranslatePosition();
  }, [currentSlide]);

  return (
    <section className="bg-[#C7D5D8] lg:p-8 md:p-6 p-4 rounded-2xl container">
      <div
        className="md:max-w-7xl mx-auto rounded-3xl bg-[#E3E9E9] rounded-5xl
                     px-8 py-6 md:py-12 "
      >
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center
                        md:mb-12 mb-6"
        >
          <div>
            <p
              className="text-[#000000] text-center md:text-left font-extralight
                         uppercase tracking-wider mb-2"
            >
              Crafting Stories That Inspire, Engage and Transform.
            </p>
            <h2 className="font-semibold text-[#0E0E0F] text-center md:text-left">
              SELECTED WORK
            </h2>
          </div>

         <Link href="">
          <Button
            className="bg-black sm:w-[30%] w-full lg:w-auto text-white  lg:py-4 py-2 lg:px-8 
                            rounded-full font-medium
                          hover:bg-gray-800 transition flex items-center justify-center 
                            gap-3 mt-4 md:mt-0
                            bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#666666_360deg)] 
                            hover:bg-[conic-gradient(from_180deg_at_50%_50%,#111111_180deg,#777777_360deg)]"
          >
            Watch work
            <Play className="w-5 h-5" />
          </Button>
         </Link>
        </div>

        {/* Mobile Swipe Slider  */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex touch-pan-x"
            style={{
              transform: `translateX(${currentSlide * -100}%)`,
              transition: isDragging ? "none" : "transform 300ms ease-out",
            }}
            onTouchStart={touchStart(currentSlide)}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            onMouseDown={touchStart(currentSlide)}
            onMouseMove={touchMove}
            onMouseUp={touchEnd}
            onMouseLeave={() => {
              if (isDragging) touchEnd();
            }}
          >
            {works.map((work, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="group cursor-pointer">
                  <div
                    className="relative overflow-hidden rounded-3xl h-[210px] w-full mx-auto px-1 cursor-pointer"
                    onClick={() => setVideoModeIndex(index)} // ← Click to open video
                  >
                    {/* Show Image by default */}
                    {videoModeIndex !== index && (
                      <Image
                        src={work.img}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        draggable="false"
                      />
                    )}

                    {/* Show Video when clicked */}
                    {videoModeIndex === index && (
                      <div className="absolute inset-0 bg-black">
                        <video
                          src={videoUrls[index]}
                          autoPlay
                          muted={false}
                          controls={false}
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />

                        {/* Close Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // prevent triggering parent click
                            setVideoModeIndex(-1);
                          }}
                          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80
                                  text-white w-10 h-10 rounded-full flex items-center justify-center
                                   text-2xl font-light "
                        >
                          ×
                        </button>
                      </div>
                    )}

                    {/* Play Icon Overlay (only show when NOT in video mode) */}
                    {videoModeIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                          <Play
                            className="w-10 h-10 text-black ml-1"
                            fill="black"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-gray-900">{work.title}</h3>
                    {work.subtitle && (
                      <p className="text-gray-600 mt-1">{work.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-gray-900 w-2" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop 2x2 Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 ">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className="relative overflow-hidden rounded-3xl aspect-video
                           w-full lg:h-100 md:h-50 cursor-pointer"
                onClick={() => setVideoModeIndex(index)}
              >
                {/* Image */}
                {videoModeIndex !== index && (
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {/* Video */}
                {videoModeIndex === index && (
                  <div className="absolute inset-0 bg-black">
                    <video
                      src={videoUrls[index]}
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoModeIndex(-1);
                      }}
                      className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Play Icon (only when image is shown) */}
                {videoModeIndex !== index && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play
                        className="w-10 h-10 text-black ml-1"
                        fill="black"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center md:text-left">
                <h6 className="font-semibold text-gray-900">{work.title}</h6>
                {work.subtitle && (
                  <p className="text-gray-600 font-medium mt-1">
                    {work.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

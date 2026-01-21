"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img2.png";
import img3 from "../../../assets/images/home/img3.png";
import img4 from "../../../assets/images/home/img4.png";

const SelectedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const videoRefs = useRef({});
  const sliderRef = useRef(null);

  const works = [
    { title: "Four Billion Meals", subtitle: "CSR Film", img: img1 },
    { title: "Inside Tesco", subtitle: "Corporate Culture Film", img: img2 },
    { title: "High", subtitle: "Environmental CSR Film", img: img3 },
    { title: "One Million Trees", subtitle: "Status Coco Films", img: img4 },
  ];

  const videoUrls = {
    0: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    1: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    2: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  };

  const goFullscreen = (videoEl) => {
    if (!videoEl) return;
    if (videoEl.requestFullscreen) videoEl.requestFullscreen();
    else if (videoEl.webkitRequestFullscreen) videoEl.webkitRequestFullscreen();
    else if (videoEl.mozRequestFullScreen) videoEl.mozRequestFullScreen();
    else if (videoEl.msRequestFullscreen) videoEl.msRequestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  const handleCloseVideo = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (document.fullscreenElement) exitFullscreen();
    setPlayingIndex(null);
  };

  const handlePlayInline = (index) => setPlayingIndex(index);

  const handlePlayFullscreen = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      const video = videoRefs.current[index];
      if (video) goFullscreen(video);
    }, 50);
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const scrollLeft = index * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateSlide = () => {
      const idx = Math.round(slider.scrollLeft / slider.offsetWidth);
      setCurrentSlide(idx);
    };

    slider.addEventListener("scroll", updateSlide);
  
    setTimeout(updateSlide, 100);

    return () => slider.removeEventListener("scroll", updateSlide);
  }, []);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    const events = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
    events.forEach((ev) => document.addEventListener(ev, handleFsChange));
    return () => events.forEach((ev) => document.removeEventListener(ev, handleFsChange));
  }, []);

  return (
    <div className=" bg-white px-6 py-4 md:px-12 lg:px-15">
      <div className="max-w-7xl mx-auto">
      
        <div className="sm:flex sm:justify-between sm:items-start sm:mb-6">
          <div>
            <span className="hidden sm:block font-geist mt-8 md:text-8xl text-[#26164F] font-black tracking-tight">
              SELECTED <br /> WORK
            </span>
            <span className="text-3xl font-geist text-center sm:hidden block text-[#26164F] font-black tracking-tight">
              SELECTED WORK
            </span>
          </div>
          <div className="sm:text-right sm:mt-32 text-gray-600 sm:max-w-xs leading-relaxed">
            <p className="block sm:hidden mt-2 text-center">
              Whitworth Media Proudly is a dedicated film studio specializing
            </p>
            <p className="sm:block hidden">Whitworth Media </p>
            <p className="sm:block hidden">Proudly is a dedicated</p>
            <p className="sm:block hidden">film studio specializing</p>
          </div>
        </div>

        <div className="w-full h-px bg-black mt-4" />
        <p className="mt-4 text-gray-700">Latest Work</p>

        {/* MOBILE CAROUSEL - improved touch handling */}
        <div className="md:hidden mt-3 -mx-6 overflow-hidden">
          <div
            ref={sliderRef}
            className="
              flex overflow-x-auto snap-x snap-proximity
              -webkit-overflow-scrolling-touch
              touch-pan-x overscroll-x-contain
              scrollbar-hide
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {works.map((work, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-start px-6 box-border"
              >
                <div
                  className="bg-gray-200 rounded-3xl p-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    {playingIndex === index ? (
                      <>
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={videoUrls[index]}
                          autoPlay
                          controls
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleCloseVideo(index)}
                          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light pointer-events-auto"
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <Image
                        src={work.img}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    {playingIndex !== index && (
                      <>
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40 pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110 pointer-events-auto">
                            <button
                              onClick={() => handlePlayInline(index)}
                              className="w-full h-full flex items-center justify-center"
                            >
                              <Play className="w-7 h-7 text-black ml-1" fill="black" />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-between items-center px-2">
                    <div>
                      <h6 className="text-lg font-semibold text-black">{work.title}</h6>
                      <p className="text-sm text-gray-600">{work.subtitle}</p>
                    </div>
                    <button
                      onClick={() => handlePlayFullscreen(index)}
                      className="px-5 py-2 bg-black text-white text-xs rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium whitespace-nowrap"
                    >
                      WATCH NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-3  pb-1">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#26164F] scale-125"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid - unchanged */}
        <div className="hidden md:grid grid-cols-2 mt-16 gap-6">
          {works.map((work, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div
                className="bg-gray-200 rounded-3xl p-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  {playingIndex === index ? (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={videoUrls[index]}
                        autoPlay
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleCloseVideo(index)}
                        className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light"
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <Image
                      src={work.img}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

              {playingIndex !== index && (
                      <>
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayInline(index);
                            }}
                            className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                          >
                            <Play className="w-7 h-7 text-black ml-1" fill="black" />
                          </button>
                        </div>
                      </>
                    )}
                </div>

                <div className="flex justify-between items-center px-2">
                  <div>
                    <h6 className="text-lg font-semibold text-black">{work.title}</h6>
                    <p className="text-sm text-gray-600">{work.subtitle}</p>
                  </div>

                  <button
                    onClick={() => handlePlayFullscreen(index)}
                    className="px-5 py-2 bg-black text-white text-xs rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium whitespace-nowrap"
                  >
                    WATCH NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
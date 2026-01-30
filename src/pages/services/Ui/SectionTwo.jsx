"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import services from "@/assets/images/services/services.jpg";
import Button from "@/components/Button";
import ModalForm from "@/components/Form/ModalForm";
import { createPortal } from "react-dom";

const SectionTwo = () => {

  const [openPlanModal, setOpenPlanModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying) {
          video.pause();
          video.muted = true;
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.unobserve(video);
  }, [isPlaying]);

  return (
    <>
      <div className="container sm:flex sm:justify-between py-4">
        <div>
          <span className="hidden sm:block font-geist text-[76px] lg:text-8xl text-[#26164F]
                              font-black tracking-tight uppercase">
            what we do
          </span>
          <span className="text-3xl font-geist text-center sm:hidden block text-[#26164F] 
                             font-black tracking-tight uppercase">
            what we do
          </span>
        </div>
        <div className="opacity-80">
          <p className="block sm:hidden mt-2 text-center">
            Whitworth Media Proudly is a dedicated film studio specializing
          </p>
          <div className="sm:block hidden">
            <p>Whitworth Media </p>
            <p>Proudly is a dedicated</p>
            <p>film studio specializing</p>
          </div>
        </div>
      </div>

      <div className="container h-px bg-black" />
      <div className="md:mb-6 mb-2 md:mt-4 mt-2">
        <p className="mt-4 text-gray-700 container">Services</p>
      </div>

      <section className="container ">
        <div className="flex lg:flex-row flex-col gap-4 w-full h-auto">
          <div className="lg:w-[40%] w-full relative group">
            <video
              ref={videoRef}
              autoPlay
              muted={!isPlaying}
              loop
              playsInline
              className="w-full h-[460px] object-cover rounded-3xl"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/home/New.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10
                ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}
              `}
              onClick={togglePlayPause}
            >
              <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black fill-black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1 fill-black" />
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] w-full">
            <h5 className="text-[#24144C] text-center lg:text-left uppercase">
              Corporate Films
            </h5>
            <p>
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>
            <p className="mt-2">
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>

            <div className="mt-2 w-full flex flex-col lg:flex-row">
              <div className=" w-full grid grid-cols-1 sm:grid-cols-3 text-left pb-4">
                {/* Stat 1 */}
                <div className="relative px-4">


                  <p className=" font-bold text-gray-900 sm:mt-3 mt-1">Deliverables</p>
                  <ul className="sm:mt-4 mt-2 text-gray-600 leading-relaxed list-disc pl-5">
                    <li>Pre-production planning & scripting</li>
                    <li>Professional cinematography</li>
                    <li>Advanced post-production editing</li>
                  </ul>
                </div>

                {/* Stat 2 */}
                <div className="relative px-4">


                  <p className=" font-bold text-gray-900 mt-3">Add‑ons</p>
                  <ul className="sm:mt-4 mt-2 text-gray-600 leading-relaxed list-disc pl-5">
                    <li>Pre-production planning & scripting</li>
                    <li>Professional cinematography</li>
                    <li>Advanced post-production editing</li>
                  </ul>
                </div>

                {/* Stat 3 */}
                <div className="relative px-4">


                  <p className=" font-bold text-gray-900 mt-3">Budget</p>
                  <ul className="sm:mt-4 mt-2 text-gray-600 leading-relaxed list-disc pl-5">
                    <li>Pre-production planning & scripting</li>
                    <li>Professional cinematography</li>
                    <li>Advanced post-production editing</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <Button onClick={() => setOpenPlanModal(true)}
                    className="uppercase lg:w-auto px-10 py-2 border-4 w-full hover:bg-gray-200">
                    plan a project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {openPlanModal &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
              onClick={() => setOpenPlanModal(false)} // optional: close on backdrop click
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
      </section>
    </>
  );
};

export default SectionTwo;
"use client";

import { useEffect, useRef,useState} from "react";
import Image from "next/image";
import sectionSixGif from "../../../assets/videos/home/section-six.gif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./../../../components/Button/index";
import ModalForm from "../../../components/Form/ModalForm";
import { createPortal } from "react-dom";
gsap.registerPlugin(ScrollTrigger);

const SectionSix = () => {

  const itemsRef = useRef([]);
  const leftContentRef = useRef(null);
  const titleRef = useRef(null);
 const [openPlanModal, setOpenPlanModal] = useState(false);
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
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    itemsRef.current.forEach((item) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h3
        ref={titleRef}
        className="text-center lg:text-left  text-[#271751] relative z-10 leading-tight"
      >
        WHY WILMARCS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:-mt-24 -mt-18 gap-3">
        <div
          ref={leftContentRef}
          className="lg:py-56 py-20 text-center lg:text-left"
        >
          <p className="leading-tight lg:mb-8 mb-4">
            We combine artistry and technical expertise to deliver visually
            stunning films. Every film is custom-made to align with your brand
            and communication goals. Our structured process ensures that you're
            always in the loop and that your film is delivered on time and on
            budget. With years of experience in corporate, CSR, and event
            filmmaking, our team understands how to craft powerful stories that
            resonate with your audience.
          </p>

          <Button onClick={() => setOpenPlanModal(true)}
            className="text-white px-8 py-2 md:py-4 md:px-10 rounded-full font-medium transition
                       bg-[conic-gradient(from_90deg_at_50%_50%,#201147_0deg,#7356BC_360deg)]
                       hover:bg-[conic-gradient(from_360deg_at_50%_50%,#7356BC_0deg,#201147_90deg)]"
          >
            Plan A Project
          </Button>
        </div>

        <div className="flex items-center justify-center -mt-14 lg:mt-0">
          <Image
            src={sectionSixGif}
            alt="Why Wilmarcs visual"
            width={551}
            height={900}
            className="w-full  h-auto lg:h-[700px] object-cover rounded-2xl shadow-2xl"
            unoptimized
            priority
          />
        </div>

        <div className="lg:py-28 py-12 lg:-ml-12 ml-0 ">
          {[
            "Reliable timelines",
            "Founder-led direction",
            "Corporate-friendly workflows",
            "Story-first approach",
            "Cinematic visuals",
          ].map((text, index) => (
            <h6
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="bg-white p-5 drop-shadow-xl mt-3 first:mt-0  font-semibold"
            >
              {text}
            </h6>
          ))}
        </div>
      </div>
       {openPlanModal &&
                              createPortal(
                                <div
                                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
                                  onClick={() => setOpenPlanModal(false)} 
                                >
             <div
              className="bg-white w-full max-w-5xl h-[90vh]
                         p-6 md:p-8
                         rounded-2xl relative
                         overflow-hidden flex items-center"
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
    </div>
  );
};

export default SectionSix;

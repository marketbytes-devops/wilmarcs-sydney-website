"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionTwoGif from "../../../assets/videos/home/gif.gif";
import Image from "next/image";
import Button from "./../../../components/Button/index";
import ModalForm from "../../../components/Form/ModalForm";
import { createPortal } from "react-dom";

const SectionTwo = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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

  // Detect if screen is desktop size (lg breakpoint = 1024px)
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <motion.h2
        className="text-center font-semibold leading-tight uppercase text-[#25154E]"
        initial={isDesktop ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
        whileInView={isDesktop && hasScrolled ? { opacity: 1, y: 0 } : false}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Our approach to filmmaking is rooted in structured and intentional
        storytelling.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 gap-3">
        <motion.div
          initial={isDesktop ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
          whileInView={isDesktop && hasScrolled ? { opacity: 1, x: 0 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:text-left text-center"
        >
          <p className="font-extralight leading-light lg:leading-tight lg:mt-32 sm:mt-6 mt-4">
            At Wilmarcs Motion Pictures, we are passionate about creating
            meaningful and impactful films that tell your story with precision,
            creativity, and intention. Based in Sydney, we specialize in
            crafting corporate, CSR (Corporate Social Responsibility), and event
            films that leave a lasting impression on your audience.
          </p>
        </motion.div>

        <motion.div
          initial={isDesktop ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          whileInView={isDesktop && hasScrolled ? { opacity: 1, scale: 1 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Image
            src={SectionTwoGif}
            alt="Animated section visual"
            width={800}
            height={500}
            className="w-full  h-auto lg:h-[454px]  mt-6 object-cover rounded-2xl shadow-2xl"
            unoptimized
            priority
          />
        </motion.div>

        <motion.div
          initial={isDesktop ? { opacity: 0, x: 100 } : { opacity: 1, x: 0 }}
          whileInView={isDesktop && hasScrolled ? { opacity: 1, x: 0 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:text-left text-center"
        >
          <p className="font-thin leading-light  lg:leading-tight lg:mt-32 sm:mt-6 mt-4">
            Our approach to filmmaking is rooted in structured and intentional
            storytelling. Every frame is meticulously planned, every message
            carefully considered, and every story told with purpose. Whether
            you're looking to showcase your brand, highlight your social
            responsibility efforts, or capture the essence of your event, we are
            here to help you connect with your audience on a deeper level.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center items-center md:mt-8 mt-4"
        initial={isDesktop ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
        whileInView={isDesktop && hasScrolled ? { opacity: 1, y: 0 } : false}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Button onClick={() => setOpenPlanModal(true)}
          className="text-white px-8 py-2 md:py-4 md:px-10 rounded-full font-medium 
                    transition-[background-position] duration-700 ease-in-out
                     bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%]
             bg-[conic-gradient(from_90deg_at_50%_50%,#201147_0deg,#7356BC_360deg)]
             hover:bg-[conic-gradient(from_360deg_at_50%_50%,#7356BC_0deg,#201147_90deg)]"
        >
          Plan A Project
        </Button>

      </motion.div>

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

export default SectionTwo;

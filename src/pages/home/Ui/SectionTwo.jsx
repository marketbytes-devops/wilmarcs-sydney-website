"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionTwoGif from "../../../assets/videos/home/gif.gif";
import Image from "next/image";

const SectionTwo = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

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
    <div className="max-w-[85%] mx-auto">
      <motion.h1
        className="text-center text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        whileInView={hasScrolled ? { opacity: 1, y: 0 } : false}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Our approach to filmmaking is rooted in structured and intentional storytelling.
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={hasScrolled ? { opacity: 1, x: 0 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-12 md:py-28 text-left"
        >
          <p className="text-lg leading-relaxed">
            At Wilmarcs Motion Pictures, we are passionate about creating meaningful and impactful
            films that tell your story with precision, creativity, and intention. Based in Sydney,
            we specialize in crafting corporate, CSR (Corporate Social Responsibility), and event
            films that leave a lasting impression on your audience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={hasScrolled ? { opacity: 1, scale: 1 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Image
            src={SectionTwoGif}
            alt="Animated section visual"
            width={800}
            height={500}
            className="w-full max-w-full h-auto md:h-96 object-cover rounded-2xl shadow-2xl"
            unoptimized
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={hasScrolled ? { opacity: 1, x: 0 } : false}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-12 md:py-28 text-left"
        >
          <p className="text-lg leading-relaxed">
            Our approach to filmmaking is rooted in structured and intentional storytelling.
            Every frame is meticulously planned, every message carefully considered, and every
            story told with purpose. Whether you're looking to showcase your brand, highlight
            your social responsibility efforts, or capture the essence of your event, we are here
            to help you connect with your audience on a deeper level.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center items-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={hasScrolled ? { opacity: 1, y: 0 } : false}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <button className="bg-[#201147] text-white py-4 px-10 rounded-full font-medium hover:bg-[#271751] transition">
          Plan A Project
        </button>
      </motion.div>
    </div>
  );
};

export default SectionTwo;
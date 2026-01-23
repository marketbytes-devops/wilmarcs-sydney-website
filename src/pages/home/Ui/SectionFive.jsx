"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionFive() {
  const processes = [
    {
      title: "Discovery",
      description: "The journey begins with understanding your brand, your goals, and the story you want to tell. We take the time to collaborate with you, ensuring we grasp the essence of your message."
    },
    {
      title: "Script & Structure",
      description: "Once we understand your goals, we move into crafting the narrative. We write a script that aligns with your brand's voice, ensuring the message is both engaging and effective."
    },
    {
      title: "Production",
      description: "With the script and structure in place, our production team takes the reins."
    },
    {
      title: "Edit",
      description: "Post-production is where the magic happens. We edit the footage, adding graphics, sound, and any additional elements that elevate the final product."
    },
    {
      title: "Delivery",
      description: "Once the film is complete, we deliver the final product in the format you need. Whether it's for social media, a website, or an event presentation, we ensure it's optimized for your distribution channels."
    }
  ];

  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 30%"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className=" container mx-auto">
      <h3 className=" text-[#24144C] text-center lg:text-left
                    font-semibold leading-tight mb-5 tracking-tight">
        PROCESS PREVIEW
      </h3>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-24">
          <div className="lg:sticky lg:top-20 h-fit">
            <p className="font-extralight lg:py-4 py-0 text-gray-600 leading-relaxed text-center lg:text-left">
              We know that effective communication begins with a well-planned process. Our workflow ensures every project is executed with care, creativity, and efficiency.
            </p>
          </div>
          <div ref={timelineRef} className="relative pt-3  overflow-hidden">
            <div className="absolute left-2 top-8 bottom-8 w-0.5 bg-gray-300 z-10" />
            <motion.div
              style={{ height }}
              className="absolute left-2 top-8 w-0.5 bg-[#1a1a2e] origin-top z-20"
            />
            <div className="relative z-30">
              {processes.map((process, index) => (
                <div key={index} className="flex gap-8 items-start mb-0 lg:mb-12 last:mb-0">
                  <div className="w-4 h-4 bg-[#1a1a2e] rounded-full shrink-0 mt-2 relative z-30" />
                  <div className="flex-1 mb-4">
                    <h6 className=" font-semibold text-gray-900 mb-4">
                      {process.title}
                    </h6>
                    <p className="font-extralight text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
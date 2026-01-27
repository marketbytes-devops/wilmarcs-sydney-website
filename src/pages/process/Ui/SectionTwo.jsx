"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import binoculars from "@/assets/videos/process/binoculars.gif";
import puzzle from "@/assets/videos/process/puzzle.gif";
import todo from "@/assets/videos/process/todo.gif";
import womanpopcorn from "@/assets/videos/process/womanpopcorn.gif";

const data = [
  {
    step: "STEP 1",
    title: "DISCOVERY",
    gif: binoculars,
    para:
      "The journey begins with understanding your brand, your goals, and the story you want to tell. We take the time to collaborate with you, ensuring we grasp the essence of your message.",
  },
  {
    step: "STEP 2",
    title: "SCRIPT AND STRUCTURE",
    gif: puzzle,
    para:
      "Once we understand your goals, we move into crafting the narrative. We write a script that aligns with your brand's voice, ensuring the message is both engaging and effective.",
  },
  {
    step: "STEP 3",
    title: "PRODUCTION",
    gif: todo,
    para:
      "With the script and structure in place, our production team takes the reins.",
  },
  {
    step: "STEP 4",
    title: "EDIT",
    gif: womanpopcorn,
    para:
      "Post-production is where the magic happens. We edit the footage, adding graphics, sound, and any additional elements that elevate the final product.",
  },
  {
    step: "STEP 5",
    title: "DELIVERY",
    gif: womanpopcorn,
    para:
      "Once the film is complete, we deliver the final product in the format you need. Whether it's for social media, a website, or an event presentation, we ensure it's optimized for your distribution channels.",
  },
];

export default function ProcessStack() {
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  const cards = cardsRef.current;

  if (cards.length > 0) {
    const cardGap = 82;

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top top+=${80 + index * cardGap}`,
        endTrigger: cards[cards.length - 1],
        end: `bottom top+=${80 + index * cardGap}`,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: `top top+=${80 + (index + 1) * cardGap}`,
            end: `top top+=${80 + index * cardGap}`,
            scrub: true,
          },
        });
      }
    });
  }

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    window.removeEventListener("resize", checkMobile);
  };
}, [isMobile]);

  return (
    <section className={`relative ${isMobile ? 'pb-0' : 'pb-[680vh] sm:pb-[80vh] lg:pb-[100vh] md:pb-[60vh]'}`}>
      {data.map((item, i) => {
        const isLastCard = i === data.length - 1;

        return (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`${isMobile ? 'mb-6 sm:mb-8' : 'md:pb-10 lg:pb-4 pb-0'}`}
            style={{ zIndex: i + 1 }}
          >
            <div className="container ">
              <div
                className={`rounded-[20px] sm:rounded-[28px] md:rounded-[36px] lg:rounded-[28px] 
                          px-4 sm:px-6 md:px-8 lg:px-10 
                          py-8 sm:py-10 md:py-12 lg:py-10
                          grid grid-cols-1 lg:grid-cols-[60%_40%] 
                         gap-6 sm:gap-8 lg:gap-10 ${isLastCard ? "text-white" : "text-black"
                  }`}
                style={{
                  background: isLastCard
                    ? "linear-gradient(135deg, #694DAB 0%, #2F1E5B 100%)"
                    : "#ECECEC",
                }}
              >
                {/* LEFT */}
                <div className=" px-2 lg:px-4 order-2 lg:order-1 ">
                  <span
                    className={`inline-block border-2 rounded-full 
                              px-4 sm:px-8 md:px-12 lg:px-18
                              py-1 sm:py-1.5 text-xs sm:text-sm md:text-base ${isLastCard
                        ? "border-white text-white"
                        : "border-black text-black"
                      }`}
                  >
                    {item.step}
                  </span>

                  <h1 className="mt-3 sm:mt-4 md:mt-5 lg:mt-2 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {item.title}
                  </h1>

                  <p
                    className={`mt-2 sm:mt-3 md:mt-4 leading-relaxed text-sm sm:text-base ${isLastCard ? "text-white/80" : "text-gray-600"
                      }`}
                  >
                    {item.para}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full mx-auto lg:mx-0 order-1 lg:order-2">
               <img
  src={item.gif.src}
  alt={item.title}
  className="w-full h-auto rounded-lg"
/>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
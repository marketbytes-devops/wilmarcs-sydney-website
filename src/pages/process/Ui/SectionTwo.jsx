"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import binoculars from "@/assets/videos/process/binoculars.gif";
import puzzle from "@/assets/videos/process/puzzle.gif";
import todo from "@/assets/videos/process/todo.gif";
import womanpopcorn from "@/assets/videos/process/womanpopcorn.gif";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const cards = cardsRef.current;
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
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative  pb-[90vh] xl:pb-[100vh] ">
      {data.map((item, i) => {
       
        const isLastCard = i === data.length - 1;

        return (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="md:pb-10 lg:pb-20 pb-0"
            style={{ zIndex: i + 1 }}
          >
            <div className="container ">
              <div
                className={`rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] px-6 sm:px-8
                          lg:px-10 py-8 sm:py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-[60%_40%] 
                          items-center gap-6 sm:gap-8 ${
                  isLastCard ? "text-white" : "text-black"
                }`}
                style={{
                  background: isLastCard
                    ? "linear-gradient( 135deg, #694DAB 0%, #2F1E5B 100%)"
                    : "#ECECEC",
                }}
              >
                {/* LEFT */}
                <div className="max-w-xl px-2 lg:-mt-26">
                  <span
                    className={`inline-block border-2 rounded-full px-6 sm:px-12 lg:px-18
                              py-1 text-sm sm:text-base ${
                      isLastCard
                        ? "border-white text-white"
                        : "border-black text-black"
                    }`}
                  >
                    {item.step}
                  </span>

                  <h1 className="mt-4 sm:mt-6 leading-tight">{item.title}</h1>

                  <p
                    className={`mt-3 sm:mt-4 leading-relaxed ${
                      isLastCard ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {item.para}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full max-w-[390px] mx-auto lg:mx-0 lg:w-[390px]">
                  <img src={item.gif.src} alt={item.title} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
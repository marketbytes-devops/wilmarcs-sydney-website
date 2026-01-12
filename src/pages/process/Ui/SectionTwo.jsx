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
  },
  {
    step: "STEP 2",
    title: "STRATEGY",
    gif: puzzle,
  },
  {
    step: "STEP 3",
    title: "DISCOVERY",
    gif: todo,
  },
  {
    step: "STEP 4",
    title: "STRATEGY",
    gif: womanpopcorn,
  },
];


export default function ProcessStack() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="relative">
      {data.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`h-screen flex items-center ${item.bg}`}
          style={{ zIndex: i + 1 }}
        >
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="rounded-[48px] bg-[#ECECEC] p-16 flex items-center justify-between gap-20">
              
              {/* LEFT */}
              <div className="max-w-xl">
                <span className="inline-block border-2 border-black rounded-full px-8 py-2 mb-8">
                  {item.step}
                </span>

                <h2 className="text-[72px] font-bold mb-6">
                  {item.title}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>

             {/* RIGHT */}
<div className="w-[420px]">
  <img src={item.gif.src} alt={item.title} />

</div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

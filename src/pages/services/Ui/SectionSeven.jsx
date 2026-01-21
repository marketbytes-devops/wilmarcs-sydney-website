"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Discovery",
  "Script & Structure",
  "Production",
  "Edit",
  "Delivery",
];

export default function ProcessPreview() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop animation only — keep as it was
      gsap.from(itemsRef.current, {
        y: -60,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      // → Removed the mobile animation block completely
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container px-4">
      <h4 className="font-semibold text-[#24144C] mb-4 text-center md:text-left uppercase">
        PROCESS PREVIEW
      </h4>

      {/* DESKTOP LAYOUT - Hidden on mobile */}
      <div className="hidden md:flex items-start justify-center gap-24 max-w-5xl mx-auto mb-8">
        {steps.map((step, i) => (
          <div
            key={step}
            ref={(el) => (itemsRef.current[i] = el)}
            className="flex items-start gap-4"
            style={{ marginTop: i * 40 }}
          >
            {/* LEFT LINE */}
            <div className="h-48 w-px bg-[#8D8D8D]" />

            {/* CONTENT */}
            <h6 className="font-medium text-[#26164F] whitespace-nowrap mt-20">
              {step}
            </h6>

            {/* ADD LINE ONLY AFTER DELIVERY */}
            {i === steps.length - 1 && (
              <div className="h-44 w-px bg-gray-400 mt-10" />
            )}
          </div>
        ))}
      </div>

      {/* MOBILE LAYOUT - Hidden on desktop - now static (no refs/animation) */}
      <div className="md:hidden flex mb-6 sm:mb-0">
        <div className="relative flex">
          {/* Big Vertical Line */}
          <div className="w-px bg-[#8D8D8D] absolute left-0 top-0 bottom-0" />

          {/* Steps List */}
          <div className="flex flex-col gap-6 pl-8">
            {steps.map((step, i) => (
              <div
                key={step}
                // Removed ref — no longer needed
                className="flex items-center gap-3"
              >
                {/* Small horizontal line connecting to main line */}
                <div className="w-4 h-px bg-[#8D8D8D] absolute left-0" />
                
                {/* Number and text */}
                <span className="font-medium text-[#26164F]">
                  {i + 1}. {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
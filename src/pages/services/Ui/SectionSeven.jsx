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
      gsap.from(itemsRef.current, {
        y: -60,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container">
      <h3 className="font-semibold text-[#24144C] mb-4">PROCESS PREVIEW</h3>

      <div className="flex items-start justify-center gap-24 max-w-5xl mx-auto mb-8">
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
              <div className="h-44 w-px bg-gray-400 mt-10 " />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

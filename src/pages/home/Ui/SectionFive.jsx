'use client';
 
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
gsap.registerPlugin(ScrollTrigger);
 
export default function ProcessPreview() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const indicatorRef = useRef(null);
  const stepsRef = useRef([]);
 
  const steps = [
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
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftContentRef.current,
        pinSpacing: false,
      });
 
      // Animate indicator and dots based on scroll
      stepsRef.current.forEach((step, index) => {
        if (!step) return;
 
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(indicatorRef.current, {
              y: index * 180,           
              duration: 0.5,
              ease: 'power2.out'
            });
 
            stepsRef.current.forEach((s, i) => {
              const dot = s.querySelector('.dot');
              if (i === index) {
                gsap.to(dot, {
                  scale: 1.25,
                  backgroundColor: '#24144C',
                  borderColor: '#24144C',
                  duration: 0.3
                });
              } else {
                gsap.to(dot, {
                  scale: 1,
                  backgroundColor: '#24144C',
                  borderColor: '#24144C',
                  duration: 0.3
                });
              }
            });
          },
          onEnterBack: () => {
            gsap.to(indicatorRef.current, {
              y: index * 180,
              duration: 0.5,
              ease: 'power2.out'
            });
 
            stepsRef.current.forEach((s, i) => {
              const dot = s.querySelector('.dot');
              if (i === index) {
                gsap.to(dot, {
                  scale: 1.25,
                  backgroundColor: '#111827',
                  borderColor: '#111827',
                  duration: 0.3
                });
              } else {
                gsap.to(dot, {
                  scale: 1,
                  backgroundColor: '#ffffff',
                  borderColor: '#d1d5db',
                  duration: 0.3
                });
              }
            });
          }
        });
      });
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  return (
    <div ref={sectionRef} className="relative min-h-screen bg-white py-10 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          {/* Fixed Left Side */}
          <div
            ref={leftContentRef}
            className="w-full lg:w-1/2 lg:h-screen flex items-center justify-center lg:justify-start lg:pr-10"
          >
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#24144C] mb-6 leading-tight">
                PROCESS PREVIEW
              </h1>
              <p className="text-gray-600 text-base  lg:text-lg leading-relaxed">
                We know that effective communication begins with a well-planned process. Our workflow ensures every project is executed with care, creativity, and efficiency.
              </p>
            </div>
          </div>
 
          {/* Scrollable Right Side – aligned to start at same top position */}
          <div
            ref={rightContentRef}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <div className="relative lg:pt-0 pt-4">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
             
              {/* Active Indicator Line */}
              <div
                ref={indicatorRef}
                className="absolute left-0 top-0 w-px bg-gray-900 h-[180px]"
                style={{ transformOrigin: 'top' }}
              ></div>
 
              {/* Steps */}
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={el => (stepsRef.current[index] = el)}
                  className="relative mb-8 lg:mb-20 pl-8"
                >
                  {/* Dot */}
                  <div
                    className="dot absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gray-300 bg-white transition-all duration-300"
                  ></div>
 
                  {/* Content */}
                  <div className="pl-2 lg:pl-12">
                    <h6 className="text-xl lg:text-2xl font-bold text-[#1A0F37] mb-4">
                      {step.title}
                    </h6>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {step.description}
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
 
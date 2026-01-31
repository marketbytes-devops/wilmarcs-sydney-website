'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import comicCon from '../../../assets/images/about/comiccon-india.png';
import cafeCoffeeDay from '../../../assets/images/about/cafe-coffee-day.png';
import samsung from '../../../assets/images/about/samsung.png';
import himalaya from '../../../assets/images/about/himalaya.png';
import paytm from '../../../assets/images/about/paytm.png';
import embassy from '../../../assets/images/about/embassy.png';

gsap.registerPlugin(ScrollTrigger);

export default function PlacesWeveBeen() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  const logos = [
    { src: comicCon, alt: 'Comic Con India' },
    { src: samsung, alt: 'Samsung' },
    { src: paytm, alt: 'Paytm' },
    { src: cafeCoffeeDay, alt: 'Cafe Coffee Day' },
    { src: himalaya, alt: 'Himalaya' },
    { src: embassy, alt: 'Embassy' },
  ];

  // Group into columns
  const columns = [
    [logos[0], logos[3]], // Comic Con, CCD
    [logos[1], logos[4]], // Samsung, Himalaya
    [logos[2], logos[5]], // Paytm, Embassy
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate lines growing downwards
      linesRef.current.forEach((line, index) => {
        if (!line) return;

        const lineInner = line.querySelector('.line-inner');
        const topDot = line.querySelector('.dot-top');
        const bottomDot = line.querySelector('.dot-bottom');

        // Line animation
        gsap.fromTo(lineInner,
          { height: 0 },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            }
          }
        );

        // Top dot animation
        gsap.fromTo(topDot,
          { scale: 0, backgroundColor: 'transparent' },
          {
            scale: 1,
            backgroundColor: '#24144C',
            duration: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              toggleActions: 'play reverse play reverse'
            }
          }
        );

        // Bottom dot animation - fills when line reaches bottom
        gsap.fromTo(bottomDot,
          { scale: 1, backgroundColor: '#ffffff', borderColor: '#d1d5db' },
          {
            scale: 1.2,
            backgroundColor: '#24144C',
            borderColor: '#24144C',
            duration: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'bottom center',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

          {/* Left Content */}
          <div className="lg:w-1/3 pt-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#24144C] mb-6 leading-tight uppercase">
              Places We've<br />Been Mentioned.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We've been recognised by some respected brands and publications for our work. Here are a few that have caught people's attention.
            </p>
          </div>

          {/* Right Content - Grid System */}
          <div className="lg:w-2/3 relative" ref={containerRef}>
            <div className="grid grid-cols-1 md:grid-cols-3">

              {/* Columns */}
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col items-center justify-around min-h-[400px] py-10 relative">
                  {col.map((logo, logoIndex) => (
                    <div key={logoIndex} className="h-32 flex items-center justify-center p-4">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              ))}

              {/* Vertical Lines Overlay - Desktop Only */}
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  ref={el => linesRef.current[index] = el}
                  className="hidden md:block absolute top-0 bottom-0 w-px"
                  style={{
                    left: index === 3 ? '100%' : `${(index / 3) * 100}%`,
                    // On mobile, this layout might break if we just do absolute positioning percentage.
                    // The grid cols trigger this.
                    // For pure mobile, maybe we stack? But user asked for "same like about us page" which usually implies desktop elegance.
                    // I'll hide these lines on mobile if needed or adjust.
                  }}
                >
                  {/* Background faint line */}
                  <div className="absolute inset-0 bg-gray-200"></div>

                  {/* Animated Fill Line */}
                  <div className="line-inner absolute top-0 left-0 w-full bg-[#24144C]"></div>

                  {/* Top Dot */}
                  <div className="dot-top absolute -top-1.5 -left-[5px] w-3 h-3 rounded-full border border-[#24144C] bg-[#24144C]"></div>

                  {/* Bottom Dot */}
                  <div className="dot-bottom absolute -bottom-1.5 -left-[5px] w-3 h-3 rounded-full border border-gray-300 bg-white"></div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
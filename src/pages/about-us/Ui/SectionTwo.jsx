'use client';

import React from 'react';

const SectionTwo = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Left: Dot + Who We Are – centered vertically only on desktop */}
        <div className="flex items-center gap-4 lg:h-full">
          <div className="w-5 h-5 bg-indigo-600 rounded-full flex-shrink-0"></div>
          <h6 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
            Who We Are
          </h6>
        </div>

        {/* Right: Heading + Paragraph */}
        <div className="flex flex-col justify-center lg:justify-start">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            We tell stories that move people.
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
            Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling. We believe that every project is an opportunity to create a narrative that resonates with your audience.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default SectionTwo;
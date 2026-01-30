'use client';

import React from 'react';

const SectionTwo = () => {
  return (
    <section className="container mx-auto sm:py-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[22%_1fr] gap-8 lg:gap-0">
        {/* Left: Dot + Who We Are */}
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:h-full lg:items-start lg:pt-2">
          <div className="w-5 h-5 bg-[#26164F] rounded-full flex-shrink-0"></div>
          <h6 className="font-semibold text-black whitespace-nowrap text-lg">
            Who We Are
          </h6>
        </div>

        {/* Right: Heading + Paragraph + Stats */}
        <div className="flex flex-col">
          {/* Header Section */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 leading-tight text-center lg:text-left text-3xl md:text-5xl">
              We tell stories that move people.
            </h2>
            <p className="mt-6 text-gray-600 max-w-4xl leading-relaxed text-center lg:text-left text-lg">
              Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling. We believe that every project is an opportunity to create a narrative that resonates with your audience.
            </p>
          </div>

          {/* Stats / Timeline Grid */}
          <div className="relative -right-1 grid grid-cols-1 lg:[grid-template-columns:30%_30%_30%_10%] gap-8 lg:gap-0 text-left">
            {/* Stat 1 */}
            <div className="relative px-6 lg:px-4">
              <div className="absolute -left-1 top-1 w-5 h-5 bg-[#8D8D8D] rounded-full"></div>
              <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

              <h6 className="font-extrabold text-gray-900 mt-2 md:mt-4 text-xl">
                A top creative company
              </h6>
              <p className="mt-2 md:mt-10 lg:mt-20 py-2 lg:py-5 text-gray-600 leading-relaxed">
                Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="relative px-6 lg:px-4">
              <div className="absolute -left-1 top-1 w-5 h-5 bg-[#8D8D8D] rounded-full"></div>
              <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

              <h6 className="font-extrabold text-gray-900 mt-2 md:mt-4 text-xl">
                300+ global<br /> partners
              </h6>
              <p className="mt-2 md:mt-10 lg:mt-20 py-2 lg:py-5 text-base text-gray-600">
                Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="relative px-6 lg:px-4">
              <div className="absolute -left-1 top-1 w-5 h-5 bg-[#8D8D8D] rounded-full"></div>
              <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D]"></div>

              <h6 className="font-extrabold text-gray-900 mt-2 md:mt-4 text-xl">
                80M+ client
              </h6>
              <p className="mt-2 md:mt-10 lg:mt-24 py-4 lg:py-8 text-gray-600 leading-relaxed">
                Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
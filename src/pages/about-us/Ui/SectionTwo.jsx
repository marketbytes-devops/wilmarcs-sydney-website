'use client';

import React from 'react';

const SectionTwo = () => {
  return (
    <section className="container mx-auto">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Left: Dot + Who We Are – centered vertically only on desktop */}
        <div className="mt-0 lg:mt-0 flex items-center lg:justify-start justify-center
                        gap-2 lg:gap-4 lg:h-full">
          <div className="w-5 h-5 bg-[#26164F] rounded-full flex-shrink-0"></div>
          <h6 className="font-semibold text-black whitespace-nowrap">
            Who We Are
          </h6>
        </div>

        {/* Right: Heading + Paragraph */}
        <div className="flex flex-col justify-center lg:justify-start ">
          <h2 className="font-bold -mt-5 lg:mt-0 text-gray-900 leading-tight text-center lg:text-left">
            We tell stories that move people.
          </h2>
          <p className="mt-2 lg:mt-6 text-gray-600 max-w-4xl leading-relaxed text-center lg:text-left">
            Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling. We believe that every project is an opportunity to create a narrative that resonates with your audience.
          </p>
        </div>
      </div>

       <div className="mt-2 w-full flex flex-col lg:flex-row">
        <div className='lg:w-[22%] w-0'></div>
        <div className="lg:w-[78%] w-full grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-0 text-left">
          {/* Stat 1 */}
          <div className="relative px-6 lg:px-4">
             <div className="absolute -left-1 top-1 w-5 h-5 bg-[#8D8D8D] rounded-full"></div>
            <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>
            
            <h6 className=" font-bold text-gray-900 mt-2 md:mt-4">
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

            <h6 className="font-extrabold text-gray-900 mt-2 md:mt-4">
              300+ global<br/> partners
            </h6>
            <p className="mt-2 md:mt-10 lg:mt-20 py-2 lg:py-5  text-base text-gray-600">
              Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="relative px-6 lg:px-4">
            <div className="absolute -left-1 top-1 w-5 h-5 bg-[#8D8D8D] rounded-full"></div>
            <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D]"></div>
            
            <h6 className="font-bold text-gray-900 mt-2 md:mt-4">
              80M+ client
            </h6>
            <p className="mt-2 md:mt-10 lg:mt-24 py-4 lg:py-8 text-gray-600 leading-relaxed">
              Wilmarcs Motion Pictures is a dedicated film studio specializing in structured and intentional storytelling.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SectionTwo;
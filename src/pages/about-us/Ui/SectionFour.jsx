"useclient";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import frame1 from "./../../../assets/images/about/frame1.png";
import frame2 from "./../../../assets/images/about/frame2.png";
import frame3 from "./../../../assets/images/about/frame3.png";
import frame4 from "./../../../assets/images/about/frame4.png";
import frame5 from "./../../../assets/images/about/frame5.png";

const SectionFour = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // 👈 2 slides visible
    slidesToScroll: 1, // 👈 move 1 slide at a time
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container rounded-3xl bg-[#C7D5D8] h-auto ">
        <div
          className="flex lg:flex-row flex-col justify-between items-center
                        w-full lg:px-8 lg:py-8 px-3 py-4 space-y-3 lg:space-y-0"
        >
          <div className="lg:w-[60%] w-full text-center lg:text-left">
            <h5 className="font-bold">BELIEFS</h5>
          </div>

          <div className="lg:w-[40%] w-full text-center lg:text-right">
            <p>
              Wilmarcs Motion Pictures is a dedicated film studio specializing
              in structured and intentional storytelling.
            </p>
          </div>
        </div>
        <div className="border border-[#838383] mx-8"></div>

        {/* Mobile Slider (below lg only) */}
        <div className="lg:hidden px-4 py-3">
          <Slider {...sliderSettings}>
            <div className="px-2">
              <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
                {/* Background image - stable, no transform on hover */}
                <Image
                  src={frame1}
                  alt="Film poster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                  priority={false} // ← change to true for above-the-fold posters
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                {/* Text container - moves up on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 p-2 text-white 
                            transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer"
                >
                  <span className="text-[18px] font-geist font-bold leading-tight drop-shadow-md">
                    Story first
                  </span>

                  <div
                    className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
                  >
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      Wilmarcs Motion Pictures is a dedicated film studio
                      specializing in structured and intentional storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden bg-black">
             
                <Image
                  src={frame2}
                  alt="Film poster"
                  fill
                  className="object-cover"
                  priority={false} 
                  sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
                  <span className="text-[18px] font-geist font-bold leading-tight drop-shadow-md">
                    Respect for people
                  </span>

                  <div
                    className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
                  >
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      Wilmarcs Motion Pictures is a dedicated film studio
                      specializing in structured and intentional storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
  
                <Image
                  src={frame3}
                  alt="Film poster"
                  fill
                  className="object-cover"
                  priority={false}
                  sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
                  <span className="text-[18px] font-geist font-bold leading-tight drop-shadow-md">
                    Simplicity wins
                  </span>

                  <div
                    className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
                  >
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      Wilmarcs Motion Pictures is a dedicated film studio
                      specializing in structured and intentional storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden bg-black">
        
                <Image
                  src={frame4}
                  alt="Film poster"
                  fill
                  className="object-cover"
                  priority={false} 
                  sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
                  <span className="text-[17px] font-geist font-bold leading-tight drop-shadow-md">
                    Professionalism is non-negotiable
                  </span>

                  <div
                    className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
                  >
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      Wilmarcs Motion Pictures is a dedicated film studio
                      specializing in structured and intentional storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
                <Image
                  src={frame5}
                  alt="Film poster"
                  fill
                  className="object-cover"
                  priority={false}
                  sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                {/* Text container - moves up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-3 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
                  <span className="text-[18px] font-geist font-bold leading-tight drop-shadow-md">
                    Delivery matters
                  </span>

                  <div
                    className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
                  >
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                      Wilmarcs Motion Pictures is a dedicated film studio
                      specializing in structured and intentional storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-2 p-8 justify-items-center">
          <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
            {/* Background image - stable, no transform on hover */}
            <Image
              src={frame1}
              alt="Film poster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
              priority={false}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            {/* Text container - moves up on hover */}
            <div
              className="absolute inset-x-0 bottom-0 p-2 text-white 
                            transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer"
            >
              <span className="text-[24px] font-geist font-bold leading-tight drop-shadow-md">
                Story first
              </span>

              <div
                className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
              >
                <p className=" text-gray-200 leading-relaxed drop-shadow-sm">
                  Wilmarcs Motion Pictures is a dedicated film studio
                  specializing in structured and intentional storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden bg-black">
            <Image
              src={frame2}
              alt="Film poster"
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
              <span className="text-[24px] font-geist font-bold leading-tight drop-shadow-md">
                Respect for people
              </span>

              <div
                className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
              >
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  Wilmarcs Motion Pictures is a dedicated film studio
                  specializing in structured and intentional storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
            <Image
              src={frame3}
              alt="Film poster"
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
              <span className="text-[24px] font-geist  font-bold leading-tight drop-shadow-md">
                Simplicity wins
              </span>

              <div
                className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
              >
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  Wilmarcs Motion Pictures is a dedicated film studio
                  specializing in structured and intentional storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden bg-black">
            <Image
              src={frame4}
              alt="Film poster"
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-2 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
              <span className="text-[24px] font-geist font-bold leading-tight drop-shadow-md">
                Professionalism is non-negotiable
              </span>

              <div
                className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
              >
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  Wilmarcs Motion Pictures is a dedicated film studio
                  specializing in structured and intentional storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative w-full mx-auto aspect-[220/477] overflow-hidden  bg-black">
            <Image
              src={frame5}
              alt="Film poster"
              fill
              className="object-cover"
              priority={false}
              sizes="(max-width: 1024px) 180px, (max-width: 1280px) 200px, 220px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-3 text-white transition-all duration-1500  ease-in-out group-hover:-translate-y-6 cursor-pointer">
              <span className="text-[24px] font-geist font-bold leading-tight drop-shadow-md">
                Delivery matters
              </span>

              <div
                className="
        max-h-0 opacity-0 overflow-hidden transition-all duration-700 
        group-hover:max-h-56 group-hover:opacity-100 mt-2
      "
              >
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  Wilmarcs Motion Pictures is a dedicated film studio
                  specializing in structured and intentional storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;

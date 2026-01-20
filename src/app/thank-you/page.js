"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/thankyoubg.png"
          alt="Thank you background"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-3 items-center">
        <Image
          src="/wilmarcs-logo.png"
          alt="Wilmarcs logo"
          width={140}
          height={70}
          className="w-30 h-30 sm:w-28 md:w-36 lg:w-44 object-contain drop-shadow-md"
          priority
        />
      </div>

      {/* Group: butterflies + THANK YOU text */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-2xl">

     
        <div className="absolute inset-0 pointer-events-none">
       
          <div className="
            absolute -bottom-3 sm:-bottom-8 left-4 sm:left-6
            w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28
          ">
            <Image
              src="/thank-you.gif"
              alt="Butterfly"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Butterfly 2 - Top Right  */}
          <div className="
            absolute -top-10 sm:-top-6 right-4 sm:right-10
            w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24
          ">
            <Image
              src="/thank-you.gif"
              alt="Butterfly"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* THANK YOU + button */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <span
            className="
              text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl
              font-black uppercase tracking-tight leading-none
              bg-gradient-to-r from-[#1a0f3d] via-[#4a26a0] to-[#6d48d1]
              bg-clip-text text-transparent
              [-webkit-text-stroke:2px_#00000033]
            "
          >
            THANK YOU
          </span>
</div>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 ">
            <Link
              href="/"
              className="
                inline-block px-8 sm:px-10 md:px-12 py-2 sm:py-2 
                bg-gray-900 hover:bg-gray-800 text-white
                text-base sm:text-lg font-medium
                rounded-2xl shadow-md hover:shadow-lg transition-colors
              "
            >
              Back to Home
            </Link>
          
        </div>
      </div>
    </div>
  );
}
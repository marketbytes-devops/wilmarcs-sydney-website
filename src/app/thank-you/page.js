"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className=" h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Full-screen background */}
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


      <div className="absolute top-1  z-30">
        <Image
          src="/wilmarcs-logo.png"
          alt="Wilmarcs logo"
          width={48}          
          height={48}         
          className="w-22 h-12 sm:w-46 sm:h-26 object-contain drop-shadow-md"
          priority
        />
      </div>

      {/* Butterfly 1 - Bottom Left */}
      <div className=" absolute bottom-20 sm:bottom-28  sm:left-90 w-16 sm:w-20 h-16 sm:h-20 pointer-events-none z-10">
        <Image
          src="/thank-you.gif"
          alt="Butterfly"
          fill
          className="object-contain drop-shadow-lg"
          unoptimized
        />
      </div>

      {/* Butterfly 2 - Top Right (small) */}
      <div className="absolute top-20 sm:top-54 right-90 w-10 sm:w-14 h-10 sm:h-14  pointer-events-none z-10">
        <Image
          src="/thank-you.gif"
          alt="Butterfly"
          fill
          className="object-contain drop-shadow-md"
          unoptimized
        />
      </div>

      {/* Main thank you content */}
      <div className=" z-20  flex flex-col  items-center justify-center text-center mt-40">
     <h3 className="text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-[#26164F] via-[#5732B5] to-[#7c5ee6] bg-clip-text text-transparent 
[ -webkit-text-stroke:1px_rgba(0,0,0,0.15) ]">
  THANK YOU
</h3>


        <div className="mt-10 ">
          <Link
            href="/"
            className="inline-flex items-center gap-40 px-8 sm:px-10 py-3 sm:py-2 bg-black text-white rounded-3xl"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
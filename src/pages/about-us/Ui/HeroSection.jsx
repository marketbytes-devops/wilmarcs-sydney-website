import React from 'react'
import Image from 'next/image';
import banner from "./../../../assets/images/about/banner.jpg"

const HeroSection = () => {
  return (
    <>
    <section className="container mx-auto ">
      <div className='flex flex-col w-full mt-18'>
        <span className="text-6xl md:text-8xl font-bold bg-[linear-gradient(94.04deg,#25154E_12.92%,#5530B4_98.63%)]
                         bg-clip-text text-transparent md:mb-4 mb-2 text-center md:text-left">
        About
      </span>
      <span className="text-xl md:text-5xl font-semibold  font-geist
                      bg-[linear-gradient(94.04deg,#25154E_12.92%,#5530B4_98.63%)]
                      bg-clip-text text-transparent  md:mb-4 mb-2 text-center md:text-left">
        Wilmarcs Motion Pictures
      </span>
      <p className="text-lg md:text-xl text-black mb-12 max-w-3xl text-center md:text-left">
        Sydney-based studio for corporate, CSR, and event films.
      </p>   
      </div>
      

     
      <div className=" rounded-2xl overflow-hidden -mt-8 md:-mt-6 ">
        <Image
          src={banner} 
          alt="Wilmarcs Motion Pictures team"
          width={1200}
          height={800}
          className="w-full object-cover"
          priority
        />
      </div>
    </section>
    </>
  )
}

export default HeroSection
import React from 'react'
import Image from 'next/image';
import banner from "./../../../assets/images/about/banner.jpg"

const HeroSection = () => {
  return (
    <>
    <section className="container mx-auto ">
      <div className='flex flex-col w-full mt-18'>
        <span className="text-6xl md:text-8xl font-bold text-purple-900 mb-4">
        About
      </span>
      <span className="text-4xl md:text-5xl font-semibold text-purple-800 mb-4">
        Wilmarcs Motion Pictures
      </span>
      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl">
        Sydney-based studio for corporate, CSR, and event films.
      </p>   
      </div>
      

     
      <div className=" rounded-2xl overflow-hidden ">
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
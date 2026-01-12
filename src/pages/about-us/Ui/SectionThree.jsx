import React from 'react'
import Image from 'next/image';
import kevin from './../../../assets/images/about/kevin.png'

const SectionThree = () => {
  return (
    <>
    <section className='container'>
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='relative w-[40%]'>
            <Image src={kevin}
                   alt='kevinImg'
                   width={356}
                   height={470} 
                   className='rounded-3xl  h-[350px] object-cover'/>

            <div className="absolute bottom-6 px-5 py-5 right-8 bg-white rounded-2xl">
            <p className="text-black font-semibold">
              Kevin Wilson
            </p>
          
          </div>

          </div>
          <div className='w-[60%] mt-32'>
            <h2 className='font-semibold'>
              Founder-led, disciplined, clarity-driven filmmaking.
            </h2>
            <p className='mt-3 font-thin leading-relaxed'>Kevin Wilson, the founder of Wilmarcs Motion Pictures, 
              brings years of industry experience to every project. With a 
              disciplined approach, Kevin ensures clarity-driven filmmaking, 
              guiding each narrative from start to finish.
            </p>
          </div>
          <div className='w-[20%]'></div>
        </div>
    </section>
    </>
  )
}

export default SectionThree
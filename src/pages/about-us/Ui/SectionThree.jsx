import React from 'react'

import CurvedCard from '@/components/CurvedCard';
import kevin from './../../../assets/images/about/kevin.png'

const SectionThree = () => {
  return (
    <>
    <section className='container'>
        <div className='flex flex-col lg:flex-row  lg:gap-18 gap-4'>
          <div className='relative w-full lg:w-[30%] mx-auto'>
           <CurvedCard
          firstName="Kevin"
          lastName="Wilson"
          role="Founder— Director"
          imageSrc={kevin}
        />
          </div>

          <div className='w-full lg:w-[70%] lg:mt-32 mt-3'>
            <h2 className='font-semibold text-center lg:text-left'>
              Founder-led, disciplined, clarity-driven filmmaking.
            </h2>
            <p className='mt-3 text-center lg:text-left font-thin leading-relaxed'>Kevin Wilson, the founder of Wilmarcs Motion Pictures, 
              brings years of industry experience to every project. With a 
              disciplined approach, Kevin ensures clarity-driven filmmaking, 
              guiding each narrative from start to finish.
            </p>
          </div>
          <div className='lg:w-[20%] hidden'></div>
        </div>
    </section>
    </>
  )
}

export default SectionThree
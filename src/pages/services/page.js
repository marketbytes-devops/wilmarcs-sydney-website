import React from 'react'
import HeroSection from '../services/Ui/HeroSection'
import SectionTwo from '../services/Ui/SectionTwo'
import SectionThree from '../services/Ui/SectionThree'
import SectionFour from '../services/Ui/SectionFour'
import SectionFive from '../services/Ui/SectionFive'
import SectionSix from '../services/Ui/SectionSix'
import SectionSeven from '../services/Ui/SectionSeven'


const page = () => {
  return (
    <>
    <section>
        <HeroSection/>
    </section>

    <section className='lg:mt-24 mt-6'>
        <SectionTwo/>
    </section>

     <section className='lg:mt-24 mt-2'>
        <SectionThree/>
    </section>

     <section className='lg:mt-24 mt-2'>
        <SectionFour/>
    </section>

     <section className='lg:mt-24 mt-2'>
        <SectionFive/>
    </section>

     <section className='lg:mt-24 mt-6'>
        <SectionSix/>
    </section>

    <section className='lg:mt-24 mt-0'>
        <SectionSeven/>
    </section>
    </>
  )
}

export default page
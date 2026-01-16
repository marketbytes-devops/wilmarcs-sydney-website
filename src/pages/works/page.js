import React from 'react'
import HeroSection from '../works/Ui/HeroSection'
import SectionTwo from '../works/Ui/SectionTwo'
import SectionThree from '../works/Ui/SectionThree'
import SectionFour from '../works/Ui/SectionFour'
const WorksPage = () => {
  return (
    <>
    <section>
        <HeroSection/>
    </section>
     <section className='mt-4'>
        <SectionTwo/>
    </section>
      <section className='mt-4'>
        <SectionThree/>
    </section>
       <section className='mt-4'>
        <SectionFour/>
    </section>

    </>
  )
}

export default WorksPage
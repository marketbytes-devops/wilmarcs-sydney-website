import React from 'react'
import Image from 'next/image';
import kevin from './../../../assets/images/about/kevin.png'

const SectionThree = () => {
  return (
    <>
    <section className='container'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full'>
            <Image src={kevin} />
          </div>
          <div className='w-full'></div>
        </div>
    </section>
    </>
  )
}

export default SectionThree
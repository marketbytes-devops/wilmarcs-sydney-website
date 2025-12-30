'use client';

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import img1 from '../../../assets/images/home/img1.png';
import img2 from '../../../assets/images/home/img2.png';
import img3 from '../../../assets/images/home/img3.png';
import img4 from '../../../assets/images/home/img4.png';

export default function SectionThree() {
  const works = [
    {
      title: 'Four Billion Meals',
      subtitle: 'CSR Film',
      img: img1,
    },
    {
      title: 'Inside Tesco',
      subtitle: 'Corporate Culture Film',
      img: img2,
    },
    {
      title: 'One Million Trees',
      subtitle: 'Environmental CSR Film',
      img: img3,
    },
    {
      title: 'High Stakes Event Films',
      subtitle: '',
      img: img4,
    },
  ];

  return (
    <div className="bg-[#C7D5D8] p-10 rounded-2xl max-w-[85%] mx-auto">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#E3E9E9] px-8 py-16 md:px-5 md:py-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              Crafting Stories That Inspire, Engage and Transform.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              SELECTED <span className="text-gray-600">WORK</span>
            </h2>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-3">
            Watch work
            <FaPlay className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-video">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                    <FaPlay className="w-10 h-10 text-black ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">{work.title}</h3>
                {work.subtitle && (
                  <p className="text-gray-600 mt-1">{work.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
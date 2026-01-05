'use client';

import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import img1 from "../../../assets/images/home/img1.png"
import img2 from "../../../assets/images/home/img2.png"
import img3 from "../../../assets/images/home/img3.png"
import img4 from "../../../assets/images/home/img4.png"

export default function SelectedWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

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

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const touchStart = (index) => (event) => {
    setCurrentSlide(index);
    setStartPos(getPositionX(event));
    setIsDragging(true);
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentSlide < works.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (movedBy > 50 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setTranslatePosition();
  };

  const setTranslatePosition = () => {
    setCurrentTranslate(currentSlide * -40);
    setPrevTranslate(currentSlide * -40);
  };

  useEffect(() => {
    setTranslatePosition();
  }, [currentSlide]);

  return (
    <section className="bg-[#C7D5D8] md:p-17 p-4 rounded-2xl container">
      <div className="md:max-w-7xl mx-auto rounded-3xl bg-[#E3E9E9] rounded-5xl
                     px-8 py-16 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-[#000000] font-extralight uppercase tracking-wider mb-2">
              Crafting Stories That Inspire, Engage and Transform.
            </p>
            <h2 className="font-semibold text-[#0E0E0F]">
              SELECTED WORK
            </h2>
          </div>

          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-3 mt-4 md:mt-0">
            Watch work
            <Play className="w-5 h-5" />
          </button>
        </div>

      {/* Mobile Swipe Slider  */}
<div className="md:hidden relative overflow-hidden">
  <div 
    className="flex touch-pan-x"
    style={{ 
      transform: `translateX(${currentSlide * -100}%)`,
      transition: isDragging ? 'none' : 'transform 300ms ease-out'
    }}
    onTouchStart={touchStart(currentSlide)}
    onTouchMove={touchMove}
    onTouchEnd={touchEnd}
    onMouseDown={touchStart(currentSlide)}
    onMouseMove={touchMove}
    onMouseUp={touchEnd}
    onMouseLeave={() => {
      if (isDragging) touchEnd();
    }}
  >
    {works.map((work, index) => (
      <div 
        key={index} 
        className="w-full flex-shrink-0 " 
      >
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden px-1 rounded-3xl h-[210px] w-full max-w-[320px] mx-auto">
            <img
              src={work.img.src}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              draggable="false"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <Play className="w-10 h-10 text-black ml-1" fill="black" />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{work.title}</h3>
            {work.subtitle && (
              <p className="text-gray-600 mt-1">{work.subtitle}</p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Dots Indicator */}
  <div className="flex justify-center gap-2 mt-8">
    {works.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentSlide === index ? 'bg-gray-900 w-2' : 'bg-gray-400'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

        {/* Desktop 2x2 Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 ">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-video md:w-65 md:h-50 md:px-2 lg:px-0 lg:w-120 lg:h-100">
                <img
                  src={work.img.src}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {work.overlayText && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-3xl md:text-4xl font-bold text-center px-8 leading-tight drop-shadow-2xl">
                      {work.overlayText}
                    </p>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-black ml-1" fill="black" />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center md:text-left">
                <h6 className="font-semibold text-gray-900">{work.title}</h6>
                {work.subtitle && (
                  <p className="text-gray-600 font-medium mt-1">{work.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
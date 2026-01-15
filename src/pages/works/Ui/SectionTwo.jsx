"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img2.png";
import img3 from "../../../assets/images/home/img3.png";
import img4 from "../../../assets/images/home/img4.png";

const SelectedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const works = [
    {
      title: "Four Billion Meals",
      subtitle: "CSR Film",
      img: img1,
    },
    {
      title: "Inside Tesco",
      subtitle: "Corporate Culture Film",
      img: img2,
    },
    {
      title: "High",
      subtitle: "Environmental CSR Film",
      img: img3,
    },
    {
      title: "One Million Trees",
      subtitle: "Status Coco Films",
      img: img4,
    },
  ];

  const videoUrls = {
    0: "https://your-video-url-for-four-billion-meals.mp4",
    1: "https://your-video-url-for-inside-tesco.mp4",
    2: "https://your-video-url-for-one-million-trees.mp4",
    3: "https://your-video-url-for-high-stakes.mp4",
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-15">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
          <span className="text-5xl md:text-8xl text-[#26164F] font-black tracking-tight">
  SELECTED <br /> WORK
</span>

          </div>
          <div className="text-right text-xs mt-24 text-gray-600 max-w-xs leading-relaxed">
            <p>Whitworth Media</p>
            <p>Proudly is a dedicated</p>
            <p>film studio specializing</p>
          </div>
        </div>
        <div className="w-full h-px bg-black" />
        <p className="mt-4">Latest Work</p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-6">
          {works.map((work, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Card Background Wrapper */}
              <div
                className="bg-gray-200 rounded-3xl p-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

              
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 ${
                        hoveredIndex === index
                          ? "scale-110 bg-white"
                          : "scale-100"
                      }`}
                    >
                      <Play className="w-7 h-7 text-black ml-1" fill="black" />
                    </div>
                  </div>
                </div>

               
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h6 className="text-lg font-semibold text-black">
                      {work.title}
                    </h6>
                    <p className="text-sm text-gray-600">{work.subtitle}</p>
                  </div>
                  <button className="px-5 py-2 bg-black text-white text-xs rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium whitespace-nowrap">
                    WATCH NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
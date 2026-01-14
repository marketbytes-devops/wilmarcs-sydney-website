"use client";

import React from "react";

const Pointer = () => {
  return (
    <div>
      <svg
        width="112"
        height="112"
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_834_3931)">
          <circle
            cx="55.7"
            cy="55.7002"
            r="50"
            fill="url(#paint0_radial_834_3931)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_834_3931"
            x="-4.86374e-05"
            y="0.000195503"
            width="111.4"
            height="111.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
             <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.85"
              result="effect1_foregroundBlur_834_3931"
            />
          </filter>
          <radialGradient
            id="paint0_radial_834_3931"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(55.7 55.7002) rotate(90) scale(50)"
          >
            <stop stopColor="#D3F7FF" />
            <stop offset="1" stopColor="#87DFF2" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Pointer;

"use client";

import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const GoToTop = () => {
  const [atTop, setAtTop] = useState(true);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const trigger = ScrollTrigger.create({
    start: 0,
    end: "max",
   onUpdate: (self) => {
  const scrollPos = self.scroll(); // absolute scroll position
  setAtTop(scrollPos <= 1);        // hide arrow if at very top

  // Calculate progress as % of total scroll
  const smoother = ScrollSmoother.get();
  const maxScroll = smoother
    ? smoother.content().scrollHeight - window.innerHeight
    : document.body.scrollHeight - window.innerHeight;

  const clampedProgress = scrollPos <= 1 ? 0 : (scrollPos / maxScroll) * 100;
  setProgress(clampedProgress);
}



  });

  return () => trigger.kill();
}, []);




const scrollToTop = () => {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(0, true);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};



  if (atTop || progress < 4) return null;


  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-4 z-50 group"
    >
      <svg width="64" height="64" className="-rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-black transition-all duration-300"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <LuArrowUp
          size={26}
          className="text-black group-hover:scale-110 transition-transform cursor-pointer"
        />
      </div>
    </button>
  );
};

export default GoToTop;

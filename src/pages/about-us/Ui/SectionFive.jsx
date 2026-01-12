import Button from "@/components/Button";
import React, { useState } from "react";

const SectionFive = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <section className="container">
        <div className="flex items-center py-4 ">
          <div className="w-full lg:w-[80%]">
            <h4>WHO WE WORK WITH</h4>
            <p>
              Kevin Wilson, the founder of Wilmarcs Motion Pictures, brings
              years of{" "}
            </p>
          </div>
          <div className="w-full lg:w-[20%]">
            <Button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`flex items-center overflow-hidden whitespace-nowrap text-white
                         text-[15px] px-12 py-4
                        transition-all duration-[600ms] ease-in-out
                                    ${
                                      hovered
                                        ? " bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#381A8C_0deg,#1A0F37_180deg,#936FEC_360deg)]"
                                        : "bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#936FEC_0deg,#1A0F37_180deg,#381A8C_360deg)]"
                                    }`}
            >
              Plan a Project
            </Button>
          </div>
        </div>
        <div className="border border-gray-400"></div>
      </section>
    </>
  );
};

export default SectionFive;

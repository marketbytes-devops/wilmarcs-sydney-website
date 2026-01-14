import React from "react";
import Image from "next/image";
import services from "@/assets/images/services/services.jpg";
import Button from "@/components/Button";

const SectionFour = () => {
  return (
    <>
      <section className="container">
        <div className="flex lg:flex-row flex-col gap-4 w-full h-auto">
          <div className="lg:w-[40%] w-full ">
            <Image
              src={services}
              alt="services"
              height={445}
              width={552}
              className="object-cover w-full  rounded-3xl h-[460px]"
            />
          </div>

          <div className="lg:w-[60%] w-full ">
            <h5 className="text-[#24144C] text-center lg:text-left uppercase">
                Corporate Films
            </h5>
            <p>
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>
            <p className="mt-2">
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>

            <div className="mt-2 w-full flex flex-col lg:flex-row">
              <div className=" w-full grid grid-cols-1 sm:grid-cols-3 text-left pb-4">
                {/* Stat 1 */}
                <div className="relative px-4">
                  <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

                  <h6 className=" font-bold text-gray-900 mt-3">
                    Lorem Ipsum
                  </h6>
                  <p className="mt-4 py-2  text-gray-600 leading-relaxed">
                    Wilmarcs Motion Pictures is a dedicated film studio
                    specializing in structured and intentional storytelling.
                  </p>
                </div>

                {/* Stat 2 */}
               <div className="relative px-4">
                  <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

                  <h6 className=" font-bold text-gray-900 mt-3">
                    Lorem Ipsum
                  </h6>
                  <p className="mt-4 py-2  text-gray-600 leading-relaxed">
                    Wilmarcs Motion Pictures is a dedicated film studio
                    specializing in structured and intentional storytelling.
                  </p>
                </div>

                {/* Stat 3 */}
               <div className="relative px-4">
                  <div className="absolute left-1 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

                  <h6 className=" font-bold text-gray-900 mt-3">
                    Lorem Ipsum
                  </h6>
                  <p className="mt-4 py-2  text-gray-600 leading-relaxed">
                    Wilmarcs Motion Pictures is a dedicated film studio
                    specializing in structured and intentional storytelling.
                  </p>

                  
                </div>

                <div className="mt-4">
                    <Button className="uppercase lg:w-auto px-10 py-2 border-4 w-full">
                        plan a project
                    </Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;

import React from "react";
import Image from "next/image";
import services from "@/assets/images/services/services.jpg";
import Button from "@/components/Button";

const SectionFive = () => {
  return (
    <>
      <section className="container">
        <div className="flex lg:flex-row flex-col gap-4 w-full h-auto">
            <div className="lg:w-[60%] w-full lg:order-1 order-2">
            <h5 className="text-[#24144C] text-center lg:text-left uppercase">
                Testimonials & Case Studies
            </h5>
            <p>
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>
            <p className="mt-2">
              At Wilmarcs Motion Pictures, we are passionate about creating
              meaningful and impactful films that tell your story
            </p>

             <div className="mt-4">
                    <Button className="uppercase lg:w-auto px-10 py-2 border-4 w-full">
                        plan a project
                    </Button>
                </div>

          </div>

          <div className="lg:w-[40%] w-full lg:order-2 order-1">
            <Image
              src={services}
              alt="services"
              height={445}
              width={552}
              className="object-cover w-full  rounded-3xl h-[460px]"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default SectionFive;

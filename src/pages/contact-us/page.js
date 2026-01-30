import Image from "next/image";
import ContactForm from "@/components/Form/ContactForm";
import React from "react";
import contactus from "@/assets/videos/contact-us/contactus.gif";

const page = () => {
  return (
    <>


      <div className="md:py-4 py-0">
        <div className="relative w-full  mt-8 overflow-hidden ">

          {/* MOBILE */}
          <div className="md:hidden">
            <div
              className="
              relative mx-auto w-full
              aspect-[16/9]
            "
            >
              <div className="absolute inset-0">
                <Image
                  src={contactus}
                  alt="Contact animation"
                  className="w-full h-full object-contain md:rounded-3xl rounded-none"
                />
              </div>
            </div>
          </div>


          {/* DESKTOP  */}
          <div className="hidden md:block">
            <div
              className="
          relative mx-auto w-full container
          max-w-[1400px]  
          h-[70vh] lg:h-[80vh]       
        "
            >

              <div className="absolute inset-0 ">
                <Image
                  src={contactus}
                  alt="Contact animation"
                  className="w-full h-full object-contain md:rounded-3xl rounded-none"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="w-full flex lg:flex-row flex-col">
          <div className="lg:w-[80%] w-full md:mt-18 mt-6">
            <span
              className="font-geist font-extrabold
                            text-[22px] md:text-[72px] lg:text-[100px] text-[#26164F]
                            uppercase leading-tight"
            >
              Let’s talk about your project.
            </span>
          </div>
          <div className="lg:w-[20%] w-full"></div>
        </div>

        <div className="border border-[#454545] mt-3 md:mt-0" />
        <div>
          <p className="font-extralight opacity-60 mt-2 md:mt-0">Share a few details.</p>
        </div>
        <ContactForm />
      </section>

      <div className="lg:pb-20 pb-12">
        <section className="container bg-black rounded-3xl text-white px-6 py-10 md:p-8 lg:p-12">
          <h5 className="uppercase tracking-wider text-sm md:text-base font-medium mb-8 md:mb-10">
            Direct contact
          </h5>

          <div
            className="
      grid 
      grid-cols-1 
      md:grid-cols-3 
      gap-10 
      md:gap-8 
      lg:gap-12
    "
          >
            {/* Email */}
            <div className="flex md:items-end md:justify-between w-full">
              <div className="space-y-1 md:mb-5">
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Email
                </p>
                <h6 className="text-lg md:text-xl font-medium">
                  <a href="mailto:hello@wilmarcs.com" className="hover:text-gray-300 transition-colors">
                    hello@wilmarcs.com
                  </a>
                </h6>
              </div>

              {/* Vertical line - hidden on mobile, shown from md+ */}
              <div className="hidden md:block w-px h-40 lg:h-48 bg-[#8D8D8D] self-end" />
            </div>

            {/* Address */}
            <div className="flex md:items-end md:justify-between w-full">
              <div className="space-y-1 md:mb-5">
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Address
                </p>
                <h6 className="text-lg md:text-xl font-medium">
                  Sydney NSW, Australia
                </h6>
              </div>

              {/* Vertical line - hidden on mobile, shown from md+ */}
              <div className="hidden md:block w-px h-40 lg:h-48 bg-[#8D8D8D] self-end" />
            </div>

            {/* Phone */}
            <div className="flex md:items-end w-full">
              <div className="space-y-1 md:mb-5">
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Phone
                </p>
                <h6 className="text-lg md:text-xl font-medium">
                  <a href="tel:+61000000000" className="hover:text-gray-300 transition-colors">
                    +61 (***** number)
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;

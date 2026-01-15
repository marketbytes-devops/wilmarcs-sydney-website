import Image from "next/image";
import ContactForm from "@/components/Form";
import React from "react";
import contactus from "@/assets/videos/contact-us/contactus.gif";

const page = () => {
  return (
    <>
      <section>
        <div className="relative w-full bg-black mt-16 overflow-hidden">
          <div
            className="
          relative mx-auto w-full container
          max-w-[1400px]  
          aspect-[16/9]"
          >
           
            <div className="absolute inset-0">
              <Image
                src={contactus}
                alt="Contact animation"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="w-full flex lg:flex-row flex-col">
              <div className="lg:w-[80%] w-full mt-18">
            <span className="font-geist font-bold text-[100px] text-[#26164F] uppercase leading-tight">
                Let’s talk about your project.
            </span>
        </div>
        <div className="lg:w-[20%] w-full"></div>
        </div>
        
        <div className="border border-[#454545]"/>
        <ContactForm />
      </section>

<div className="pb-20">
      <section className="container bg-black rounded-3xl text-white p-8">
        <h5 className="uppercase">Direct contact</h5>

        <div className="grid grid-cols-3 gap-18 mt-10">
            <div className="flex items-end gap-10 ">
                <div className="mb-5">
                    <p>Email</p>
                    <h6>hello@wilmarcs.com</h6>
                </div>
                 <div className="w-px h-48 bg-[#8D8D8D]"></div>
            </div>

             <div className="flex items-end gap-10">
                <div className="mb-5">
                    <p>location</p>
                    <h6>Sydney NSW, Australia</h6>
                </div>
                 <div className="w-px h-48 bg-[#8D8D8D]"></div>
            </div>

             <div className="flex items-end  gap-10">
                <div className="mb-5">
                    <p>Phone</p>
                    <h6>+61 (update number)</h6>
                </div>
                 
            </div>
        </div>

      </section>
</div>
    </>
  );
};

export default page;

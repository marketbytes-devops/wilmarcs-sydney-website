"use client";

import ContactForm from "./ContactForm";

export default function ModalForm() {

  return (
    <>
    <section className="container">
            <div className="w-full flex lg:flex-row flex-col">
              <div className="lg:w-[50%] w-full md:mt-18 mt-6">
                <span
                  className="font-geist font-extrabold
                                text-[22px] md:text-[72px] lg:text-[100px] text-[#26164F]
                                uppercase leading-tight"
                >
                  Let’s talk about your project.
                </span>
              </div>
              <div className="lg:w-[50%] w-full">
                    <ContactForm />
              </div>
            </div>

            {/* <div>
              <p className="font-extralight opacity-60 mt-2 md:mt-0">Share a few details.</p>
            </div> */}
          
          </section>
    </>
  );
}
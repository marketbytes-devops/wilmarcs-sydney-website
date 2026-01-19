"use client";

import ContactForm from "./ContactForm";

export default function ModalForm({ closeModal }) {

  return (
    <>
    <section className="w-full">
            <div className="w-full flex lg:flex-row flex-col">
              <div className="lg:w-[50%] w-full md:mt-18 mt-6">
                <span
                  className="font-geist font-extrabold text-[22px]
                                lg:text-[60px]  text-[#26164F]
                                uppercase leading-tight text-center"
                >
                  Let’s talk about your project.
                </span>
                <p className="font-extralight opacity-60 mt-2 md:mt-0">Share a few details.</p>
              </div>
              <div className="lg:w-[50%] w-full lg:-mt-14 mt-0 lg:-ml-18 ml-0">
                    <ContactForm closeModal={closeModal} />
              </div>
            </div>
          
          </section>
    </>
  );
}
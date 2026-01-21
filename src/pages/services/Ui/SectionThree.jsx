"use client";
import React, { useState } from "react";
import Image from "next/image";
import services from "@/assets/images/services/services.jpg";
import Button from "@/components/Button";
import ModalForm from "@/components/Form/ModalForm";
import { createPortal } from "react-dom";

const SectionThree = () => {

  const [openPlanModal, setOpenPlanModal] = useState(false);

  return (
    <>
      <section className="container">
        <div className="flex lg:flex-row flex-col gap-4 w-full h-auto">
            <div className="lg:w-[60%] w-full lg:order-1 order-2">
            <h5 className="text-[#24144C] text-center lg:text-left uppercase">
                CSR & Impact Stories
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

                  <p className=" font-bold text-gray-900 mt-3">
                    Deliverables
                  </p>
                  <ul className="mt-4 text-gray-600 leading-relaxed list-disc pl-5">
                    <li>Pre-production planning & scripting</li>
                    <li>Professional cinematography</li>
                    <li>Advanced post-production editing</li>
                  </ul>
                </div>

                {/* Stat 2 */}
               <div className="relative px-4">
                  <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>

                  <p className=" font-bold text-gray-900 mt-3">
                    Add‑ons
                  </p>
                  <p className="mt-4 py-2  text-gray-600 leading-relaxed">
                    Wilmarcs Motion Pictures is a dedicated film studio
                    specializing in structured and intentional storytelling.
                  </p>
                </div>

                {/* Stat 3 */}
               <div className="relative px-4">
                  <div className="absolute left-1 top-4 bottom-0 w-0.5 bg-[#8D8D8D] "></div>          
                </div>

                <div className="mt-4">
                    <Button onClick={() => setOpenPlanModal(true)} 
                            className="uppercase lg:w-auto px-10 py-2 border-4 w-full hover:bg-gray-200">
                        plan a project
                    </Button>
                </div>

              </div>
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

          {openPlanModal &&
                         createPortal(
                           <div
                             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
                             onClick={() => setOpenPlanModal(false)} // optional: close on backdrop click
                           >
                             {/* Modal content – stop propagation so clicks inside don't close */}
                             <div
                               className="bg-white w-[95%] max-w-5xl max-h-[90vh] p-8 rounded-2xl relative overflow-y-auto"
                               onClick={(e) => e.stopPropagation()}
                             >
                               <button
                                 onClick={() => setOpenPlanModal(false)}
                                 className="absolute top-4 right-4 text-3xl font-bold cursor-pointer"
                               >
                                 ×
                               </button>
                 
                               <ModalForm closeModal={() => setOpenPlanModal(false)} />
                             </div>
                           </div>,
                           document.body,
                         )}

      </section>
    </>
  );
};

export default SectionThree;

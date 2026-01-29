"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import ModalForm from "@/components/Form/ModalForm";
import { createPortal } from "react-dom";

const SectionFive = () => {

   const [openPlanModal, setOpenPlanModal] = useState(false);

  return (
    <>
      <section className="container">
        <div className="flex lg:flex-row flex-col gap-4 w-full h-auto">
            <div className="lg:w-[60%] w-full lg:order-1 order-2">
            <h5 className="text-[#24144C] font-medium text-center lg:text-left uppercase">
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
                    <Button onClick={() => setOpenPlanModal(true)}
                            className="uppercase lg:w-auto px-10 py-2 border-4 w-full hover:bg-gray-200 cursor-pointer">
                        plan a project
                    </Button>
                </div>

          </div>

          <div className="lg:w-[40%] w-full lg:order-2 order-1">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[460px] object-cover rounded-3xl"
            >
              <source src="/videos/services/Testimonial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
         {openPlanModal &&
                         createPortal(
                           <div
                             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
                             onClick={() => setOpenPlanModal(false)} 
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

export default SectionFive;

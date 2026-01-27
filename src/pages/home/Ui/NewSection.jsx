"use client"
import Button from '@/components/Button'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import ModalForm from "@/components/Form/ModalForm"
import { createPortal } from "react-dom";

const NewSection = () => {

    const [openPlanModal, setOpenPlanModal] = useState(false);

     useEffect(() => {
        if (openPlanModal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
    
        return () => {
          document.body.style.overflow = "";
        };
      }, [openPlanModal]);


  return (
    <>
    <section className='container'>
        <div className='flex justify-between w-full'>
       
            <div className="mt-48">
              <p className="text-black mb-8">
                You'll only receive updates on new templates
                <br />
                no spam, just what you signed up for.
              </p>

              <div className="flex flex-wrap gap-5">
                <Button
                  onClick={() => setOpenPlanModal(true)}
                  className="text-black bg-white border-black border-2 rounded-3xl py-3 px-10 font-semibold text-lg"
                >
                  Plan a Project
                </Button>
                <Link href="/works">
                  <Button className="text-white bg-black rounded-3xl py-3 px-10 font-semibold border border-white text-lg">
                    Watch Work
                  </Button>
                </Link>
              </div>
            </div>
          
            <div className=''>
                <video
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-3xl"
                    >
                      <source src="/videos/home/New.mp4" type="video/mp4" />
                    </video>
            </div>

        </div>

         {/* Modal */}
              {openPlanModal &&
                createPortal(
                  <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
                    onClick={() => setOpenPlanModal(false)}
                  >
                    <div
                      className="bg-white w-full max-w-5xl h-[90vh] p-6 md:p-8 rounded-2xl relative overflow-hidden flex items-center"
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
  )
}

export default NewSection
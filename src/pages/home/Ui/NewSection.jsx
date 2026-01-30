"use client"
import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import ModalForm from "@/components/Form/ModalForm"
import { createPortal } from "react-dom";




const NewSection = () => {

  const contentRef = useRef(null);

  const [openPlanModal, setOpenPlanModal] = useState(false);
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);


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

  useEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current || !contentRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = ScrollTrigger.matchMedia();

    // DESKTOP ONLY
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        { scale: 0.35, transformOrigin: "center center" },
        { scale: 1, ease: "none" }
      );

      tl.to(
        contentRef.current,
        { opacity: 1, y: 0, ease: "none" },
        ">"
      );

      return () => tl.kill();
    });

    // MOBILE / TABLET
    mm.add("(max-width: 1023px)", () => {
      gsap.set(videoWrapperRef.current, { scale: 1 });
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
    });

    return () => mm.kill();
  }, []);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);



  return (
    <>
      <section ref={sectionRef} className="container">
        <div className="hidden lg:flex justify-center lg:min-h-screen  items-center ">


          <div className="flex items-center justify-center
                pt-0 sm:pt-4 lg:pt-20 w-full">

            {/* Video container */}
            <div
              ref={videoWrapperRef}
              className="relative
           w-full   xl:max-w-full
           max-w-[900px]
           aspect-4/2 h-[80vh]"

            >

              <video
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover rounded-3xl"
              >
                <source src="/videos/home/New.mp4" type="video/mp4" />
              </video>

              {/* Overlay content INSIDE video */}
              <div
                ref={contentRef}
                className="absolute bottom-6 right-6 opacity-0 translate-y-6 text-right"
              >
                <p className="text-white mb-4">
                  You'll only receive updates on new templates<br />
                  no spam, just what you signed up for.
                </p>

                <div className="flex gap-4 justify-end items-center">
                  <Button
                    onClick={() => setOpenPlanModal(true)}
                    className="bg-white text-black rounded-3xl px-6 py-2 font-semibold"
                  >
                    Plan a Project
                  </Button>

                  <Link href="/works">
                    <Button className="bg-black text-white rounded-3xl px-6 py-2 font-semibold">
                      Watch Work
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
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
                className="bg-white w-full max-w-5xl h-auto p-6 md:p-8 rounded-2xl relative overflow-visible flex items-center"
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
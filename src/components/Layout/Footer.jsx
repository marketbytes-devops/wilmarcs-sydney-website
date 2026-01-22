"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PeopleIcon from "@/components/Icons/PeopleIcon";
import halfTone from "@/assets/images/home/halftone.png";
import lastPic1 from "@/assets/images/home/lastpic1.jpg";
import lastPic2 from "@/assets/images/home/lastpic2.jpg";
import lastPic3 from "@/assets/images/home/lastpic3.png";
import Button from "@/components/Button/index";

import emailjs from "emailjs-com";

const Footer = () => {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_FOOTER_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_FOOTER_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        form.current.reset();
        router.push("/thank-you");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <div className="pb-8">
        <div className="border-t border-gray-300 w-full" />
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-6 py-3 lg:px-0 px-6">
          {/* Left Halftone Image */}
          <div className="hidden lg:block col-span-1  lg:col-span-3 flex items-center">
            <Image
              src={halfTone}
              alt="Halftone background"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Center Content */}
          <div
            className="col-span-1  lg:col-span-6
                          flex flex-col justify-center relative lg:-left-32"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 lg:justify-start justify-center">
                <div className="w-5 h-5">
                  <PeopleIcon />
                </div>
                <p className=" text-gray-600">Work Together</p>
              </div>
              <h5 className="  font-semibold text-center lg:text-left ">
                Let's talk about your project
              </h5>

              {/* FORM START */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-2 lg:mb-0 "
              >
                <input
                  type="email"
                  name="user_email"
                  className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#271751]"
                  placeholder="Your email address"
                  required
                />
                <Button
                  type="submit"
                  className="bg-black  text-white sm:py-4 px-8 py-2
                            rounded-full font-medium 
                          hover:bg-gray-800 transition  
                            bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0deg,#666666_360deg)] 
                            hover:bg-[conic-gradient(from_180deg_at_50%_50%,#111111_180deg,#777777_360deg)]"
                >
                  Send enquiry
                </Button>
              </form>
              {/* FORM END */}

            </div>
          </div>

          {/* Right Project Images */}
          <div className="hidden lg:block col-span-1  lg:col-span-3 items-center justify-end relative lg:-left-32">
            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-1">
              <Image
                src={lastPic1}
                alt="Project 1"
                width={112}
                height={128}
                className="w-full mt-12 md:w-28 lg:w-28 h-32 lg:h-32 rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic2}
                alt="Project 2"
                width={183}
                height={228}
                className="w-full mt-4 md:w-[183px] lg:w-[183px] h-56 md:h-[228px] lg:h-[228px] rounded-lg shadow-lg object-cover"
              />
              <Image
                src={lastPic3}
                alt="Project 3"
                width={128}
                height={144}
                className="w-full mt-14 md:w-32 lg:w-32 h-36 lg:h-36 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full" />
      </div>

      <footer className="w-full max-w-[95%] mx-auto">
        <div className="items-center justify-center flex py-5">
          <Image
            src="/wilmarcs-logo.png"
            alt="Wilmarcs Logo"
            width={160}
            height={48}
            className="h-8 w-auto sm:h-10 md:h-12 object-contain"
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-y-0">
          <ul className="font-kumbh flex gap-x-4 sm:gap-x-6 md:gap-x-8 sm:text-[16px] text-[14px]
                         px-4 sm:px-6 md:px-10 list-none justify-center md:justify-start">
            <li className="cursor-pointer hover:text-blue-600">Facebook</li>
            <li className="cursor-pointer hover:text-pink-600">Instagram</li>
            <li className="cursor-pointer hover:text-red-600">Youtube</li>
            <li className="cursor-pointer hover:text-blue-700">Linkedin</li>
          </ul>
          <ul className="font-kumbh flex flex-col items-center md:items-end  text-center md:text-right">
            <li className="text-sm sm:text-base">hello@wilmarcs.com</li>
            <li className="text-sm sm:text-base">+61 (***** number)</li>
          </ul>
        </div>
      </footer>
      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="mt-4 px-4 sm:px-6">
        <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-4 justify-center cursor-pointer text-sm sm:text-base">
          <li className="text-[#626568] hover:text-black hover:font-semibold text-center sm:text-left">
            Privacy Policy
          </li>
          <li className="text-[#626568] hover:text-black hover:font-semibold text-center sm:text-left">
            Terms of Use
          </li>
          <li className="text-[#626568] hover:text-black hover:font-semibold text-center sm:text-left">
            Careers
          </li>
          <li className="text-[#626568] hover:text-black hover:font-semibold text-center sm:text-left">
            Help
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="flex justify-center h-auto py-6 sm:py-18 px-4 sm:px-0">
        <p className="font-kumbh -mt-5 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Wilmarcs Motion Pictures. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

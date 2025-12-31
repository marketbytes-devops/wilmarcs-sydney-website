import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
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
          <ul className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 px-4 sm:px-6 md:px-10 list-none justify-center md:justify-start">
            <li className="cursor-pointer hover:text-blue-600">Facebook</li>
            <li className="cursor-pointer hover:text-pink-600">Instagram</li>
            <li className="cursor-pointer hover:text-red-600">Youtube</li>
            <li className="cursor-pointer hover:text-blue-700">Linkedin</li>
          </ul>
          <ul className="flex flex-col items-center md:items-end  text-center md:text-right">
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
        <div className="border-t border-gray-300 w-full mt-4"></div>
      </div>

      <div className="flex justify-center h-auto py-6 sm:py-10 px-4 sm:px-0">
        <p className="text-xs sm:text-sm -mt-5 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Wilmarcs Motion Pictures. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

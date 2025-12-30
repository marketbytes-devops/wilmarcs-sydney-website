import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full max-w-[95%] mx-auto">
        <div className="items-center justify-center flex py-5">
          <img src="wilmarcs-logo.png" className="object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex gap-x-8 px-10 list-none">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
          <ul className="flex flex-col items-center mt-6">
            <li>hello@wilmarcs.com</li>
            <li>+61 (***** number)</li>
          </ul>
        </div>
      </footer>
      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="mt-4">
        <ul className="flex gap-x-4 justify-center cursor-pointer">
          <li className="text-[#626568] hover:text-black hover:font-semibold">Privacy Policy</li>
          <li className="text-[#626568] hover:text-black hover:font-semibold">Terms of Use</li>
          <li className="text-[#626568] hover:text-black hover:font-semibold">Careers</li>
          <li className="text-[#626568] hover:text-black hover:font-semibold ">Help</li>
        </ul>
        <div className="border-t border-gray-300 w-full mt-4"></div>
      </div>

      <div className="flex justify-center h-auto py-10">
        <p className="-mt-5">
          &copy; {new Date().getFullYear()} Wilmarcs Motion Pictures. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

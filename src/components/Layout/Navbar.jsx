"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BsDiagram3 } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import ContactIcon from "./../Icons/ContactIcon";
import { motion, AnimatePresence } from "framer-motion";
import menu from "../../assets/images/home/menu.png";
import ModalForm from "../Form/ModalForm";

const navLinks = [
  { name: "Home", href: "/", icon: GoHome },
  {
    name: "About",
    href: "/about-us",
    icon: HiOutlineInformationCircle,
  },
  {
    name: "Services",
    href: "/services",
    icon: RiServiceLine,
  },
  {
    name: "Works",
    href: "/works",
    icon: MdOutlineWorkOutline,
  },
  {
    name: "Process",
    href: "/process",
    icon: BsDiagram3,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openPlanModal, setOpenPlanModal] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const showInitialNavbar = isHomePage && !scrolled;
  const showScrolledNavbar = scrolled || !isHomePage;

  const hoverTransition = {
    duration: 0.45,
    ease: "easeInOut",
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {showInitialNavbar && (
        <nav className=" hidden sm:block bg-black/95 py-5 fixed top-0 left-0 right-0 z-50 rounded-t-2xl mx-6 mt-3">
          <div className="container mx-auto">
            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center space-x-4 font-geist text-[16px] font-medium">
                {navLinks.map((link) => {
                  const isHome = link.name === "Home";
                  const Icon = link.icon;

                  if (isHome) {
                    return (
                      <Link key={link.name} href={link.href}>
                        <div className="flex items-center gap-2 border hover:text-white border-white rounded-full px-2 py-1 text-[#B0B0B0]">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                            <Icon size={16} className="text-black" />
                          </span>
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <Link key={link.name} href={link.href}>
                      <motion.div
                        className={`relative flex items-center text-[#B0B0B0] hover:text-white ${
                          pathname === link.href ||
                          (link.href !== "/" && pathname === `${link.href}/`)
                            ? "text-white"
                            : ""
                        }`}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                      >
                        <motion.span
                          variants={{
                            rest: { opacity: 0, x: -6 },
                            hover: { opacity: 1, x: 0 },
                          }}
                          transition={hoverTransition}
                          className="absolute left-0"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black">
                            <Icon size={16} className="text-white" />
                          </span>
                        </motion.span>

                        <motion.span
                          variants={{
                            rest: { x: 0 },
                            hover: { x: 12 },
                          }}
                          transition={hoverTransition}
                          className="pl-4"
                        >
                          {link.name}
                        </motion.span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* Logo Background */}
              <div
                className="absolute left-[50%] -translate-x-1/2 -top-22 w-72 h-52 flex items-center justify-center"
                style={{
                  backgroundImage: "url('/LogoBg.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Link href="/">
                  <Image
                    src="/wilmarcs-logo.png"
                    alt="Wilmarcs Logo"
                    width={120}
                    height={20}
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`
      group relative flex items-center text-white text-[15px]
      transition-all duration-700 ease-in-out
      [--a:90deg] [--c1:#936FEC] [--c3:#381A8C]
      bg-[conic-gradient(from_var(--a)_at_50%_50%,var(--c1)_0deg,#1A0F37_180deg,var(--c3)_360deg)]
      bg-[length:200%_200%] bg-[position:0%_50%]
      shadow-[inset_0_0_0_4px_rgba(255,255,255,0.7)]
      hover:bg-[position:100%_50%]
      hover:[--a:270deg]
      hover:[--c1:#381A8C]
      hover:[--c3:#936FEC]
      ${hovered ? "p-2 pr-5 gap-3" : "px-2 py-1 gap-0"}
      rounded-full overflow-hidden
    `}
                >
                  <ContactIcon className="shrink-0" />

                  <Link
                    href="/contact-us"
                    className={`
        inline-block font-medium transition-all duration-500 ease-out
        ${
          hovered
            ? "max-w-[140px] opacity-100 translate-x-0"
            : "max-w-0 opacity-0 -translate-x-4"
        }
      `}
                  >
                    Contact Us
                  </Link>
                </Button>

                <Button
                  onClick={() => setOpenPlanModal(true)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
    text-white px-8 py-2.5 overflow-hidden
    [--a:90.00deg] [--c1:#936FEC] [--c3:#381A8C]
    bg-[conic-gradient(from_var(--a)_at_50.00%_50.0%,var(--c1)_0deg,#1A0F37_180deg,var(--c3)_360deg)]
    bg-[length:200%_200%]
    bg-[position:0%_50%]
    shadow-[inset_0_0_0_5px_rgba(255,255,255,0.5)]
    transition-[background-position,--a,--c1,--c3]
    duration-700 ease-in-out
    hover:bg-[position:100%_50%]
    hover:[--a:90.00deg] hover:[--c1:#381A8C] hover:[--c3:#936FEC]
  `}
                >
                  Plan A Project
                  <span className="ml-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#3B1D8F] transition-all duration-400">
                    {isHovered ? (
                      <GoArrowRight size={18} />
                    ) : (
                      <GoArrowUpRight size={18} />
                    )}
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile View - Logo + Hamburger */}
            <div className="lg:hidden  flex items-center justify-between py-2">
              <Link href="/" className="flex-1 flex justify-center">
                <Image
                  src="/wilmarcs-logo.png"
                  alt="Wilmarcs Logo"
                  width={140}
                  height={36}
                  className="object-contain invert"
                />
              </Link>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none z-50"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </Button>
            </div>
          </div>
        </nav>
      )}

      {(showScrolledNavbar || isMobile) && (
        <nav className="bg-black/90 backdrop-blur-md py-4 fixed top-0 left-0 right-0 z-50 border-gray-950">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/wilmarcs-logo.png"
                  alt="Wilmarcs Logo"
                  width={140}
                  height={36}
                  className="object-contain invert brightness-0"
                />
              </Link>

              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none z-50 relative border-white border py-2 px-5 flex items-center gap-2"
              >
                <Image
                  src={menu}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                Menu
              </Button>
            </div>
          </div>
        </nav>
      )}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 grid grid-cols-1 bg-white lg:grid-cols-2"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-6 z-[999] bg-white border border-black border-1 px-4 py-2  transition
    hover:bg-gray-100
    hover:border-gray-400 rounded-full text-sm flex items-center gap-2"
            >
              <span className="text-2xl font-semibold ">×</span>
              <span className="font-semibold ">Close</span>
            </button>

            {/* LEFT — BLACK MENU */}
            <div className="relative bg-black flex flex-col px-10 lg:px-14 w-full">
              <div className="absolute top-8 left-10 lg:left-14">
                <img
                  src="/wilmarcs-logo.png"
                  alt="wilmarcs motion pictures"
                  className="h-8 lg:h-10 object-contain invert brightness-0"
                />
              </div>

              <div className="flex-1 flex sm:items-center sm:mt-0 mt-26">
                <div className="sm:space-y-4 space-y-6  text-2xl lg:text-4xl font-bold text-white">
                  {navLinks.map((link, index) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname === `${link.href}/`);
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-4 transition ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {isActive && (
                            <Icon className="text-3xl lg:text-4xl" />
                          )}
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <div className="mt-10 flex flex-col gap-4 lg:hidden -mx-10 px-8 w-screen">
                    <button
                      onClick={() => setOpenPlanModal(true)}
                      className="w-full border border-white text-white py-3 rounded-full"
                    >
                      Plan a Project
                    </button>
                    <Link
                      href="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-center border border-white text-white
                                 py-3 rounded-full"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — PROJECT CTA */}
            <div className="relative hidden lg:block right-10 w-[800] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/navbarImg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="relative z-10 h-full flex items-center px-26">
                <div className="max-w-md space-y-10 text-black">
                  <h2 className="text-6xl font-bold leading-tight">
                    Let's talk about
                    <br />
                    your project
                  </h2>

                  <div className="flex gap-6">
                    <Link
                      href="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <button className="bg-black text-white px-8 py-3 rounded-full cursor-pointer">
                        Contact Us
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setOpenPlanModal(true);
                      }}
                      className="border border-black px-8 py-3 rounded-full cursor-pointer"
                    >
                      Plan a project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {openPlanModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          {/* Modal Box */}
          <div className="bg-white w-[95%] max-w-5xl max-h-[90vh] p-8 rounded-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenPlanModal(false)}
              className="absolute top-4 right-4 text-3xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* YOUR FORM COMPONENT */}
            <ModalForm closeModal={() => setOpenPlanModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

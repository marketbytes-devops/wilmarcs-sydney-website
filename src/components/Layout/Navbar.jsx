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
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import ContactIcon from "./../Icons/ContactIcon";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: GoHome },
  {
    name: "About",
    href: "/about",
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
  const [isContactHovered, setIsContactHovered] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const showInitialNavbar = (isHomePage && !scrolled) || !isHomePage;
  const showScrolledNavbar = isHomePage && scrolled;

  const hoverTransition = {
    duration: 0.45,
    ease: "easeInOut",
  };

  return (
    <>
      {showInitialNavbar && (
        <nav
          className="bg-black/95
 py-6 fixed top-0 left-0 right-0 z-50 rounded-2xl mx-6 mt-3"
        >
          <div className=" mx-auto px-6">
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center space-x-4 font-geist text-[16px] font-medium">
                {navLinks.map((link) => {
                  const isHome = link.name === "Home";
                  const Icon = link.icon;

                  //HOME (no animation, icon inside border)
                  if (isHome) {
                    return (
                      <Link key={link.name} href={link.href}>
                        <div
                          className="flex items-center  gap-2 border hover:text-white
                                      border-white rounded-full px-2 py-1 text-[#B0B0B0]"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                            <Icon size={16} className="text-black" />
                          </span>
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    );
                  }

                  // OTHER MENUS (animated)
                  return (
                    <Link key={link.name} href={link.href}>
                      <motion.div
                        className={`relative flex items-center text-[#B0B0B0] hover:text-white ${
                          pathname === link.href ? "text-white" : ""
                        }`}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                      >
                        {/* ICON (animated) */}
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

                        {/* TEXT */}
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

              <div
                className="absolute left-[50%] -translate-x-1/2 -top-22
             w-64 h-48 flex items-center justify-center "
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

              <div className="flex items-center space-x-4">
                {/* "Contact Us" Button: Simple text, gray-to-white hover (no bg) */}

                <Button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => console.log("Contact clicked")}
                  className={`
    flex items-center
    overflow-hidden whitespace-nowrap
    text-white text-[15px] 
    p-[10px]
    transition-all duration-[600ms] ease-in-out

    ${
      hovered
        ? "gap-8  pr-4   bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#381A8C_0deg,#1A0F37_180deg,#936FEC_360deg)]"
        : "  gap-0 bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#936FEC_0deg,#1A0F37_180deg,#381A8C_360deg)]"
    }

    shadow-[inset_0_0_0_4px_rgba(255,255,255,0.8)]
  `}
                >
                  <ContactIcon />

                  <span
                    className={`
      inline-block overflow-hidden
      transition-[max-width,opacity] duration-[500ms] ease-in-out

      ${hovered ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0 "}
    `}
                  >
                    Contact Us 
                  </span>
                </Button>

                {/* "Plan A Project" Button: Conic gradient from image, with arrow */}
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => console.log("Plan clicked")}
                  className={`
  text-white
  px-8 py-2.5
  overflow-hidden

  [--a:76.38deg]
  [--c1:#936FEC]
  [--c3:#381A8C]

  bg-[conic-gradient(from_var(--a)_at_69.04%_57.5%,var(--c1)_0deg,#1A0F37_180deg,var(--c3)_360deg)]

  shadow-[inset_0_0_0_4px_rgba(255,255,255,0.8)]

  transition-[--a,--c1,--c3]
  duration-700
  ease-in-out

  hover:[--a:436.38deg]
  hover:[--c1:#381A8C]
  hover:[--c3:#936FEC]
`}
                >
                  Plan A Project
                  {/* Arrow Container */}
                  <span
                    className={`
      ml-3 inline-flex items-center justify-center
      w-8 h-8 rounded-full
      bg-white text-[#3B1D8F]
      transition-all duration-400
    `}
                  >
                    {isHovered ? (
                      <GoArrowRight size={18} />
                    ) : (
                      <GoArrowUpRight size={18} />
                    )}
                  </span>
                </Button>
              </div>
            </div>

            <div className="lg:hidden flex items-center justify-between">
              <Link href="/" className="flex-1 flex justify-center">
                <Image
                  src="/wilmarcs-logo.png"
                  alt="Wilmarcs Logo"
                  width={140}
                  height={36}
                  className="object-contain bg-white p-2"
                />
              </Link>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-white focus:outline-none"
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

          {mobileMenuOpen && (
            <div className="lg:hidden bg-black border-t border-gray-800">
              <div className="px-4 pt-4 pb-8 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-gray-500 hover:text-white transition-colors ${
                      pathname === link.href ? "text-white" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <button className="block w-full text-left  text-gray-500 hover:text-white">
                    Contact Us
                  </button>
                  <button className="block w-full text-center bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">
                    Plan A Project
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {showScrolledNavbar && (
        <nav className="bg-black/90 backdrop-blur-md py-4 fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/wilmarcs-logo.png"
                  alt="Wilmarcs Logo"
                  width={140}
                  height={36}
                  className="object-contain bg-white p-2"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-white focus:outline-none"
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
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="bg-black/90 backdrop-blur-md border-t border-gray-800">
              <div className="px-4 pt-4 pb-8 space-y-4 max-w-7xl mx-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-gray-500 hover:text-white transition-colors ${
                      pathname === link.href ? "text-white" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <button className="block w-full text-left text-gray-500 hover:text-white">
                    Contact Us
                  </button>
                  <button className="block w-full text-center bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">
                    Plan A Project
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

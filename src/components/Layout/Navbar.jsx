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
import { motion, AnimatePresence } from "framer-motion";

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

  // Prevent body scroll when mobile menu is open
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

  return (
    <>
      {/* Initial Navbar - Visible on Home page when not scrolled */}
      {showInitialNavbar && (
        <nav className="bg-black/95 py-5 fixed top-0 left-0 right-0 z-50 rounded-2xl mx-6 mt-3">
          <div className="mx-auto px-6">
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
                          pathname === link.href ? "text-white" : ""
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
                    flex items-center overflow-hidden whitespace-nowrap text-white text-[15px] p-[10px]
                    transition-all duration-[600ms] ease-in-out
                    ${
                      hovered
                        ? "gap-8 pr-4 bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#381A8C_0deg,#1A0F37_180deg,#936FEC_360deg)]"
                        : "gap-0 bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#936FEC_0deg,#1A0F37_180deg,#381A8C_360deg)]"
                    }
                    shadow-[inset_0_0_0_4px_rgba(255,255,255,0.8)]
                  `}
                >
                  <ContactIcon />
                  <span
                    className={`
                      inline-block overflow-hidden transition-[max-width,opacity] duration-[500ms] ease-in-out
                      ${
                        hovered
                          ? "max-w-[120px] opacity-100"
                          : "max-w-0 opacity-0"
                      }
                    `}
                  >
                    Contact Us
                  </span>
                </Button>

                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
                    text-white px-8 py-2.5 overflow-hidden
                    [--a:90.00deg] [--c1:#936FEC] [--c3:#381A8C]
                    bg-[conic-gradient(from_var(--a)_at_50.00%_50.0%,var(--c1)_0deg,#1A0F37_180deg,var(--c3)_360deg)]
                    shadow-[inset_0_0_0_5px_rgba(255,255,255,0.5)]
                    transition-[--a,--c1,--c3] duration-700 ease-in-out
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
            <div className="lg:hidden flex items-center justify-between py-2">
              <Link href="/" className="flex-1 flex justify-center">
                <Image
                  src="/wilmarcs-logo.png"
                  alt="Wilmarcs Logo"
                  width={140}
                  height={36}
                  className="object-contain"
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

      {/* Scrolled Navbar */}
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
                  className="object-contain invert brightness-0"
                />
              </Link>

              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-300
                           focus:outline-none z-50 relative "
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

 
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black z-40 flex flex-col lg:flex-row"
    >
      {/* Left side - Navigation links */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-8 sm:px-12 md:px-16 lg:px-20 pt-24 lg:pt-0 lg:pb-0">
        {/* Close Button - moved to top-right of whole screen */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 lg:right-10 text-white text-5xl sm:text-6xl hover:text-gray-400 focus:outline-none z-50"
        >
          × 
        </button>

        <div className="flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12 text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white mt-10 lg:mt-0">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side - CTA / "Let's talk" area */}
      <div className="w-full lg:w-1/2 bg-black/95 flex flex-col items-start lg:items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-16 lg:py-0 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-8 lg:space-y-12 max-w-md"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Let’s talk about
            <br />
            your project
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-gray-200 transition"
            >
              Contact Us
            </Button>

            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="border border-white text-white px-8 py-4 text-lg font-medium rounded-full hover:bg-white/10 transition"
            >
              Plan a project
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

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

const navLinks = [
  { name: "Home", href: "/", icon: GoHome },
  { name: "About", href: "/about-us", icon: HiOutlineInformationCircle },
  { name: "Services", href: "/services", icon: RiServiceLine },
  { name: "Works", href: "/works", icon: MdOutlineWorkOutline },
  { name: "Process", href: "/process", icon: BsDiagram3 },
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
  const showScrolledNavbar = !isHomePage || scrolled;

  const hoverTransition = {
    duration: 0.45,
    ease: "easeInOut",
  };

  return (
    <>
      {showInitialNavbar && (
        <nav className="bg-black/95 fixed top-0 left-0 right-0 z-50 rounded-2xl mx-6 mt-3 py-2 relative overflow-visible">
          <div className="mx-auto px-6">
            <div className="flex items-center justify-center lg:justify-between">
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

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center justify-between mt-2">
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
                          variants={{ rest: { x: 0 }, hover: { x: 12 } }}
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

              <div className="flex items-center space-x-4">
                <Button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`flex items-center overflow-hidden whitespace-nowrap text-white text-[15px] p-[10px] transition-all duration-[600ms] ease-in-out ${
                    hovered
                      ? "gap-8 pr-4 bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#381A8C_0deg,#1A0F37_180deg,#936FEC_360deg)]"
                      : "gap-0 bg-[conic-gradient(from_76.38deg_at_69.04%_57.5%,#936FEC_0deg,#1A0F37_180deg,#381A8C_360deg)]"
                  } shadow-[inset_0_0_0_4px_rgba(255,255,255,0.8)]`}
                >
                  <ContactIcon />
                  <span
                    className={`inline-block overflow-hidden transition-[max-width,opacity] duration-[500ms] ease-in-out ${
                      hovered
                        ? "max-w-[120px] opacity-100"
                        : "max-w-0 opacity-0"
                    }`}
                  >
                    Contact Us
                  </span>
                </Button>

                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="text-white px-8 py-2.5 overflow-hidden [--a:90.00deg] [--c1:#936FEC] [--c3:#381A8C] bg-[conic-gradient(from_var(--a)_at_50.00%_50.0%,var(--c1)_0deg,#1A0F37_180deg,var(--c3)_360deg)] shadow-[inset_0_0_0_5px_rgba(255,255,255,0.5)] transition-[--a,--c1,--c3] duration-700 ease-in-out hover:[--a:90.00deg] hover:[--c1:#381A8C] hover:[--c3:#936FEC]"
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

            {/* Centered logo background */}
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
          </div>
        </nav>
      )}

      {showScrolledNavbar && (
        <nav className="bg-black py-4 fixed top-0 left-0 right-0 z-40 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
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
                className="text-white hover:text-gray-300 focus:outline-none z-50 relative"
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
            className="fixed inset-0 bg-black z-50"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 focus:outline-none z-60"
            >
              ×
            </button>

            <div className="flex flex-col  px-10 mt-10 pt-10 h-full space-y-6 text-3xl font-bold text-white">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-gray-400 transition-colors ${
                      pathname === link.href ? "" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  delay: navLinks.length * 0.1 + 0.3,
                  duration: 0.6,
                }}
                className="pt-2 space-y-6"
              >
                <button className="block    text-3xl hover:text-gray-400">
                  Contact Us
                </button>
                <button className="block   text-3xl hover:text-gray-40 ">
                  Plan A Project
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BsDiagram3 } from "react-icons/bs";
import { GoHome } from "react-icons/go";

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
        <nav className="bg-black py-6 fixed top-0 left-0 right-0 z-50 rounded-2xl mx-6 mt-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isHome = link.name === "Home";
                  const Icon = link.icon;

                  // ✅ HOME (no animation, icon inside border)
                  if (isHome) {
                    return (
                      <Link key={link.name} href={link.href}>
                        <div className="flex items-center gap-2 border border-white rounded-full px-5 py-1 text-white">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                            <Icon size={16} className="text-black" />
                          </span>
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    );
                  }

                  // ✅ OTHER MENUS (animated)
                  return (
                    <Link key={link.name} href={link.href}>
                      <motion.div
                        className={`relative flex items-center text-gray-500 hover:text-white ${
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

             <div className="absolute left-1/2 -translate-x-1/2 -top-12
                           bg-white px-6 py-4 shadow-lg logo-hex pt-12
                           flex items-center justify-center">
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
                <button className="text-gray-500 hover:text-white transition-colors">
                  Contact Us
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  Plan A Project
                </button>
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Works', href: '/works' },
  { name: 'Process', href: '/process' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const showInitialNavbar = (isHomePage && !scrolled) || !isHomePage;
  const showScrolledNavbar = isHomePage && scrolled;

  return (
    <>
      {showInitialNavbar && (
        <nav className="bg-black py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-500 hover:text-white transition-colors ${pathname === link.href ? 'text-white' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="absolute left-1/2 -translate-x-1/2">
                <Link href="/">
                  <Image
                    src="/wilmarcs-logo.png"
                    alt="Wilmarcs Logo"
                    width={160}
                    height={40}
                    className="object-contain bg-white p-2"
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
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
                    className={`block text-gray-500 hover:text-white transition-colors ${pathname === link.href ? 'text-white' : ''}`}
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
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
                    className={`block text-gray-500 hover:text-white transition-colors ${pathname === link.href ? 'text-white' : ''}`}
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
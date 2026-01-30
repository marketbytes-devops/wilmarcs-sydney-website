"use client";

import "./globals.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/ScrollToTop/index";
import { usePathname } from "next/navigation";
import GoToTop from "@/components/GoToTop";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isThankYou = pathname === "/thank-you" || pathname === "/thank-you/";
  const hideLayout = isThankYou;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <html lang="en">
       <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
        ></script>
      <body>
        <ScrollToTop />
        <GoToTop/>

        {!hideLayout && <Navbar />}

        <div id="smooth-wrapper" className="fixed inset-0 overflow-hidden">
          <div id="smooth-content">
            <main className={isThankYou ? "mt-0" : "sm:mt-10 mt-2"}>
              {children}
            </main>

            {!hideLayout && <Footer />}
          </div>
        </div>
      </body>
    </html>
  );
}
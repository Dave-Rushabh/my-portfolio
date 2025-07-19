"use client";
import { MENUS } from "@/app/utils/getNavbarMenus";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowNavbar(y > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <div
        className={`
        navbar-blur hidden md:flex fixed top-[20px] rounded-2xl w-11/12 mx-auto left-0 right-0 z-50 text-white font-bold shadow-2xl p-6
          transition-all duration-500 ease-in-out
          ${
            showNavbar
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <div className="flex gap-8 items-center justify-between w-1/2 mx-auto">
          {MENUS.map((menu) => (
            <Link
              href={`#${menu.id}`}
              key={menu.id}
              className="hover:underline hover:decoration-white hover:underline-offset-8"
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navbar */}
      <div
        className={`
        navbar-blur md:hidden fixed bottom-5 left-3 right-3 py-4 px-4 rounded-xl text-white font-semibold flex gap-4 justify-center shadow-xl z-50 
          transition-all duration-500 ease-in-out
          ${
            showNavbar
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >
        {MENUS.map((menu) => (
          <Link href={`#${menu.id}`} key={menu.id} className="text-sm">
            {menu.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;

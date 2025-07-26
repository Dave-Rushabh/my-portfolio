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
        <div className="flex gap-8 items-center justify-between w-1/2 mx-auto relative">
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

      {showNavbar ? (
        <button
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
          className="z-10 flex fixed h-10 w-10 md:right-6 md:bottom-6 bottom-20 right-3 bg-[var(--light-theme-accent)] cursor-pointer items-center justify-center rounded-lg text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001"
            xmlSpace="preserve"
            height={24}
            width={24}
            fill="currentColor"
          >
            <path d="m398.998 132.672-128-126.528c-8.341-8.192-21.675-8.192-29.995 0l-128 126.528a21.27 21.27 0 0 0-6.336 15.168v108.139c0 8.64 5.184 16.427 13.163 19.712 7.957 3.307 17.131 1.472 23.253-4.629L256 158.144l112.917 112.917A21.25 21.25 0 0 0 384 277.312c2.752 0 5.525-.512 8.171-1.621 7.979-3.285 13.163-11.072 13.163-19.712V147.84a21.36 21.36 0 0 0-6.336-15.168" />
            <path d="m398.998 367.347-128-126.528c-8.341-8.213-21.675-8.213-29.995 0l-128 126.528a21.27 21.27 0 0 0-6.336 15.168v108.139a21.335 21.335 0 0 0 13.163 19.712c7.957 3.328 17.131 1.472 23.253-4.629L256 392.819l112.917 112.917A21.34 21.34 0 0 0 384 511.987c2.752 0 5.525-.512 8.171-1.621a21.335 21.335 0 0 0 13.163-19.712V382.515a21.36 21.36 0 0 0-6.336-15.168" />
          </svg>
        </button>
      ) : null}
    </>
  );
};

export default Navbar;

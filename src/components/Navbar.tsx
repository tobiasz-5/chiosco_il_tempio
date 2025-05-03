"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import ReactCountryFlag from "react-country-flag";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";



export default function Navbar() {
  const { i18n, ready } = useTranslation();
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsTop(y <= 10);
      setShow(y < lastY || y <= 10);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const changeLanguage = (lng: "it" | "en") => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  };

  if (!ready) return null;

  const flagStyle = { width: "1.2rem", height: "1.2rem", borderRadius: "50%" };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        show ? "translate-y-0" : "-translate-y-full",
        isTop ? "bg-transparent" : "bg-white shadow"
      )}
    >
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-[72px]">
        {/* sinistra (desktop) */}
        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Eventi</a>
        </div>

        {/* logo centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
          src={isTop ? "/logo_white_chiosco.png" : "/logo_blue_chiosco.png"}
          alt="Logo Il Tempio"
          width={120}
          height={40}
          className="h-10 w-auto transition-all duration-300"
          />
        </div>

        {/* destra + hamburger */}
        <div className="flex items-center gap-4">
          {/* hamburger (mobile) */}
          <div className="md:hidden absolute right-4 top-1/2 pt-2 -translate-y-1/2">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <span className="relative block w-6 h-6 rounded-full border-2 flex items-center justify-center
                transition-all duration-300"
                style={{ borderColor: isTop ? "#fff" : "#337aff" }}
              >
                <span
                  className="absolute text-xs"
                  style={{ color: isTop ? "#fff" : "#337aff" }}
                >
                  ×
                </span>
              </span>
            ) : (
              <HiMenu size={26} color={isTop ? "#fff" : "#337aff"} />
            )}

            </button>
          </div>

          {/* destra (desktop) */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="#">Chi siamo</a>
            <a href="#">Contatti</a>
            <button onClick={() => changeLanguage("it")} aria-label="Italiano">
              <ReactCountryFlag countryCode="IT" svg style={flagStyle} />
            </button>
            <button onClick={() => changeLanguage("en")} aria-label="English">
              <ReactCountryFlag countryCode="GB" svg style={flagStyle} />
            </button>
          </div>
        </div>
      </div>

      {/* menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-center">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>Eventi</a>
          <a href="#" onClick={() => setIsOpen(false)}>Chi siamo</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contatti</a>
          <div className="flex justify-center gap-4 pt-2">
            <button onClick={() => changeLanguage("it")} aria-label="Italiano">
              <ReactCountryFlag countryCode="IT" svg style={flagStyle} />
            </button>
            <button onClick={() => changeLanguage("en")} aria-label="English">
              <ReactCountryFlag countryCode="GB" svg style={flagStyle} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

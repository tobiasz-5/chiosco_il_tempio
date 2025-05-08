"use client";

import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomeClient() {
  const { t, ready } = useTranslation(); // ✅ Nessun namespace specificato
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    // Prima animazione
    controls.set({
      opacity: 0,
      scale: 0.6,
      y: -100,
      filter: "blur(20px)",
    });

    controls
      .start({
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 3.5,
          ease: [0.22, 1, 0.36, 1],
          scale: {
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 1.2,
          },
        },
      })
      .then(() => {
        controls.start({
          rotate: [0, -4, 4, -3, 3, -2, 2, 0],
          transition: { duration: 1.2, ease: "easeInOut" },
        });
      });

    // Observer: rientro nel viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            rotate: [0, -4, 4, -3, 3, -2, 2, 0],
            transition: { duration: 1.2, ease: "easeInOut" },
          });
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [ready, controls]);

  if (!ready) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center md:bg-center bg-[center_top_42%] mt-[-55px] md:mt-0 flex items-center justify-center"
        style={{ backgroundImage: "url('/chiosco.webp')" }}
      >
        <motion.div ref={containerRef} animate={controls}>
          <Image
            src="/logo_copertina.webp"
            alt="Chiosco Il Tempio"
            width={500}
            height={300}
            className="w-[300px] md:w-[400px] lg:w-[500px]"
            priority
          />
        </motion.div>
      </section>

      {/* Logo Scroller Section (ripetizione) */}
      <section className="bg-white overflow-hidden py-6">
        <div className="whitespace-nowrap">
          <div className="animate-scroll">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i + 10} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#009246]">{t("info.title")}</h2>
          <p className="text-lg leading-relaxed text-[#009246] mx-auto max-w-3xl">
            {t("info.description")}{" "}
            <span className="block mt-2">
              {t("info.seasons.may_sept")}
            </span>
            <span className="block mt-1">
              {t("info.seasons.oct")}
            </span>
            <span className="block mt-1">
              {t("info.seasons.nov")}
            </span>
            <span className="block mt-1">
              {t("info.seasons.dec")}
            </span>
            <span className="block mt-1">
              {t("info.seasons.jan_feb")}
            </span>
            <span className="block mt-1">
              {t("info.seasons.mar_apr")}
            </span>
            <span className="block mt-4">
              {t("info.footer")}
            </span>
            <span className="block mt-4">
              {t("info.booking")}{" "}
              <a 
                href="tel:+393717665575" 
                className="text-[#009246] underline hover:text-[#337aff] transition"
              >
                +39 371 766 5575
              </a>
            </span>
          </p>
        </div>
      </section>

      {/* Logo Scroller Section */}
      <section className="bg-white overflow-hidden py-6">
        <div className="whitespace-nowrap">
          <div className="animate-scroll">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i + 10} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#009246]">{t("contacts.title")}</h2>
          <ul className="space-y-4 text-lg text-[#009246] max-w-md mx-auto">
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Lungarno+del+Tempio%2C+50126+Firenze+FI " 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[#337aff] transition"
              >
                Lungarno del Tempio, 50126 Firenze FI
              </a>
            </li>
            <li>
              <a 
                href="tel:+393717665575" 
                className="underline hover:text-[#337aff] transition"
              >
                +39 371 766 5575
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Logo Scroller Section (ripetizione) */}
      <section className="bg-white overflow-hidden py-6">
        <div className="whitespace-nowrap">
          <div className="animate-scroll">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i + 10} className="inline-block mx-4">
                <Image
                  src="/logo_copertina.webp"
                  alt="Logo Chiosco Il Tempio"
                  width={120}
                  height={120}
                />
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
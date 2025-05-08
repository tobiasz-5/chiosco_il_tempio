"use client";

import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomeClient() {
  const { t, ready } = useTranslation();
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

            {/* Logo Scroller Section */}
            <section className="bg-white overflow-hidden py-6">
        <div className="whitespace-nowrap">
          <div className="animate-scroll">
            {/* Ripetizione del logo per creare lo scorrimento */}
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
            {/* Copia identica per loop continuo */}
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
          <h2 className="text-2xl font-bold mb-6 text-[#009246]">Info</h2>
          <p className="text-lg leading-relaxed text-[#009246] mx-auto max-w-3xl">
            Chiosco Il Tempio è aperto tutto l’anno con orari stagionali:{" "}
            <span className="block mt-2">
              Da Maggio a Settembre: tutti i giorni dalle <strong>9:00 alle 24:00</strong>.
            </span>
            <span className="block mt-1">
              Ottobre: aperto tutti i giorni dalle <strong>9:00 alle 21:00</strong>.
            </span>
            <span className="block mt-1">
              Novembre: aperto dalle <strong>10:00 alle 18:00</strong>, tutti i giorni.
            </span>
            <span className="block mt-1">
              Dicembre: chiuso.
            </span>
            <span className="block mt-1">
              Gennaio - Febbraio: aperto solo in caso di bel tempo.
            </span>
            <span className="block mt-1">
              Marzo - Aprile: aperto dalle <strong>9:00 alle 21:00</strong>, salvo in caso di maltempo.
            </span>
            <span className="block mt-4">
              Un punto di riferimento per chi cerca un momento di relax in uno spazio verde nel centro di Firenze.
            </span>
            <span className="block mt-4">
              Per organizzare feste di laurea, è possibile prenotare dei tavoli chiamando al seguente numero:{" "}
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
            {/* Ripetizione del logo per creare lo scorrimento */}
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
            {/* Copia identica per loop continuo */}
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
          <h2 className="text-2xl font-bold mb-6 text-[#009246]">Contatti</h2>
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
            {/* Logo Scroller Section */}
            <section className="bg-white overflow-hidden py-6">
        <div className="whitespace-nowrap">
          <div className="animate-scroll">
            {/* Ripetizione del logo per creare lo scorrimento */}
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
            {/* Copia identica per loop continuo */}
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
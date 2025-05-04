"use client";

// import "../i18n";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomeClient() {
  const { t , ready } = useTranslation();
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
      <section
        // className="h-screen bg-cover bg-center flex items-center justify-center"
        className="h-screen bg-cover bg-center md:bg-center bg-[center_top_20%] flex items-center justify-center"
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

      <section className="h-[150vh] flex items-center justify-center bg-white">
        <h2 className="text-3xl">{t("test_translation")} 👇</h2>
      </section>
    </main>
  );
}

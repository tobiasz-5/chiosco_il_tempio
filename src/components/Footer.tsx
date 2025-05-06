// src/components/Footer.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#337aff] text-[#337aff] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Contatti */}
        <div className="text-center md:text-left">
          <p> Lungarno del Tempio, Firenze</p>
          <p> 333 369 4137</p>
          {/* <p> info@chioscoiltempio.it</p> */}
        </div>

        {/* Logo animato */}
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: [0, -3, 3, -2, 2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/logo_copertina.webp"
              alt="Chiosco Il Tempio"
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Social */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#337aff] py-4 text-xs px-4">
  <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-2">
    <div className="w-full md:w-1/3 text-center md:text-left">
      <span>&copy; 2025 Chiosco Il Tempio. Tutti i diritti riservati.</span>
    </div>
    <div className="w-full md:w-1/3 text-center">
      <a href="/privacy-policy" className="hover:underline text-[#337aff]">
        Privacy & Cookie Policy
      </a>
    </div>
    <div className="w-full md:w-1/3 text-center md:text-right">
      <span className="text-[#337aff]">
        made with 💙 by T. Schettini
      </span>
    </div>
  </div>
</div>

    </footer>
  );
}

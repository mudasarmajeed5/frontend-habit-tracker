"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Design" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          SH.
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Designer",
  "Freelance Graphic Designer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-indigo-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Sarosh Hussain</span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <span className="text-xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse text-indigo-400">|</span>
            </span>
          </div>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting responsive web interfaces, digital products, and visual
            experiences that combine modern frontend development with creative
            design thinking.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium flex items-center gap-2 hover:bg-indigo-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-full border border-indigo-500/50 text-indigo-300 font-medium flex items-center gap-2 hover:bg-indigo-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-gray-500" size={24} />
        </a>
      </motion.div>
    </section>
  );
}

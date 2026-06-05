"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center mb-16">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6 }}
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.p
        className="text-gray-400 text-base md:text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

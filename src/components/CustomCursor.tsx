"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-indigo-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-indigo-400/50 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Link2, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; 2024 Sarosh Hussain. Built with Next.js & React.
        </motion.p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:hsarosh569@gmail.com"
            className="text-gray-500 hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sarosh-hussain-505a563aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
          <a
            href="https://www.behance.net/saroshhussain1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-400 transition-colors"
            aria-label="Behance"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

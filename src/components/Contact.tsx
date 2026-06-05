"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Link2, Send, ExternalLink } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hsarosh569@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I&apos;m currently looking for Frontend Developer, React
              Developer, UI Engineer, and UI/UX-related opportunities. Whether
              you have a project in mind or just want to connect, I&apos;d love
              to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hsarosh569@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">hsarosh569@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sarosh-hussain-505a563aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  <Link2 size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium flex items-center gap-1">
                    Sarosh Hussain <ExternalLink size={12} />
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Rawalpindi, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-indigo-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

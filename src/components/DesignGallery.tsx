"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  { src: "/gallery/IMG_2324.PNG", title: "Brand Design", category: "Branding" },
  { src: "/gallery/IMG_2325.PNG", title: "Social Media Creative", category: "Marketing" },
  { src: "/gallery/IMG_2326.PNG", title: "Visual Campaign", category: "Advertising" },
  { src: "/gallery/IMG_2327.PNG", title: "Digital Marketing Asset", category: "Marketing" },
  { src: "/gallery/IMG_2328.PNG", title: "Brand Identity Design", category: "Branding" },
  { src: "/gallery/IMG_2329.PNG", title: "Creative Direction", category: "Design" },
];

export function DesignGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionHeading
          title="Design Portfolio"
          subtitle="Real client work and branding projects created across freelance and agency collaborations"
        />

        <motion.p
          className="text-center text-gray-400 text-sm mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5 }}
        >
          These are real branding, social media, and marketing projects created
          for international clients — showcasing visual design capability and
          creative direction skills.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium text-sm">
                    {image.title}
                  </p>
                  <p className="text-indigo-300 text-xs">{image.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-indigo-500/30 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://www.behance.net/saroshhussain1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
          >
            View full portfolio on Behance
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              className="relative w-[90vw] h-[80vh] max-w-3xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white font-medium">
                  {galleryImages[selectedIndex].title}
                </p>
                <p className="text-gray-400 text-sm">
                  {galleryImages[selectedIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

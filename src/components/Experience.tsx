"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Graphic Designer",
    company: "Fiverr",
    location: "Remote",
    period: "Present",
    description:
      "Working with international clients on branding, social media content, and video editing projects.",
    achievements: [
      "Branding projects for diverse industries",
      "Social media creatives and ad visuals",
      "Video editing and reel production",
      "International client collaboration",
      "Marketing visual campaigns",
    ],
  },
  {
    title: "Associate Graphic Designer",
    company: "Devscale Tech",
    location: "Remote",
    period: "Jul 2024 – Oct 2025",
    description:
      "Designed branding and marketing materials for international clients while collaborating with creative and marketing teams.",
    achievements: [
      "Nexus United Tax – Promotional graphics & branding",
      "TaxUSA – Ad creatives & social media campaigns",
      "BocaBay – Brand-focused visuals & digital marketing",
      "Maintained consistent brand identity across platforms",
      "Improved visual communication and audience engagement",
    ],
  },
  {
    title: "Graphic Design Intern",
    company: "IGH Consultants",
    location: "Remote",
    period: "Jan 2024 – Jun 2024",
    description:
      "Created professional marketing materials and social media creatives aligned with brand identity.",
    achievements: [
      "Social media content design",
      "Branding support and visual identity",
      "Marketing visual creation",
      "Digital content optimization",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and contributions"
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-20" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0a0a0f] z-10" />

              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass rounded-xl p-6 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-indigo-400 text-sm mb-2">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

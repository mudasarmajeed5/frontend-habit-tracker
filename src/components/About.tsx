"use client";

import { SectionHeading } from "./SectionHeading";
import { Code2, Palette, Globe, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "React, Next.js, JavaScript & modern web technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design with Figma & Adobe Creative Suite",
  },
  {
    icon: Globe,
    title: "International Clients",
    desc: "Freelance experience with global brands & agencies",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    desc: "Branding, visual identity & digital marketing",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A creative developer passionate about building beautiful digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a creative Frontend Developer and UI/UX Designer with
              experience building responsive web interfaces, digital products,
              branding assets, and visual experiences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With a strong focus on React, JavaScript, UI Development, and
              User Experience, I combine technical expertise with creative
              design thinking to deliver products that are both functional and
              visually compelling.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;ve collaborated with international clients through freelance
              work and agency environments, delivering branding, marketing
              visuals, and frontend solutions across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass rounded-xl p-5 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon className="text-indigo-400 mb-3" size={24} />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

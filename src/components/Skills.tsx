"use client";

import { SectionHeading } from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind", level: 90 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Backend & Databases",
    color: "from-emerald-500 to-cyan-500",
    skills: [
      { name: "Python", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "SQLite", level: 70 },
      { name: "CRUD Operations", level: 80 },
      { name: ".NET", level: 65 },
    ],
  },
  {
    title: "Design",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe Suite", level: 85 },
      { name: "Canva", level: 95 },
      { name: "Branding", level: 85 },
      { name: "Social Media Design", level: 90 },
      { name: "UI Design", level: 88 },
      { name: "UX Design", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <h3
                className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Code, Layers, Brain, Tv, GitBranch } from "lucide-react";

const projects = [
  {
    title: "BACHAT",
    subtitle: "Smart Price-Tracking Platform",
    icon: Layers,
    color: "from-indigo-500 to-violet-500",
    github: "https://github.com/mudasarmajeed5/price-watch",
    description:
      "A smart price-tracking platform that allows users to paste product URLs from multiple brands and e-commerce stores. Tracks specific products and notifies users exactly when prices drop.",
    features: [
      "Product URL tracking",
      "Daily price monitoring",
      "Price-drop notifications",
      "Multi-brand aggregation",
      "Centralized shopping experience",
    ],
    highlight: "Software Design & Architecture Project",
    problem:
      "Users normally receive generic sale notifications. BACHAT tracks specific products and notifies users exactly when the products they care about become cheaper.",
  },
  {
    title: "Netflix Clone",
    subtitle: "Responsive Streaming UI",
    icon: Tv,
    color: "from-red-500 to-pink-500",
    github: "https://github.com/SaroshHussain/UI-Clone",
    description:
      "A responsive Netflix-inspired UI built with modern frontend technologies, focusing on component architecture and advanced layout design.",
    features: [
      "Responsive UI implementation",
      "Component-based architecture",
      "Advanced layout design",
      "Modern frontend patterns",
    ],
    highlight: "Frontend Development Showcase",
  },
  {
    title: "HTMS",
    subtitle: "Hotel Management System",
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    github: "https://github.com/SaroshHussain/HTMS_ConnectedwithMySqlWorkbech",
    description:
      "Fully functional Windows Forms application with MySQL database integration and asynchronous programming using async/await in .NET.",
    features: [
      "Full CRUD Operations",
      "MySQL database integration",
      "Async/Await implementation",
      "Backend workflow optimization",
      "Relational database schema design",
    ],
    highlight: "C# · .NET · MySQL",
  },
  {
    title: "AI Study Assistant",
    subtitle: "Intelligent Learning Tool",
    icon: Brain,
    color: "from-amber-500 to-orange-500",
    github: "https://github.com/mudasarmajeed5/ai-study-assistant",
    description:
      "An AI-powered study assistant that generates summaries, quizzes, and flashcards from user content using NLP algorithms.",
    features: [
      "Auto-generated summaries",
      "Smart flashcard creation",
      "Quiz generation",
      "TF-IDF topic analysis",
      "K-Means clustering",
    ],
    highlight: "Python · Streamlit · NLP",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Featured work showcasing my technical capabilities"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <project.icon className="text-white" size={22} />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <GitBranch size={18} />
                  <ExternalLink size={14} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-indigo-400 text-sm font-medium mb-3">
                {project.subtitle}
              </p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.problem && (
                <div className="glass rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-300">
                    <span className="text-indigo-400 font-semibold">
                      Problem Solved:{" "}
                    </span>
                    {project.problem}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div
                  className={`inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-medium`}
                >
                  {project.highlight}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  View Source →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

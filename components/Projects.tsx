"use client";
import { Code } from "lucide-react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { link } from "fs";

function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      number: "01",
      category: "NEKO LANDING PAGE",
      title: "ANDRES GOMEZ - PORTFOLIO",
      description:
        "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
      gradient: "from-[#EB5E28] to-[#FF7F50]",
      year: "2024",
      side: "left" as const,
      tech: [
        "NEXT.JS",
        "REACT",
        "TYPESCRIPT",
        "TAILWIND CSS",
        "LUCIDE-REACT",
        "FRAMER MOTION",
      ],
      image: "/projects/andres1.png",
      link: "andres-gomez",
    },
    {
      id: 2,
      number: "02",
      category: "WEB PAGE",
      title: "NEKO LANDING PAGE",
      description:
        "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
      gradient: "from-[#BFBAB0] to-[#FFFDF1]",
      year: "2025",
      side: "right" as const,
      tech: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
      image: "/projects/neko1.png",
      link: "neko-landing",
    },
    {
      id: 3,
      number: "03",
      category: "WEB PAGE",
      title: "MAGIC CREAM - LANDING PAGE",
      description:
        "Platform for connecting creative minds and fostering collaboration in digital spaces",
      gradient: "from-[#EB5E28] to-[#FF7F50]",
      year: "2025",
      side: "left" as const,
      tech: [
        "REACT",
        "TYPESCRIPT",
        "TAILWIND CSS",
        "LUCIDE-REACT",
        "FRAMER MOTION",
      ],
      image: "/projects/magic1.png",
      link: "magic-cream",
    },
  ];

  return (
    <div className="min-h-screen mt-16 md:mt-30">
      <h1 className="text-5xl md:text-8xl  font-bold mb-8 md:mb-4 leading-none tracking-tight uppercase">
        Projects
      </h1>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Dotted Line in Center */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #BFBAB0 0, #FFFDF1 5px, transparent 5px, transparent 10px)",
          }}
        ></div>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            number={project.number}
            category={project.category}
            title={project.title}
            gradient={project.gradient}
            year={project.year}
            side={project.side}
            tech={project.tech}
            image={project.image}
            isHovered={hoveredCard === project.id}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            link={project.link}
          />
        ))}
      </div>

      {/* Footer decoration */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 text-center text-neutral-600">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-neutral-800"></div>
          <Code className="w-5 h-5" />
          <div className="w-16 h-px bg-neutral-800"></div>
        </div>
        <p className="mt-4">Built with passion and creativity</p>
      </div>
    </div>
  );
}

export default Projects;

import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiExpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";

// Define skill data with vibrant colors for each icon
const skills = [
  // Frontend
  { icon: <FaHtml5 style={{ color: "#E34F26" }} />, level: 95, category: "frontend" }, // HTML5: Orange
  { icon: <FaJs style={{ color: "#F7DF1E" }} />, level: 90, category: "frontend" }, // JS: Yellow
  { icon: <FaReact style={{ color: "#61DAFB" }} />, level: 90, category: "frontend" }, // React: Cyan
  { icon: <SiTypescript style={{ color: "#3178C6" }} />, level: 85, category: "frontend" }, // TypeScript: Blue
  { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, level: 90, category: "frontend" }, // Tailwind: Teal
  { icon: <SiNextdotjs style={{ color: "#000000" }} />, level: 80, category: "frontend" }, // Next.js: Black

  // Backend
  { icon: <FaNodeJs style={{ color: "#339933" }} />, level: 80, category: "backend" }, // Node.js: Green
  { icon: <SiExpress style={{ color: "#000000" }} />, level: 75, category: "backend" }, // Express: Black
  { icon: <SiMongodb style={{ color: "#47A248" }} />, level: 70, category: "backend" }, // MongoDB: Green
  { icon: <SiPostgresql style={{ color: "#336791" }} />, level: 65, category: "backend" }, // PostgreSQL: Blue
  { icon: <SiGraphql style={{ color: "#E10098" }} />, level: 60, category: "backend" }, // GraphQL: Pink
  { icon: <FaJava style={{ color: "#007396" }} />, level: 70, category: "backend" }, // Java: Blue
  { icon: <BiLogoSpringBoot style={{ color: "#6DB33F" }} />, level: 70, category: "backend" }, // Spring Boot: Green

  // Tools
  { icon: <FaGitAlt style={{ color: "#F05032" }} />, level: 90, category: "tools" }, // Git: Orange
  { icon: <FaDocker style={{ color: "#2496ED" }} />, level: 70, category: "tools" }, // Docker: Blue
  { icon: <FaFigma style={{ color: "#F24E1E" }} />, level: 85, category: "tools" }, // Figma: Orange
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-0 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center text-glow">
          <span className="text-primary"> Skills </span>
        </h2>
        <hr className="border-t-2 border-[#E5E7EB] w-26 mx-auto mb-12" />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 capitalize transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 card-hover flex flex-col items-center rounded-lg p-6 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="mb-2 text-4xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                title="Skill Icon"
              >
                {skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
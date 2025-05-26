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
  FaDigitalOcean,
  FaNpm,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiExpress,
  SiIntellijidea,
  SiRabbitmq,
  SiHibernate,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandYarn } from "react-icons/tb";

// Skills data
const skills = [
  { icon: <FaHtml5 style={{ color: "#E34F26" }} />, level: 95, name: "HTML5", category: "frontend" },
  { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, level: 90, name: "CSS3", category: "frontend" },
  { icon: <FaJs style={{ color: "#F7DF1E" }} />, level: 90, name: "JavaScript", category: "frontend" },
  { icon: <FaReact style={{ color: "#61DAFB" }} />, level: 90, name: "React", category: "frontend" },
  { icon: <SiTypescript style={{ color: "#3178C6" }} />, level: 85, name: "TypeScript", category: "frontend" },
  { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, level: 90, name: "Tailwind", category: "frontend" },
  { icon: <SiNextdotjs style={{ color: "#000000" }} />, level: 80, name: "Next.js", category: "frontend" },

  { icon: <FaNodeJs style={{ color: "#339933" }} />, level: 80, name: "Node.js", category: "backend" },
  { icon: <SiExpress style={{ color: "#000000" }} />, level: 75, name: "Express", category: "backend" },
  { icon: <SiMongodb style={{ color: "#47A248" }} />, level: 70, name: "MongoDB", category: "backend" },
  { icon: <SiPostgresql style={{ color: "#336791" }} />, level: 65, name: "PostgreSQL", category: "backend" },
  { icon: <SiHibernate style={{ color: "#59666C" }} />, level: 60, name: "Hibernate", category: "backend" },
  { icon: <SiGraphql style={{ color: "#E10098" }} />, level: 60, name: "GraphQL", category: "backend" },
  { icon: <FaJava style={{ color: "#007396" }} />, level: 70, name: "Java", category: "backend" },
  { icon: <BiLogoSpringBoot style={{ color: "#6DB33F" }} />, level: 70, name: "Spring Boot", category: "backend" },

  { icon: <FaGitAlt style={{ color: "#F05032" }} />, level: 90, name: "Git", category: "tools" },
  { icon: <FaGithub style={{ color: "#181717" }} />, level: 90, name: "GitHub", category: "tools" },
  { icon: <FaDocker style={{ color: "#2496ED" }} />, level: 70, name: "Docker", category: "tools" },
  { icon: <FaFigma style={{ color: "#F24E1E" }} />, level: 85, name: "Figma", category: "tools" },
  { icon: <VscVscodeInsiders style={{ color: "#007ACC" }} />, level: 90, name: "VS Code", category: "tools" },
  { icon: <SiIntellijidea style={{ color: "#000000" }} />, level: 80, name: "IntelliJ", category: "tools" },
  { icon: <SiRabbitmq style={{ color: "#FF6600" }} />, level: 60, name: "RabbitMQ", category: "tools" },
  { icon: <FaDigitalOcean style={{ color: "#0080FF" }} />, level: 70, name: "DigitalOcean", category: "tools" },

  { icon: <FaNpm style={{ color: "#CB3837" }} />, level: 85, name: "NPM", category: "Package Managers" },
  { icon: <TbBrandYarn style={{ color: "#2C8EBB" }} />, level: 80, name: "Yarn", category: "Package Managers" },
];

const categories = ["all", "frontend", "backend", "tools", "Package Managers"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-glow">
          <span className="text-primary"> My Skills </span>
        </h2>
        <hr className="border-t-2 border-gray-300 w-24 mx-auto mb-12" />

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 capitalize font-medium transition-colors duration-300 text-sm",
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 hover:shadow-xl rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-lg font-semibold">{skill.name}</div>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${skill.level}%`,
                    background:
                      skill.level >= 85
                        ? "#22c55e"
                        : skill.level >= 70
                        ? "#3b82f6"
                        : "#f97316",
                  }}
                ></div>
              </div>
              <div className="text-sm text-right mt-1 text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

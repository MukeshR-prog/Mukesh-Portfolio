import { Briefcase } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiVercel,
  SiMui,
  SiNextui,
  SiMysql,
  SiRender,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  companyLink,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  const skillsIcon = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "#e34f26",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "#1572b6",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#ffd600",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178c6",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61dafb",
      url: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#",
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#38bdf8",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764abc",
      url: "https://redux.js.org/",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#68a063",
      url: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#68a063",
      url: "https://expressjs.com/",
    },
    { name: "MUI", icon: SiMui, color: "0582ff", url: "https://mui.com/" },
    {
      name: "HeroUI",
      icon: SiNextui,
      color: "ffffff",
      url: "https://heroui.com/",
    },
    // { name: "GraphQL", icon: SiGraphql, color: "#e535ab", url: "https://graphql.org/" },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47a248",
      url: "https://www.mongodb.com/",
    },
    {
      name: "MySql",
      icon: SiMysql,
      color: "004b5e",
      url: "https://www.mysql.com/",
    },
    // { name: "Prisma", icon: SiPrisma, color: "#186997", url: "https://www.prisma.io/" },
    {
      name: "Firebase",
      icon: IoLogoFirebase,
      color: "#ffca28",
      url: "https://firebase.google.com/",
    },
    // { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
    {
      name: "Java",
      icon: FaJava,
      color: "#f7b731",
      url: "https://www.java.com/",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#306998",
      url: "https://www.python.org/",
    },
    // { name: "AWS", icon: FaAws, color: "#ff9900", url: "https://aws.amazon.com/" },
    {
      name: "VS Code",
      icon: VscVscode,
      color: "#007acc",
      url: "https://code.visualstudio.com/",
    },
    { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
    { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#ff6c37",
      url: "https://www.postman.com/",
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "#646cff",
      url: "https://vitejs.dev/",
    },
    { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
    { name: "Render", icon: SiRender, color: "#", url: "https://render.com/" },
  ];
  const getSkillMeta = (name: string) =>
    skillsIcon.find((s) => s.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="relative group pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-[-16px] top-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>

      {/* Experience Card */}
      <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl">
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h3>
              {companyLink ? (
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  {company}
                </a>
              ) : (
                <span className="text-base text-blue-600 dark:text-blue-400 underline">
                  {company}
                </span>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {period}
              </p>
            </div>
          </div>

          {/* Description (Custom Blue Bullets) */}
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            {description.split("\n").map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  •
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => {
              const skillMeta = getSkillMeta(skill);
              const Icon = skillMeta?.icon;
              return (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 text-sm font-medium bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-[var(--skill-color)]"
                  style={
                    {
                      // fallback to blue if no color
                      "--skill-color": skillMeta?.color || "#3B82F6",
                    } as React.CSSProperties
                  }
                >
                  {Icon && (
                    <Icon
                      className="w-4 h-4"
                      style={skillMeta?.color ? { color: skillMeta.color } : {}}
                    />
                  )}
                  <span>{skill}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

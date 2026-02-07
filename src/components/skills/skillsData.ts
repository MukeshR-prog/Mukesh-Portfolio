import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiGit, SiGithub,
  SiPostman, SiVite, SiVercel, SiMui, SiNextui, SiMysql, SiRender,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon | IconType;
  color: string;
  url: string;
}

export interface SkillCategoryData {
  title: string;
  description: string;
  accentColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    accentColor: "#3b82f6",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
      { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
      { name: "Next.js", icon: SiNextdotjs, color: "#", url: "https://nextjs.org/" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
      { name: "Redux", icon: SiRedux, color: "#764abc", url: "https://redux.js.org/" },
      { name: "MUI", icon: SiMui, color: "#0582ff", url: "https://mui.com/" },
      { name: "HeroUI", icon: SiNextui, color: "#", url: "https://heroui.com/" },
    ],
  },
  {
    title: "Backend",
    description: "Powering applications with robust server-side logic",
    accentColor: "#10b981",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
      { name: "Express.js", icon: SiExpress, color: "#68a063", url: "https://expressjs.com/" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
      { name: "MySQL", icon: SiMysql, color: "#004b5e", url: "https://www.mysql.com/" },
      { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
    ],
  },
  {
    title: "Languages",
    description: "Core programming languages I work with",
    accentColor: "#f59e0b",
    skills: [
      { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
      { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Dev tools and platforms that streamline my workflow",
    accentColor: "#8b5cf6",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
      { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, color: "#", url: "https://github.com/" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37", url: "https://www.postman.com/" },
      { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
      { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
      { name: "Render", icon: SiRender, color: "#", url: "https://render.com/" },
    ],
  },
];

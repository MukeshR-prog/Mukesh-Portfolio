import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";


const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Crayon'd",
    companyLink: "https://www.crayond.com/",
    period: "Sep 2024 - Apr 2025",
    description: `Developed and maintained dynamic web applications using the MERN stack for seamless user experience. 
    Designed and developed a real-time interactive dashboard that significantly increased user engagement by 40%. 
    Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.`,
    skills: ["Next.js","React", "Node.js", "MongoDB", "Express.js", "TypeScript", "TailwindCSS", "Git", "JavaScript"],
  },
  // {
  //   title: "Web Development Lead",
  //   company: "College Tech Club",
  //   period: "Aug 2024 - Present",
  //   description: `Led a dedicated team of 4 developers in designing and creating the college event management platform. 
  //   Successfully launched a scalable event platform used by 1000+ students, improving event organization. 
  //   Mentored and guided 4 junior developers in modern full-stack web technologies and best coding practices.`,
  //   skills: ["Next.js", "PostgreSQL", "Git", "TailwindCSS", "Team Leadership"],
  // },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute top-20 right-16 w-56 h-56 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#expGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="195" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="expGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-24 left-12 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-blue-500/40 dark:border-blue-400/50 rounded-bl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
          />
        </motion.div>

        {/* Floating briefcase icon */}
        <motion.div
          animate={{ y: [-5, 5, -5], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-16 text-5xl text-blue-500/20 dark:text-blue-400/30 pointer-events-none"
        >
          💼
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute bottom-1/4 right-20 w-20 h-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-blue-500/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute inset-0 border border-purple-500/30 rounded-full"
          />
          <div className="absolute inset-1/3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most.">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

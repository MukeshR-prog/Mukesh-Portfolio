import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCategory } from "./skills/SkillCategory.tsx";
import { skillCategories } from "./skills/skillsData";

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background - like Hero */}
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          
          {/* Gradient mesh effect */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10" />
        </div>

        {/* Animated floating gradient orbs - like Hero section */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Floating particles */}
        <motion.div
          animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-purple-500/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-blue-400/50 rounded-full blur-sm"
        />

        {/* Animated revolving orbital rings - like Hero section */}
        <div className="absolute top-16 left-16 w-56 h-56 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#skillsGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            {/* Orbiting dots */}
            <circle cx="100" cy="5" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="195" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="5" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="skillsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Second orbital ring - right side */}
        <div className="absolute top-1/3 right-10 w-72 h-72 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="97" fill="none" stroke="url(#skillsGradient2)" strokeWidth="0.6" strokeDasharray="2 14" opacity="0.4" />
            <circle cx="100" cy="3" r="2.5" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="197" cy="100" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="197" r="2.5" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="1.4s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="skillsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Third smaller orbital ring - bottom */}
        <div className="absolute bottom-20 left-1/4 w-40 h-40 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#skillsGradient3)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.35" />
            <circle cx="100" cy="10" r="2" fill="#3b82f6" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="skillsGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accents - like Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-20 right-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-blue-500/50 dark:border-blue-400/60 rounded-tr-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute bottom-20 left-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-purple-500/50 dark:border-purple-400/60 rounded-bl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
            className="absolute bottom-0 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Tech circuit lines */}
        <svg className="absolute top-1/4 left-1/4 w-64 h-64 pointer-events-none opacity-20 dark:opacity-30" viewBox="0 0 100 100">
          <motion.path
            d="M10,50 L30,50 L35,40 L50,40 L55,50 L90,50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M50,10 L50,30 L60,35 L60,50 L50,55 L50,90"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <circle cx="35" cy="40" r="2" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="35" r="2" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="50" r="2" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Floating tech symbols */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-20 text-3xl font-mono text-blue-500/25 dark:text-blue-400/35 pointer-events-none"
        >
          {"</>"}
        </motion.div>
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 left-20 text-2xl font-mono text-purple-500/25 dark:text-purple-400/35 pointer-events-none"
        >
          {"{ }"}
        </motion.div>
        <motion.div
          animate={{ y: [-4, 4, -4], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/4 text-xl font-mono text-blue-500/20 dark:text-blue-400/30 pointer-events-none"
        >
          {"[ ]"}
        </motion.div>

        {/* Glowing pulse rings */}
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-blue-500/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute inset-0 border border-purple-500/30 rounded-full"
          />
          <div className="absolute inset-1/3 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-sm" />
        </div>

        {/* Double helix DNA-like pattern */}
        <div className="absolute top-1/2 right-8 h-64 pointer-events-none opacity-30 dark:opacity-40">
          <motion.svg
            width="40" height="200" viewBox="0 0 40 200"
          >
            <motion.path
              d="M5,0 Q35,25 5,50 Q35,75 5,100 Q35,125 5,150 Q35,175 5,200"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M35,0 Q5,25 35,50 Q5,75 35,100 Q5,125 35,150 Q5,175 35,200"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.2 }}
            />
            {[0, 50, 100, 150].map((y, i) => (
              <motion.line
                key={i}
                x1="5" y1={y} x2="35" y2={y}
                stroke="#6366f1"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.svg>
        </div>

        {/* Animated hexagon grid */}
        <div className="absolute top-20 left-1/3 pointer-events-none opacity-25 dark:opacity-35">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            width="100" height="100" viewBox="0 0 100 100"
          >
            <polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="none" stroke="#8b5cf6" strokeWidth="0.4" strokeDasharray="2 3" />
            <polygon points="50,25 65,35 65,55 50,65 35,55 35,35" fill="none" stroke="#3b82f6" strokeWidth="0.3" />
            <circle cx="50" cy="5" r="2" fill="#3b82f6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="85" cy="25" r="1.5" fill="#8b5cf6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="15" cy="65" r="1.5" fill="#3b82f6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.8s" repeatCount="indefinite" />
            </circle>
          </motion.svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Technologies I work with">
            Skills
          </SectionTitle>

          <div className="max-w-5xl mx-auto space-y-12">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                category={category}
                categoryIndex={index}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

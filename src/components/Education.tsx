import { motion } from "framer-motion";
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Bannari Amman Institute of Technology (BIT), Sathyamangalam, Erode',
    period: '2023 - 2027',
    score: '8.37',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Kongu Vellalar Matriculation Higher Secondary School, Tirupur',
    period: '2022 - 2023',
    score: '90.5%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Kongu Vellalar Matriculation Higher Secondary School, Tirupur",
    period: '2020 - 2021',
    score: '90%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent dark:from-purple-500/10 dark:via-blue-500/5" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute bottom-20 right-16 w-52 h-52 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#eduGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="5" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="eduGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-20 left-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-purple-500/40 dark:border-purple-400/50 rounded-tl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Floating graduation cap */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-20 text-5xl text-purple-500/20 dark:text-purple-400/30 pointer-events-none"
        >
          🎓
        </motion.div>

        {/* Tech hexagon */}
        <div className="absolute top-1/2 left-8 pointer-events-none opacity-25 dark:opacity-35">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            width="100" height="100" viewBox="0 0 100 100"
          >
            <polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="3 5" />
            <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="none" stroke="#3b82f6" strokeWidth="0.3" strokeDasharray="2 4" />
            <circle cx="50" cy="5" r="2" fill="#8b5cf6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          </motion.svg>
        </div>

        {/* Connected dots */}
        <svg className="absolute bottom-1/3 left-1/4 w-40 h-40 pointer-events-none opacity-30 dark:opacity-40" viewBox="0 0 100 100">
          <motion.line
            x1="20" y1="20" x2="80" y2="50"
            stroke="#8b5cf6" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="80" y1="50" x2="40" y2="80"
            stroke="#3b82f6" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          />
          <circle cx="20" cy="20" r="3" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="50" r="2.5" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="80" r="3" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="container mx-auto px-8 relative z-10">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

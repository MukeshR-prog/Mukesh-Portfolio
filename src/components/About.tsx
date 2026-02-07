import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { AboutIntro } from "./about/AboutIntro.tsx";
import { AboutCards } from "./about/AboutCards.tsx";

export function About() {
  return (
    <SectionBackground>
      <section id="about" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background - like Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          
          {/* Gradient mesh effect */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
        </div>

        {/* Animated floating gradient orbs - like Hero section */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Floating particles */}
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-purple-500/30 rounded-full blur-sm"
        />

        {/* Animated revolving orbital rings - like Hero section */}
        <div className="absolute top-20 right-20 w-64 h-64 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#aboutGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
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
              <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Second orbital ring - bottom left */}
        <div className="absolute bottom-32 left-10 w-48 h-48 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#aboutGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
            <circle cx="100" cy="10" r="2" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accents - like Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-24 left-20 w-32 h-32 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-blue-500/40 dark:border-blue-400/50 rounded-tl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute bottom-24 right-20 w-32 h-32 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-purple-500/40 dark:border-purple-400/50 rounded-br-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
            className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Tech hexagon pattern */}
        <div className="absolute top-1/2 left-8 pointer-events-none opacity-30 dark:opacity-40">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            width="120" height="120" viewBox="0 0 100 100"
          >
            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3 5" />
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="#8b5cf6" strokeWidth="0.3" strokeDasharray="2 4" />
            <circle cx="50" cy="5" r="2" fill="#3b82f6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          </motion.svg>
        </div>

        {/* Floating code brackets */}
        <motion.div
          animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-1/3 text-4xl font-mono text-blue-500/30 dark:text-blue-400/40 pointer-events-none"
        >
          {"</>"}
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-1/3 text-3xl font-mono text-purple-500/30 dark:text-purple-400/40 pointer-events-none"
        >
          {"{ }"}
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute top-1/3 right-10 w-24 h-24 pointer-events-none">
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

        {/* Connected dots constellation */}
        <svg className="absolute bottom-1/4 right-1/4 w-48 h-48 pointer-events-none opacity-40 dark:opacity-50" viewBox="0 0 100 100">
          <motion.line
            x1="20" y1="30" x2="50" y2="20"
            stroke="#3b82f6" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="50" y1="20" x2="80" y2="40"
            stroke="#8b5cf6" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
          />
          <motion.line
            x1="80" y1="40" x2="60" y2="70"
            stroke="#3b82f6" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
          />
          <circle cx="20" cy="30" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="20" r="2.5" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="40" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="70" r="2.5" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle>
            About Me
          </SectionTitle>

          <AboutIntro />
          <AboutCards />
        </div>
      </section>
    </SectionBackground>
  );
}

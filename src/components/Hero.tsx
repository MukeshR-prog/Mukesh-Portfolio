
import { Code2, Cpu, Layers, Database } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';
import { motion } from 'framer-motion';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "AI Enthusiast",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
        
        {/* Gradient mesh effect */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
        
        {/* Animated floating gradient orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl" 
        />
      </div>

      {/* Main content - matching navbar max-w-6xl */}
      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-3">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 dark:text-gray-400 text-lg"
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="text-gray-900 dark:text-white">Mukesh </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">R</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light h-10"
              >
                <TypeWriter words={roles} delay={100} />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed text-base lg:text-lg"
            >
              Passionate about crafting elegant solutions through clean code and innovative thinking. 
              Building impactful digital experiences that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <ActionButtons />
            </motion.div>

            {/* Contact & Social */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-4 pt-4"
            >
              <ContactInfo />
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer animated glow */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-blue-500/20 dark:from-blue-500/30 dark:via-purple-500/25 dark:to-blue-500/30 rounded-full blur-3xl"
              />
              
              {/* Single elegant orbital ring with floating dots */}
              <div className="absolute inset-0 -m-16">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full" 
                  viewBox="0 0 200 200"
                >
                  <circle cx="100" cy="100" r="97" fill="none" stroke="url(#gradientRing1)" strokeWidth="0.8" strokeDasharray="2 14" opacity="0.6" />
                  {/* Orbiting dots */}
                  <circle cx="100" cy="3" r="2.5" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="197" cy="100" r="2" fill="#8b5cf6" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="197" r="2.5" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="3" cy="100" r="2" fill="#8b5cf6" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <defs>
                    <linearGradient id="gradientRing1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>

              {/* Animated corner accents with morphing effect */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-8 -right-8 w-28 h-28"
              >
                <motion.div 
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-blue-500/60 dark:border-blue-400/70 rounded-tr-[2rem]"
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
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 w-28 h-28"
              >
                <motion.div 
                  animate={{ rotate: [0, -90, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-purple-500/60 dark:border-purple-400/70 rounded-bl-[2rem]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
                  className="absolute bottom-0 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                />
              </motion.div>

              {/* Main image container */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border gradient */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-20 blur-sm"
                />
                
                <div className="relative w-80 h-80 sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden ring-4 ring-white/90 dark:ring-gray-800/90 shadow-2xl shadow-blue-500/25 dark:shadow-blue-500/35">
                  <img
                    src="/assets/mukesh.png"
                    alt="Mukesh R"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                </div>
              </motion.div>

              {/* Premium floating tech badges - Always visible with smooth animations */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -8, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 },
                  x: { duration: 0.6, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-10 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40"
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="hidden sm:block pr-1">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">TypeScript</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 10, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.9 },
                  x: { duration: 0.6, delay: 0.9 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute top-1/4 -right-6 sm:-right-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40"
                  >
                    <Cpu className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="hidden sm:block pr-1">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">AI / ML</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Enthusiast</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -6, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute bottom-32 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/40"
                  >
                    <Layers className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="hidden sm:block pr-1">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">Full-Stack</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 8, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.1 },
                  x: { duration: 0.6, delay: 1.1 },
                  y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute bottom-20 -right-6 sm:-right-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/40"
                  >
                    <Database className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="hidden sm:block pr-1">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">Databases</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">MongoDB / SQL</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-current rounded-full"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
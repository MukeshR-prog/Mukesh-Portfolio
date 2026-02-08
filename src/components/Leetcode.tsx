import { motion } from "framer-motion";
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiLeetcode } from "react-icons/si";

export function Leetcode() {
  return (
    <SectionBackground>
      <section id="leetcode" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 via-white to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/5 via-yellow-500/5 to-transparent dark:from-orange-500/10 dark:via-yellow-500/5" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-400/15 dark:bg-orange-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute top-16 left-16 w-52 h-52 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#lcGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="3" fill="#f97316" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="2.5" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="195" r="3" fill="#f97316" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="lcGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Second orbital ring */}
        <div className="absolute bottom-24 right-12 w-44 h-44 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#lcGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
            <circle cx="100" cy="10" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="lcGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-24 right-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-orange-500/40 dark:border-orange-400/50 rounded-tr-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute bottom-24 left-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-blue-500/40 dark:border-blue-400/50 rounded-bl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
            className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
          />
        </motion.div>

        {/* Floating code symbol */}
        <motion.div
          animate={{ y: [-6, 6, -6], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-20 text-4xl font-mono text-orange-500/25 dark:text-orange-400/35 pointer-events-none"
        >
          {"{ }"}
        </motion.div>
        <motion.div
          animate={{ y: [6, -6, 6], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-24 text-3xl font-mono text-blue-500/25 dark:text-blue-400/35 pointer-events-none"
        >
          {"< />"}
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute top-1/2 right-16 w-20 h-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-orange-500/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute inset-0 border border-blue-500/30 rounded-full"
          />
          <div className="absolute inset-1/3 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full blur-sm" />
        </div>

        {/* Tech hexagon */}
        <div className="absolute bottom-1/4 left-1/4 pointer-events-none opacity-25 dark:opacity-35">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            width="80" height="80" viewBox="0 0 100 100"
          >
            <polygon points="50,5 85,25 85,65 50,85 15,65 15,25" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="3 5" />
            <polygon points="50,15 75,30 75,60 50,75 25,60 25,30" fill="none" stroke="#3b82f6" strokeWidth="0.3" strokeDasharray="2 4" />
            <circle cx="50" cy="5" r="2" fill="#f97316">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          </motion.svg>
        </div>

        <div className="container mx-auto max-w-6xl px-8 relative z-10">
          <SectionTitle subtitle="DSA isn't just practice — it's how I sharpen problem-solving daily.">Leetcode Progress</SectionTitle>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Leetcode Activity Image */}
            <div className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden">
              <img
                src="https://leetcard.jacoblin.cool/mukesh1855?theme=dark&font=Inter&ext=activity&border=2&radius=10"
                title="Leetcode Activity"
                className="absolute w-full h-full rounded-xl shadow-md"
              >
              </img>
            </div>

            {/* Leetcode Journey Text */}
            <div>
              <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                My Leetcode Journey
              </h3>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
                Solving problems on Leetcode has helped me strengthen my Data
                Structures and Algorithms skills. I enjoy tackling challenges that
                push my problem-solving abilities and prepare me for technical
                interviews.
              </p>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
                I've completed hundreds of problems across a variety of topics,
                including arrays, trees, graphs, and dynamic programming. My goal
                is to keep improving and stay consistent in learning and solving
                new problems daily.
              </p>

              {/* LeetCode Profile Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://leetcode.com/mukesh1855/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  <SiLeetcode className="w-5 h-5" /> View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "10+", label: "Competitions" },
  { value: "8 mo", label: "Experience" },
];

export function AboutIntro() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      {/* Main tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4"
        >
          I build calm, high-performance web interfaces.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          I turn unclear requirements into clean, fast interfaces — shipping iteratively 
          and sweating performance and polish.
        </motion.p>
      </motion.div>

      {/* Brief description card - Hero badge style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <motion.div
          whileHover={{ y: -2, boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="flex items-start gap-4 p-6 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center"
          >
            <span className="text-xl">💡</span>
          </motion.div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-medium text-gray-900 dark:text-white">Curious problem-solver</span> — 
              exploring new tech, building user-friendly apps. Currently focused on 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> React</span>, 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> Next.js</span>, and 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> TypeScript</span> ecosystems.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats - Hero floating badge style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative group"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative text-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80">
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

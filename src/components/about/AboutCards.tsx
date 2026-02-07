import { motion } from "framer-motion";
import { aboutSections } from "./aboutData";
import { AboutCard } from "./AboutCard";

export function AboutCards() {
  return (
    <div className="relative">
      {/* Floating gradient orbs - like Hero section */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Cards grid */}
      <div className="relative grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {aboutSections.map((section, index) => (
          <AboutCard
            key={section.title}
            icon={section.icon}
            title={section.title}
            description={section.description}
            color={section.color}
            gradient={section.gradient}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface AnimatedSkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color: string;
  url: string;
  index: number;
  categoryIndex: number;
}

export function AnimatedSkillCard({
  name,
  icon: Icon,
  color,
  url,
  index,
  categoryIndex,
}: AnimatedSkillCardProps) {
  // Handle empty/missing colors
  const hasColor = color && color !== "#" && color.trim() !== "";
  const displayColor = hasColor ? color : "#6b7280";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.03,
        ease: "easeOut",
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col items-center p-3 rounded-xl cursor-pointer"
    >
      {/* Subtle glow on hover - like Hero floating badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${displayColor}15, transparent 70%)`,
        }}
      />

      {/* Card background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/80 dark:border-gray-700/80 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 group-hover:shadow-md transition-all duration-200" />

      {/* Icon with animation */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        className="relative z-10 p-2.5 rounded-lg transition-colors duration-200"
        style={{ backgroundColor: `${displayColor}12` }}
      >
        <Icon
          size={32}
          style={{ color: displayColor }}
          className="transition-all duration-200"
        />
      </motion.div>

      {/* Name */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: categoryIndex * 0.1 + index * 0.03 + 0.2, duration: 0.3 }}
        className="relative z-10 mt-2 text-xs font-medium text-gray-700 dark:text-gray-300 text-center"
      >
        {name}
      </motion.span>
    </motion.a>
  );
}

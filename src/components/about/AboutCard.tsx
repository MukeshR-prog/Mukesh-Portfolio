import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface AboutCardProps {
  icon: LucideIcon | IconType;
  title: string;
  description: string[];
  color: string;
  gradient: string;
  index: number;
}

export function AboutCard({
  icon: Icon,
  title,
  description,
  index,
}: AboutCardProps) {
  // Staggered entrance directions like Hero floating badges
  const entranceVariants = [
    { x: -30, y: 0 },
    { x: 30, y: 0 },
    { x: -30, y: 0 },
    { x: 30, y: 0 },
  ];
  const entrance = entranceVariants[index % 4];

  return (
    <motion.div
      initial={{ opacity: 0, ...entrance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="group relative"
    >
      {/* Subtle glow effect on hover - like Hero badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -inset-2 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none"
      />

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-gray-300/80 dark:hover:border-gray-600/80 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {/* Animated icon container - like Hero tech badges */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 flex items-center justify-center shadow-sm"
          >
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        {/* Description list with staggered animation */}
        <ul className="space-y-2.5">
          {description.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.15 + i * 0.1 + 0.3,
                ease: "easeOut",
              }}
              className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + i * 0.1 + 0.4,
                  type: "spring",
                  stiffness: 500,
                }}
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0"
              />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

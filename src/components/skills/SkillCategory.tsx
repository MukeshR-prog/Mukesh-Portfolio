import { motion } from "framer-motion";
import { AnimatedSkillCard } from "./AnimatedSkillCard";
import type { SkillCategoryData } from "./skillsData";

interface SkillCategoryProps {
  category: SkillCategoryData;
  categoryIndex: number;
}

export function SkillCategory({ category, categoryIndex }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: categoryIndex * 0.15,
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Category header with staggered animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: categoryIndex * 0.15 + 0.1 }}
        className="flex items-center gap-3 mb-5"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: categoryIndex * 0.15 + 0.2,
            type: "spring",
            stiffness: 500,
          }}
          className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full"
        >
          {category.skills.length}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.15 + 0.2 }}
          className="flex-1 h-px bg-gray-200 dark:bg-gray-800 origin-left"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: categoryIndex * 0.15 + 0.2 }}
        className="text-sm text-gray-500 dark:text-gray-400 mb-5"
      >
        {category.description}
      </motion.p>

      {/* Skills grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {category.skills.map((skill, index) => (
          <AnimatedSkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            url={skill.url}
            index={index}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

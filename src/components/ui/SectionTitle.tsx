import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`mb-10 ${className}`}
    >
      <div className="flex flex-col text-center items-center">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {children}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl">
            {subtitle}
          </p>
        )}

        {/* Simple underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 w-12 h-0.5 bg-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
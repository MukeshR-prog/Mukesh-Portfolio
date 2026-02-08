import { motion } from "framer-motion";
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute top-16 right-20 w-56 h-56 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#contactGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="195" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Second orbital ring */}
        <div className="absolute bottom-24 left-12 w-44 h-44 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#contactGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
            <circle cx="100" cy="10" r="2" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Animated corner accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-24 left-16 w-28 h-28 pointer-events-none"
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
          className="absolute bottom-24 right-16 w-28 h-28 pointer-events-none"
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

        {/* Floating mail icon */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-24 text-5xl text-blue-500/20 dark:text-blue-400/30 pointer-events-none"
        >
          ✉️
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute bottom-1/3 left-20 w-20 h-20 pointer-events-none">
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
        <svg className="absolute top-1/2 left-10 w-40 h-40 pointer-events-none opacity-30 dark:opacity-40" viewBox="0 0 100 100">
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
          <circle cx="20" cy="30" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="20" r="2.5" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="40" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle subtitle="Let's collaborate on your next big idea — I'm just a message away.">Get In Touch</SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:mukeshr1855@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail className="w-6 h-6" />
                  <span>mukeshr1855@gmail.com</span>
                </a>
                <a
                  href="https://github.com/MukeshR-prog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/MukeshR-prog</span>
                </a>
                <a
                  href="https://linkedin.com/in/mukesh1855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/mukesh1855</span>
                </a>
                <a
                  href="https://wa.me/916381952282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <BsWhatsapp className="w-6 h-6" />
                  <span>Mukesh R</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

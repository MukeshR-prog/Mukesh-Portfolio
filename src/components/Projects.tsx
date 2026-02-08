import { motion } from "framer-motion";
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
};

const projects = [
  {
    title: 'Chatter Box',
    description: 'Chatter Box is a modern, real-time messaging platform designed for seamless and intelligent communication. Built with React, Node.js, Socket.IO, and MongoDB, Chatter Box enables users to engage in instant messaging, send emoji reactions, and explore a smooth chatroom experience with support for attachments and real-time updates.',
    image: '/assets/notesneo.webp',
    link: 'https://chatterbox11.vercel.app/',
    github: 'https://github.com/MukeshR-prog/chatApp',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.node,
      techStacks.socket,
      techStacks.mongodb, 
    ],
  },
  {
    title: 'Card Smart',
    description: 'Card Smart is a smart card management system that allows users to create, manage, and share BDAG. Built with Next.js and Firebase, Card Smart offers a user-friendly interface for designing and customizing cards, as well as features connecting with others. Metamask integration enables secure transactions and interactions within the platform.',
    image: '/assets/card-smart.png',
    link: 'https://card-smart.vercel.app/',
    github: 'https://github.com/MukeshR-prog/block-dag-2025',
    techStack: [
      techStacks.next,
      techStacks.tailwind,
      techStacks.firebase,
    ],
  },
  // {
  //   title: 'NeoCode',
  //   description: 'A coding platform with curated DSA sheets, roadmaps, CS articles, and a community forum for students to share resources and discuss challenges.',
  //   image: '/assets/neocode.webp',
  //   link: 'https://neocoding.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/neocode',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.tailwind,
  //     techStacks.typescript,
  //     techStacks.mongodb,
  //     techStacks.prisma,
  //   ],
  // },
  // {
  //   title: 'NeoCompiler',
  //   description: 'An online compiler supporting multiple languages with auth, themes, and AI-assisted suggestions. Users can write, run, and share code snippets easily.',
  //   image: '/assets/neocompiler.webp',
  //   link: 'https://neocompiler.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/neo-compiler',
  //   techStack: [
  //     techStacks.next,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.mongodb,
  //     techStacks.prisma,
  //     techStacks.shadcn,
  //   ],
  // },
  // {
  //   title: 'Portfolio',
  //   description: 'A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.',
  //   image: '/assets/portfolio.webp',
  //   link: 'https://deepakmodi.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/portfolio',
  //   techStack: [
  //     techStacks.next,
  //     techStacks.react,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.framer,
  //   ],
  // },
  // {
  //   title: 'Braineo',
  //   description: 'An online AI learning platform with courses, quizzes, and user authentication. Users can track progress and manage their learning journey.',
  //   image: '/assets/braineo.webp',
  //   link: 'https://braineo.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/braineo',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.appwrite,
  //     techStacks.framer,
  //   ],
  // },
  // {
  //   title: 'Placify',
  //   description: 'A campus placement platform connecting students with recruiters. Features job listings, company profiles, and application tracking.',
  //   image: '/assets/placify.webp',
  //   github: 'https://github.com/decodewithdeepak/placify',
  //   techStack: [
  //     techStacks.next,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.mongodb,
  //     techStacks.prisma,
  //   ],
  // },
  // {
  //   title: 'NeoFolio',
  //   description: 'A portfolio website template for developers, showcasing projects and skills. Built with modern web technologies for easy customization.',
  //   image: '/assets/neofolio.webp',
  //   link: 'https://neofolio.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/neofolio',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.firebase,
  //     techStacks.framer,
  //   ],
  // },
  // {
  //   title: 'Finneo',
  //   description: 'An AI-powered investment platform that helps beginners understand and plan their investments based on risk, capital, age, and financial goals.',
  //   image: '/assets/finneo.webp',
  //   link: 'https://finneo.vercel.app',
  //   github: 'https://github.com/decodewithdeepak/finneo',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.framer,
  //     techStacks.appwrite,
  //   ],
  // },
  // {
  //   title: 'Ajay Sharma',
  //   description: 'A freelance project built for Ajay Sharma, a self-empowerment coach. Designed landing page, pricing section, and integrated payments.',
  //   image: '/assets/ajaysharma.webp',
  //   link: 'https://ajay-sharma.vercel.app',
  //   techStack: [
  //     techStacks.react,
  //     techStacks.typescript,
  //     techStacks.tailwind,
  //     techStacks.stripe,
  //   ],
  // },
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects" className="pt-16 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10" />
      </div>

      {/* Animated floating gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Animated orbital rings */}
      <div className="absolute top-16 left-12 w-60 h-60 pointer-events-none">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#projGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
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
            <linearGradient id="projGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Second orbital ring */}
      <div className="absolute bottom-24 right-16 w-48 h-48 pointer-events-none">
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#projGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
          <circle cx="100" cy="10" r="2" fill="#8b5cf6" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="190" cy="100" r="2" fill="#3b82f6" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <defs>
            <linearGradient id="projGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
        className="absolute top-24 right-16 w-28 h-28 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-blue-500/40 dark:border-blue-400/50 rounded-tr-[2rem]"
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
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute bottom-24 left-16 w-28 h-28 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-purple-500/40 dark:border-purple-400/50 rounded-bl-[2rem]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }}
          className="absolute bottom-0 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
        />
      </motion.div>

      {/* Floating code symbols */}
      <motion.div
        animate={{ y: [-6, 6, -6], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-24 text-4xl font-mono text-blue-500/25 dark:text-blue-400/35 pointer-events-none"
      >
        {"</>"}
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-20 text-3xl font-mono text-purple-500/25 dark:text-purple-400/35 pointer-events-none"
      >
        {"{ }"}
      </motion.div>

      {/* Glowing pulse rings */}
      <div className="absolute top-1/2 right-10 w-24 h-24 pointer-events-none">
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

      {/* Tech circuit lines */}
      <svg className="absolute top-1/4 right-1/4 w-48 h-48 pointer-events-none opacity-20 dark:opacity-30" viewBox="0 0 100 100">
        <motion.path
          d="M10,50 L30,50 L35,40 L65,40 L70,50 L90,50"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="35" cy="40" r="2" fill="#3b82f6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="40" r="2" fill="#8b5cf6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      <div className="container mx-auto px-8 relative z-10">
        <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:px-24">  { /* remove lg px and change grid to three */}
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
      </div>
    </section>
  </SectionBackground>
  );
}

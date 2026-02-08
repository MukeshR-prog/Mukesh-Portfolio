import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  {
    title: "TATA Crucible Campus Quiz 2024",
    issuer: "Tata Group",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1K3f35G3sG6XU2LfL59pkxZ-hxqxjDKVZ/view?usp=sharing",
    image: "/assets/certificates/Tata-crucible-2024.png",
  },
  {
    title: "Crayon'd Internship certificate",
    issuer: "Crayon'd",
    date: "Sep 2024 - Apr-2025",
    link: "https://drive.google.com/file/d/13MZELH-Otolx8xGtA__7qgut5xP2IiDd/view?usp=sharing",
    image: "/assets/certificates/Crayon'd-internship.png",
  },
  {
    title: "Agentic AI Day Hackathon 2025",
    issuer: "Google Cloud",
    date: "Jul-2025",
    link: "https://drive.google.com/file/d/1Ogd1Vy-Gno55meQeTAfzpOsdV-XANBZr/view?usp=sharing",
    image: "/assets/certificates/Agentic-AI-Day-Hackathon-2025.png",
  },
  {
    title: "ISRO Bharatiya Antariksh Hackathon 2025",
    issuer: "ISRO",
    date: "Jul-2025",
    link: "https://drive.google.com/file/d/1Ogd1Vy-Gno55meQeTAfzpOsdV-XANBZr/view?usp=sharing",
    image: "/assets/certificates/ISRO-Bharatiya-Antariksh-Hackathon-2025.png",
  },
  {
    title: "Codequezt # 19 Coding Challenge",
    issuer: "Naukri Campus.",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1rZDF0FxDNQkMhEySBxo8DSd1GETKT-Ha/view?usp=sharing",
    image: "/assets/certificates/code-quest-naukri.png",
  },
  {
    title: "Techquezt # 19 DevOps and (CI/CD)",
    issuer: "Naukri Campus.",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/1Yft4loo25YCx1NUAHdeVIvcj-3UwcXcs/view?usp=sharing",
    image: "/assets/certificates/devops-ci-cd-naukri.png",
  },
  {
    title: "Application of Digital Image Based on Machine Learning",
    issuer: "BIT, Sathyamangalam",
    date: "Dec 2023",
    link: "https://drive.google.com/file/d/19Y5-pDk049YPRQhpq-JjQxvQUu5p8OAo/view?usp=sharing",
    image: "/assets/certificates/bit-paper-presentation.png",
  },
  {
    title: "PRASUNETHON Hackathon 2024",
    issuer: "PRASUNET Company",
    date: "Jun 2024",
    link: "https://drive.google.com/file/d/12lU6CrAkl3Qoabxp8Ldsr9s79U037bER/view?usp=sharing",
    image: "/assets/certificates/PRASUNETHON-Hackathon-2024.png",
  },
  {
    title: "Ideathon 2024",
    issuer: "Bit, Sathyamangalam",
    date: "Apr 2024",
    link: "https://drive.google.com/file/d/128Fo7xiqrFMPPIP89KJoE1BssJvcX6RJ/view?usp=sharing",
    image: "/assets/certificates/Ideathan-2024.png",
  },
  {
    title: "Entrepreneurial Frontiers For Young Minds",
    issuer: "Bit, Sathyamangalam",
    date: "Feb 2024",
    link: "https://drive.google.com/file/d/1U7CKCrsDb2dPPg8HMC0i24UlbwdhblDT/view?usp=sharing",
    image: "/assets/certificates/Entrepreneurial-Frontiers-For-Young-Minds.png",
  },
  {
    title: "Introduction to Figma",
    issuer: "Simplilearn",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/1ySkNEd1WIUVx6rTgCR1ev0ELSsNfwwCe/view?usp=sharing",
    image: "/assets/certificates/Introduction-to-Figma.png",
  },
  {
    title: "PitchStorm: The Ultimate Startup Showdown - NIT Trichy",
    issuer: "NIT-Trichy",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/109sW3mxdln2dqjawT3GsDDs8KwA2MYep/view?usp=sharing",
    image: "/assets/certificates/NIT-Tirchy-pitchStorm.png",
  },
];

// ...existing imports...

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="certifications" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent dark:from-purple-500/10 dark:via-blue-500/5" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute top-20 right-16 w-52 h-52 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#certGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="3" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="5" cy="100" r="2.5" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="certGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Second orbital ring */}
        <div className="absolute bottom-32 left-12 w-44 h-44 pointer-events-none">
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#certGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
            <circle cx="100" cy="10" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="certGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
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
            className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-purple-500/40 dark:border-purple-400/50 rounded-tl-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Floating certificate icon */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-20 text-5xl text-purple-500/20 dark:text-purple-400/30 pointer-events-none"
        >
          📜
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute bottom-1/3 right-16 w-20 h-20 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-purple-500/40 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute inset-0 border border-blue-500/30 rounded-full"
          />
          <div className="absolute inset-1/3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-sm" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios.">
            Certifications
          </SectionTitle>

          {/* Toggle Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <span>{showAll ? "View Less" : "View All"}</span>
              {showAll ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Conditional Rendering */}
          {showAll ? (
            // Grid View with Custom Scroll
           <div className="w-full max-w-7xl mx-auto">
    <div 
      className="
        overflow-y-auto 
        max-h-[350px] 
        px-2 py-4
        custom-scrollbar
      "
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#2563eb #e5e7eb'
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} {...cert} />
        ))}
      </div>
    </div>
  </div>
          ) : (
            // Slider View - Show Limited Certificates
            <Slider {...settings} className="max-w-6xl mx-auto">
              {certifications.map((cert) => (
                <div key={cert.title} className="px-4">
                  <CertificationCard {...cert} />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #f1f5f9;
        }
        
        /* Dark mode styles */
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          border-color: #374151;
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-corner {
          background: #374151;
        }
      `}</style>
    </SectionBackground>
  );
}

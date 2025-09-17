import { useState } from "react";
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
      <section id="certifications" className="pt-16">
        <div className="container mx-auto px-8">
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

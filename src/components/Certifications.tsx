
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "TATA Crucible Campus Quiz 2024",
    issuer: "Tata Group",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1K3f35G3sG6XU2LfL59pkxZ-hxqxjDKVZ/view?usp=sharing",
    image: "/assets/certificates/Tata-crucible-2024.png",
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

export function Certifications() {
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

  return (<SectionBackground>
    <section id="certifications" className="pt-16">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios.">Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </SectionBackground>
  );
}

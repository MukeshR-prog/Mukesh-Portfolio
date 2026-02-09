import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaGlobe, FaBookOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconType } from 'react-icons';

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  link?: string;
  github?: string;
  techStack: TechStackItem[];
  hasCaseStudy?: boolean;
  onCaseStudyClick?: () => void;
}

export function ProjectCard({ title, description, image, images, link, github, techStack, hasCaseStudy, onCaseStudyClick }: ProjectCardProps) {
  const allImages = images && images.length > 0 ? images : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="group relative">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">

        {/* Image Slider */}
        <div className="relative overflow-hidden p-4 pb-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="relative">
              <img
                src={allImages[currentImageIndex]}
                alt={`Screenshot of ${title}`}
                className="w-full h-[180px] object-fit rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              
              {/* Slider Controls */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  >
                    <FaChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  >
                    <FaChevronRight className="w-3 h-3" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white scale-110'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + Icons */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Icons with Tooltip */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                    <Icon className="w-6 h-6" color={item.color} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 
                        opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Case Study Button */}
          {hasCaseStudy && onCaseStudyClick && (
            <button
              onClick={onCaseStudyClick}
              className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <FaBookOpen className="w-4 h-4" />
              View Case Study
            </button>
          )}

        </div>
      </div>
    </div>
  );
}


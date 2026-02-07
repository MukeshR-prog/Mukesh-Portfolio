import { Github, Linkedin, Instagram  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const links = [
  {
    href: 'https://github.com/MukeshR-prog',
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    hoverClass: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500',
  },
  {
    href: 'https://www.linkedin.com/in/mukesh1855/',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    hoverClass: 'hover:text-blue-600 hover:border-blue-400',
  },
  {
    href: 'https://leetcode.com/u/mukesh1855',
    icon: <SiLeetcode className="w-5 h-5" />,
    label: 'LeetCode',
    hoverClass: 'hover:text-amber-500 hover:border-amber-400',
  },
  {
    href: 'https://www.instagram.com/_.mukesh._001/',
    icon: <Instagram className="w-5 h-5" />,
    label: 'Instagram',
    hoverClass: 'hover:text-pink-500 hover:border-pink-400',
  },
  {
    href: 'https://wa.me/916381952282',
    icon: <FaWhatsapp className="w-5 h-5" />,
    label: 'WhatsApp',
    hoverClass: 'hover:text-emerald-500 hover:border-emerald-400',
  },
  {
    href: 'https://x.com/MukeshR702',
    icon: <FaXTwitter className="w-5 h-5" />,
    label: 'Twitter',
    hoverClass: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
      {links.map(({ href, icon, label, hoverClass }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative p-2.5 text-gray-400 dark:text-gray-500 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 ${hoverClass}`}
        >
          {icon}
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2.5 py-1 rounded-lg bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
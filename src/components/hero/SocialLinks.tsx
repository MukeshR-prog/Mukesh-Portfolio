import { Github, Linkedin, Instagram  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const links = [
  {
    href: 'https://github.com/MukeshR-prog',
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/mukesh-r-189b8a28b/',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
    {
    href: 'https://leetcode.com/u/mukesh1855',
    icon: <SiLeetcode className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'LeetCode',
  },
  {
    href: 'https://www.instagram.com/_.mukesh._001/',
    icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
    label: 'Instagram',
  },
  {
    href: 'https://wa.me/916381952282',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
  {
    href: 'https://x.com/MukeshR702',
    icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'Twitter',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
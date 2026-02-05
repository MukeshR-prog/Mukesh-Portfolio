import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`inline-flex items-center gap-2 text-sm ${href ? 'hover:text-blue-600 dark:hover:text-blue-400' : ''} transition-colors duration-200`}
    >
      <span className="text-gray-400 dark:text-gray-500">{icon}</span>
      <span className="text-gray-600 dark:text-gray-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm border-t border-gray-200 dark:border-gray-800 pt-4">
      <ContactItem
        icon={<Mail className="w-4 h-4" />}
        text="mukeshr1855@gmail.com"
        href="mailto:mukeshr1855@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="w-4 h-4" />}
        text="Tamil Nadu, India"
      /> 
    </div>
  );
}

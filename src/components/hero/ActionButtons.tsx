
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      <a
        href="/assets/Mukesh_2026_feb.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
      >
        <FileText className="w-4 h-4" />
        <span>View Resume</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
      <Link
        href="#contact"
        className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
      >
        <span>Let's Talk</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

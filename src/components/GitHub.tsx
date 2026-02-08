import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Github } from "lucide-react";

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mukeshr-prog", {
      headers: {
      Authorization: `token ${import.meta.env.VITE_GIT_HUB_SECRET_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data: UserProfile) => setUser(data));

    fetch("https://api.github.com/users/mukeshr-prog/repos?sort=pushed&direction=desc&per_page=3", {
  headers: {
    Authorization: `token ${import.meta.env.VITE_GIT_HUB_SECRET_KEY}`,
  },
})
      .then((response) => response.json())
      .then((data) =>
        setRepos(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            stars: repo.stargazers_count,
            forks: repo.forks,
            language: repo.language || "Unknown",
            html_url: repo.html_url,
          }))
        )
      );
  }, []); return (
    <SectionBackground>
      <section id="github" className="pt-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10" />
        </div>

        {/* Animated floating gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Animated orbital ring */}
        <div className="absolute top-20 left-12 w-52 h-52 pointer-events-none">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#ghGradient1)" strokeWidth="0.8" strokeDasharray="3 12" opacity="0.5" />
            <circle cx="100" cy="5" r="3" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="100" r="2.5" fill="#3b82f6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="5" cy="100" r="3" fill="#8b5cf6" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="ghGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
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
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#ghGradient2)" strokeWidth="0.6" strokeDasharray="2 10" opacity="0.4" />
            <circle cx="100" cy="10" r="2" fill="#3b82f6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="100" r="2" fill="#8b5cf6" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="ghGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
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
          className="absolute top-24 right-16 w-28 h-28 pointer-events-none"
        >
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-purple-500/40 dark:border-purple-400/50 rounded-tr-[2rem]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Floating git branch icon */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-24 text-5xl text-purple-500/20 dark:text-purple-400/30 pointer-events-none"
        >
          🔀
        </motion.div>

        {/* Glowing pulse ring */}
        <div className="absolute bottom-1/3 left-16 w-20 h-20 pointer-events-none">
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

        {/* Tech circuit pattern */}
        <svg className="absolute top-1/2 right-8 w-48 h-48 pointer-events-none opacity-20 dark:opacity-30" viewBox="0 0 100 100">
          <motion.path
            d="M10,50 L30,50 L35,40 L65,40 L70,50 L90,50"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <circle cx="35" cy="40" r="2" fill="#8b5cf6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="65" cy="40" r="2" fill="#3b82f6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="container mx-auto max-w-6xl px-8 relative z-10">
          <SectionTitle subtitle="Code that lives, breathes, and contributes — open source and beyond.">GitHub Contributions</SectionTitle>

          {/* Contribution Graph */}
          <div className="mb-10 flex flex-col items-center">
            {/* Card-like container for the GitHub calendar */}
            <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
              <GitHubCalendar
                username="MukeshR-prog"
                blockSize={14.6}
                blockMargin={5}
                colorScheme="light"
                theme={{
                  light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
                }}
              />
            </div>
          </div>

          {/* Top Repositories */}
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500">
                  <span>{repo.language}</span>
                  <div className="flex space-x-4">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* GitHub Profile Widget */}
          {user && (
            <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
              {/* Avatar & Name */}
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt="GitHub Avatar"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
                </div>
              </div>

              {/* Bio & Stats */}
              <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
                {user.bio}
              </p>

              {/* Followers, Repos, Profile Link */}
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                <span className="flex items-center gap-1 text-sm">👥 {user.followers} Followers</span>
                <span className="flex items-center gap-1 text-sm">📦 {user.public_repos} Repos</span>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all mt-3 md:mt-0"
                >
                  <Github className="w-5 h-5" /> View Profile
                </a>
              </div>                    </div>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
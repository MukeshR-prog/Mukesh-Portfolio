import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A full-stack developer having interest in software engineering.",
      "Enjoy solving problems and building scalable applications.",
      "Always learning new technologies to improve my skills.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance web apps using modern tech stacks.",
      "Solve algorithmic problems and optimize code efficiency.",
      "Contribute to open-source and follow industry trends.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
        "Build scalable tech products that solve real-world challenges.",
        "Leverage AI to create intelligent and impactful web applications.",
        "Grow as a full-stack developer while contributing to open source.",
      ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Technology should simplify lives, not complicate them.",
      "Great software solves problems, not just writes code.",
      "Continuous learning keeps you ahead in tech.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about" className="pt-16">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
       <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Hey there! 👋 I'm 
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> Mukesh R</span>, 
  a <span className="font-semibold">pre-final-year B.Tech Computer Science Engineering student from Bannari Amman Institute of Technology</span> passionate about building 
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> full-stack web applications</span> that solve real-world problems.
  <br /><br />
  I've developed impactful projects like:
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> ChatterBox</span> – a real-time web chat app,
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> Student Tracker</span> – to monitor student progress, and 
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> AI Mock Interview</span> – an web app to enhance interview preparation.
  <br /><br />
  My tech stack includes 
  <span className="font-semibold"> React, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, MySQL,</span> and 
  <span className="font-semibold"> Java</span>. I’m constantly exploring new technologies, love solving 
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> DSA problems on LeetCode</span>, and enjoy building 
  <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"> AI-powered solutions</span>.
</p>

            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I like to build products and solve problems
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}

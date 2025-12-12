"use client";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading the development of scalable web applications using Next.js, React, and Node.js. Mentoring junior developers and architecting cloud-native solutions.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led a team of 5 developers on enterprise projects",
      "Architected microservices handling 1M+ daily requests",
    ],
    logo: "🚀",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented CI/CD pipelines and automated testing.",
    achievements: [
      "Built 15+ production-ready web applications",
      "Improved code coverage from 40% to 85%",
      "Reduced deployment time by 75% with automation",
    ],
    logo: "💻",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Agency Co.",
    location: "New York, NY",
    period: "2018 - 2020",
    description:
      "Created responsive and interactive user interfaces for various clients. Collaborated with designers to implement pixel-perfect designs.",
    achievements: [
      "Delivered 20+ client projects on time",
      "Increased user engagement by 45%",
      "Received 'Developer of the Year' award",
    ],
    logo: "🎨",
  },
];

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "MongoDB", level: 85 },
  { name: "AWS", level: 80 },
];

const achievements = [
  {
    icon: "🏆",
    title: "Top Performer 2023",
    description: "Recognized for exceptional project delivery",
  },
  {
    icon: "⭐",
    title: "5+ Years Experience",
    description: "Building modern web applications",
  },
  {
    icon: "🎓",
    title: "Certified Developer",
    description: "AWS & React certifications",
  },
  {
    icon: "👥",
    title: "Mentored 20+ Developers",
    description: "Guided junior developers to success",
  },
];

export default function WorkProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 text-9xl">💼</div>
          <div className="relative flex items-start gap-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">Edilberto Pajunar</h1>
              <p className="text-xl text-purple-100 mb-3">
                Senior Full Stack Developer | Tech Enthusiast
              </p>
              <p className="text-purple-100 mb-4">
                San Francisco Bay Area • 500+ connections
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Open to Work
                </button>
                <button className="px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-full font-semibold transition-colors">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate Full Stack Developer with 5+ years of experience building
            scalable web applications. Specialized in React, Next.js, and modern
            JavaScript frameworks. Strong advocate for clean code, performance
            optimization, and user-centric design. Always learning and exploring
            new technologies to solve complex problems efficiently.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700"
              >
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border-l-4 border-purple-600 pl-6 pb-6 relative"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl shadow-md">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.location} • {exp.period}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {exp.description}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Interested in working together?
              </h3>
              <p className="text-purple-100">
                Let&apos;s connect and discuss how I can help your team succeed.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

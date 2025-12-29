"use client";

import { profileData } from "../interface/PersonalProfile";

export default function WorkProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div className="max-w mx-auto p-8">
        <section className="max-w-5xl mx-auto">
          <div className=" rounded-3xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">📖</span>
              <span>About</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Passionate Full Stack & Mobile Developer with 3+ years of
              experience delivering scalable and high-performance web and mobile
              applications. Proficient in React, Next.js, Flutter, and modern
              JavaScript/TypeScript frameworks, with hands-on experience in
              backend development using Laravel, FastAPI, and RESTful/GraphQL
              APIs. Skilled in integrating complex systems, payment gateways,
              and real-time features, while following SOLID principles and best
              practices for clean, maintainable code. Strong advocate for
              user-centric design, performance optimization, and robust
              architecture. Thrives in startup and product-focused environments,
              continuously learning and adopting emerging technologies to solve
              challenging problems efficiently.
            </p>
          </div>

          <div className="rounded-3xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              <span>Experience</span>
            </h2>
            <div className="space-y-8">
              {profileData.experience.map((exp) => (
                <div
                  key={exp.company}
                  className="border-l-2 border-blue-600 dark:border-blue-500 pl-8 pb-8 relative last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {exp.location} • {exp.period}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3"
                        >
                          <span className="text-green-600 dark:text-green-500 mt-0.5 font-bold">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="py-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-3">
            <span className="text-3xl">🛠️</span>
            <span>Tools</span>
          </h2>
          <div className="relative overflow-hidden mb-12">
            <div className="flex gap-8 animate-scroll-infinite">
              {[
                ...profileData.tools,
                ...profileData.tools,
                ...profileData.tools,
              ].map((tool, index) => (
                <span
                  key={`tool-${tool}-${index}`}
                  className="shrink-0 text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-3">
            <span className="text-3xl">⚡</span>
            <span>Skills</span>
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-infinite-reverse">
              {[
                ...profileData.skills,
                ...profileData.skills,
                ...profileData.skills,
              ].map((skill, index) => (
                <span
                  key={`skill-${skill}-${index}`}
                  className="shrink-0 text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

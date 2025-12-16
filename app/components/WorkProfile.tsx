"use client";

import { profileData } from "../interface/PersonalProfile";

export default function WorkProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto p-8">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-10 text-white relative overflow-hidden mb-8 shadow-sm border border-blue-700 dark:border-blue-600">
          <div className="absolute top-4 right-8 opacity-10 text-9xl">💼</div>
          <div className="relative">
            <h1 className="text-5xl font-bold mb-3">{profileData.name}</h1>
            <p className="text-2xl text-blue-100 mb-4 font-semibold">
              {profileData.title}
            </p>
            <p className="text-lg text-blue-100 flex items-center gap-2">
              <span>📍</span>
              {profileData.location}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">📖</span>
            <span>About</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Passionate Full Stack & Mobile Developer with 3+ years of experience
            delivering scalable and high-performance web and mobile
            applications. Proficient in React, Next.js, Flutter, and modern
            JavaScript/TypeScript frameworks, with hands-on experience in
            backend development using Laravel, FastAPI, and RESTful/GraphQL
            APIs. Skilled in integrating complex systems, payment gateways, and
            real-time features, while following SOLID principles and best
            practices for clean, maintainable code. Strong advocate for
            user-centric design, performance optimization, and robust
            architecture. Thrives in startup and product-focused environments,
            continuously learning and adopting emerging technologies to solve
            challenging problems efficiently.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 mb-8">
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

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <span>Skills & Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <span className="font-bold text-gray-900 dark:text-white text-base">
                  {skill}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  Expert
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 text-white shadow-sm border border-blue-700 dark:border-blue-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">
                Interested in working together?
              </h3>
              <p className="text-blue-100 text-lg">
                Let&apos;s connect and discuss how I can help your team succeed.
              </p>
            </div>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors whitespace-nowrap shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

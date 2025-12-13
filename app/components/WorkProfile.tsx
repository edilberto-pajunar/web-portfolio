"use client";

import { profileData } from "../interface/PersonalProfile";

export default function WorkProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto p-6 space-y-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 text-9xl">💼</div>
          <div className="relative flex items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-xl text-purple-100 mb-3">
                {profileData.title}
              </p>
              <p className="text-purple-100 mb-4">{profileData.location}</p>
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

        {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
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
        </div> */}

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {profileData.experience.map((exp) => (
              <div
                key={exp.company}
                className="border-l-4 border-purple-600 pl-6 pb-6 relative"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl shadow-md">
                      {exp.company}
                    </div> */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
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
            {profileData.skills.map((skill) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">
                    100%
                  </span>
                </div>
                {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div> */}
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

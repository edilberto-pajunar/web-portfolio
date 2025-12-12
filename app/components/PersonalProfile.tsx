"use client";

import Image from "next/image";
import { profileData } from "../interface/PersonalProfile";

export default function PersonalProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="h-32 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="px-8 pb-8">
            <div className="flex items-end -mt-16 mb-6">
              <div className=" w-32 h-32 bg-linear-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-6xl border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src={profileData.profilePicture}
                  alt={profileData.name}
                  width={128}
                  height={100}
                />
              </div>
              <div className="ml-6 flex-1 mt-20">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {profileData.name}
                </h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {profileData.title}
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span>📍</span>
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {profileData.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {profileData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>📖</span> About
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {profileData.about}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span>🎓</span> Education
          </h2>
          <div className="space-y-6">
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-6 pb-6 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {edu.school}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    📍 {edu.location}
                  </span>
                  <span className="flex items-center gap-1">📅 {edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span>💼</span> Experience
          </h2>
          <div className="space-y-4">
            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>⚡</span> Skills
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8 flex items-center gap-2">
              <span>⚡</span> Tools
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {profileData.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

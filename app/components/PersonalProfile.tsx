"use client";

import Image from "next/image";
import { profileData } from "../interface/PersonalProfile";

export default function PersonalProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden mb-8">
          <div className="h-48 bg-blue-600 dark:bg-blue-700"></div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-20">
              <div className="w-40 h-40 bg-white dark:bg-gray-900 rounded-3xl p-2 shadow-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900">
                  <Image
                    src={profileData.profilePicture}
                    alt={profileData.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 md:mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {profileData.name}
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {profileData.title}
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-lg">📍</span>
                  <span className="text-base">{profileData.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <span className="text-2xl">✉️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {profileData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {profileData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">📖</span>
            <span>About</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {profileData.about}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-3xl">🎓</span>
            <span>Education</span>
          </h2>
          <div className="space-y-8">
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-500 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full ring-4 ring-white dark:ring-gray-900"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {edu.school}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span>📍</span>
                    <span>{edu.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span>📅</span>
                    <span>{edu.year}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">💼</span>
            <span>Experience</span>
          </h2>
          <div className="space-y-4">
            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {exp.position}
                </h3>
                <p className="text-base text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <span>Skills</span>
          </h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            <span>Tools</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {profileData.tools.map((tool, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-gray-700 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full text-sm font-semibold transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

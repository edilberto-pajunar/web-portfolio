"use client";

import Image from "next/image";
import { profileData } from "../interface/PersonalProfile";

export default function PersonalProfile() {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto pt-8">
        <div className="rounded-3xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6 px-8 pt-8">
            <div className="w-40  bg-white dark:bg-gray-900 rounded-3xl shadow-xl">
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

            <div className="flex-1 text-left">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {profileData.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {profileData.title}
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <span className="text-base">{profileData.location}</span>
              </div>

              <div className="pb-8 flex items-center gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {profileData.email}
                  </p>
                </div>
                <div className="min-w-0">
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
      </div>
    </div>
  );
}

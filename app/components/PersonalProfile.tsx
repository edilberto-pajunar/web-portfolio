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
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {profileData.name}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {profileData.title}
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="text-base">{profileData.location}</span>
              </div>
              <div className="pb-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

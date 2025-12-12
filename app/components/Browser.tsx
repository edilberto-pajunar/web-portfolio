"use client";

import { useBrowserStore } from "../store/useBrowserStore";
import Image from "next/image";
import PersonalProfile from "./PersonalProfile";
import WorkProfile from "./WorkProfile";

const profiles = [
  { id: "personal", name: "Personal", color: "bg-blue-500", icon: "👤" },
  { id: "work", name: "Work", color: "bg-purple-500", icon: "💼" },
  { id: "guest", name: "Guest", color: "bg-gray-500", icon: "🌐" },
];

export default function Browser() {
  const { isOpen, setIsOpen, selectedProfile, setSelectedProfile } =
    useBrowserStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/20">
      <div className="w-full max-w-5xl h-[700px] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-t-lg border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
            />
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
          </div>
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Brave Browser
          </span>
          <div className="w-12" />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
          {selectedProfile && (
            <button
              onClick={() => setSelectedProfile(null)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back
            </button>
          )}
          <div className="flex items-center gap-2 flex-1 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 border border-gray-300 dark:border-gray-600">
            <Image src="/icons/brave.svg" alt="Brave" width={16} height={16} />
            <span className="text-sm text-gray-500">
              {selectedProfile
                ? profiles.find((p) => p.id === selectedProfile)?.name
                : "New Tab"}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex bg-gradient-to-br from-orange-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          {!selectedProfile ? (
            <div className="max-w-2xl mx-auto p-8 text-center flex items-center justify-center w-full">
              <div>
                <div className="mb-8">
                  <Image
                    src="/icons/brave.svg"
                    alt="Brave"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome to Brave
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select a profile to get started
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {profiles.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => setSelectedProfile(profile.id)}
                      className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all hover:shadow-xl hover:scale-105"
                    >
                      <div
                        className={`w-16 h-16 ${profile.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-3`}
                      >
                        {profile.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to browse
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <button className="text-sm text-orange-600 dark:text-orange-400 hover:underline font-medium">
                    + Add New Profile
                  </button>
                </div>
              </div>
            </div>
          ) : selectedProfile === "personal" ? (
            <PersonalProfile />
          ) : selectedProfile === "work" ? (
            <WorkProfile />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {profiles.find((p) => p.id === selectedProfile)?.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {profiles.find((p) => p.id === selectedProfile)?.name} Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browser content will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

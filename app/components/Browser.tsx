"use client";

import { useBrowserStore } from "../store/useBrowserStore";
import { useWindowManager, WindowType } from "../store/useWindowManager";
import { useEffect } from "react";
import Image from "next/image";
import PersonalProfile from "./PersonalProfile";
import WorkProfile from "./WorkProfile";
import TabOption from "./TabOption";
import Projects from "./Projects";

const profiles = [
  { id: "personal", name: "Personal", color: "bg-blue-500", icon: "👤" },
  { id: "work", name: "Work", color: "bg-purple-500", icon: "💼" },
  { id: "projects", name: "Projects", color: "bg-gray-500", icon: "🌐" },
];

export default function Browser() {
  const {
    isOpen,
    setIsOpen,
    selectedProfile,
    setSelectedProfile,
    setActiveTab,
    activeTab,
    tabs,
    addTab,
    closeTab,
  } = useBrowserStore();
  const { bringToFront, getZIndex } = useWindowManager();

  useEffect(() => {
    if (isOpen) {
      bringToFront(WindowType.BROWSER);
    }
  }, [isOpen, bringToFront]);

  const handleAddTab = () => {
    setSelectedProfile(null);
    setActiveTab(null);
  };

  const handleTabClick = (profileId: string) => {
    setActiveTab(profileId);
    setSelectedProfile(profileId);
  };

  const handleTabClose = (profileId: string) => {
    closeTab(profileId);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/20"
      style={{ zIndex: getZIndex(WindowType.BROWSER) }}
      onClick={() => bringToFront(WindowType.BROWSER)}
    >
      <div
        className="w-full max-w-5xl h-[700px] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <TabOption
          onClose={() => setIsOpen(false)}
          title="Brave Browser"
          tabs={tabs}
          onTabClicked={handleTabClick}
          onTabClose={handleTabClose}
          onAddTab={handleAddTab}
          activeTab={activeTab}
        />

        <div className="flex-1 overflow-hidden flex bg-linear-to-br from-orange-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
                      onClick={() => {
                        setSelectedProfile(profile.id);
                        addTab(profile.id);
                      }}
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
            <Projects />
          )}
        </div>
      </div>
    </div>
  );
}

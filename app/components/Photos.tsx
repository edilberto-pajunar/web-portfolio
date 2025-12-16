"use client";

import { usePhotosStore } from "../store/usePhotosStore";
import { useWindowManager, WindowType } from "../store/useWindowManager";
import { Photo } from "../interface/Photo";
import { useState, useEffect } from "react";
import Image from "next/image";
import TabOption from "./TabOption";
import { projects } from "../interface/Project";

export default function Photos() {
  const { isOpen, setIsOpen } = usePhotosStore();
  const { bringToFront, getZIndex } = useWindowManager();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const allPhotos = projects.flatMap((project) => project.images);

  useEffect(() => {
    if (isOpen) {
      bringToFront(WindowType.PHOTOS);
    }
  }, [isOpen, bringToFront]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      style={{ zIndex: getZIndex(WindowType.PHOTOS) }}
      onClick={() => bringToFront(WindowType.PHOTOS)}
    >
      <div
        className="w-full max-w-6xl h-[720px] flex flex-col bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <TabOption onClose={() => setIsOpen(false)} title="Photos" />

        {!selectedPhoto ? (
          <div className="flex-1 overflow-y-auto p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <span className="text-4xl">📸</span>
                <span>All Photos</span>
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 ml-14">
                {allPhotos.length} items
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {allPhotos.map((photo: string, index: number) => (
                <button
                  key={`${photo}-${index}`}
                  onClick={() => {}}
                  className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transition-transform group rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm"
                >
                  <Image
                    src={photo}
                    alt={photo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="w-full p-3 bg-black/80">
                      <p className="text-white text-sm font-semibold truncate">
                        Photo {index + 1}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-4 bg-gray-50 dark:bg-gray-800">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors flex items-center gap-2"
              >
                <span>←</span>
                <span>Back</span>
              </button>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <span className="text-gray-900 dark:text-white font-bold text-base">
                {selectedPhoto.title}
              </span>
            </div>

            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-950 relative">
                <Image
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain rounded-2xl shadow-2xl"
                />
              </div>

              <div className="w-80 border-l border-gray-200 dark:border-gray-700 p-6 overflow-y-auto bg-white dark:bg-gray-900">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Date
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {selectedPhoto.date}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Album
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {selectedPhoto.album}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

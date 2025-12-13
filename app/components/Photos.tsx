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
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/20"
      style={{ zIndex: getZIndex(WindowType.PHOTOS) }}
      onClick={() => bringToFront(WindowType.PHOTOS)}
    >
      <div
        className="w-full max-w-6xl h-[700px] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <TabOption onClose={() => setIsOpen(false)} title="Photos" />

        {!selectedPhoto ? (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                All Photos
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {allPhotos.length} items
              </p>
            </div>

            <div className="grid grid-cols-4 gap-0.5">
              {allPhotos.map((photo: string, index: number) => (
                <button
                  key={`${photo}-${index}`}
                  onClick={() => {}}
                  className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition-opacity group border border-gray-200 dark:border-gray-700"
                >
                  <Image
                    src={photo}
                    alt={photo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-xs font-medium truncate">
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
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-blue-500 hover:text-blue-600 font-medium text-sm"
              >
                ← Back
              </button>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-900 dark:text-white font-medium text-sm">
                {selectedPhoto.title}
              </span>
            </div>

            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-950 relative">
                <Image
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>

              <div className="w-80 border-l border-gray-200 dark:border-gray-700 p-6 overflow-y-auto bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {selectedPhoto.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-1">
                      Date
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {selectedPhoto.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-1">
                      Album
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
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

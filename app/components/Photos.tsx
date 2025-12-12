"use client";

import { usePhotosStore } from "../store/usePhotosStore";
import { Photo } from "../interface/Photo";
import { useState } from "react";
import Image from "next/image";

const samplePhotos: Photo[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    title: "Mountain Vista",
    description: "Breathtaking mountain landscape at sunset",
    date: "Dec 10, 2025",
    album: "Nature",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000",
    title: "Ocean Waves",
    description: "Peaceful ocean view with rolling waves",
    date: "Dec 8, 2025",
    album: "Nature",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1682687221038-404cb8830901",
    title: "City Lights",
    description: "Urban skyline illuminated at night",
    date: "Dec 5, 2025",
    album: "Urban",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1682687221363-72efc93e4d77",
    title: "Forest Path",
    description: "Serene walking trail through the woods",
    date: "Dec 3, 2025",
    album: "Nature",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb",
    title: "Desert Sunset",
    description: "Golden hour in the desert dunes",
    date: "Dec 1, 2025",
    album: "Travel",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1682687218147-9806132dc697",
    title: "Winter Scene",
    description: "Snow-covered landscape in winter",
    date: "Nov 28, 2025",
    album: "Seasons",
  },
];

export default function Photos() {
  const { isOpen, setIsOpen } = usePhotosStore();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/20">
      <div className="w-full max-w-6xl h-[700px] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
            />
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
          </div>
          <span className="text-gray-900 dark:text-white text-sm font-semibold">
            Photos
          </span>
          <div className="w-12" />
        </div>

        {!selectedPhoto ? (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                All Photos
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {samplePhotos.length} items
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1">
              {samplePhotos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition-opacity group"
                >
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-sm font-medium truncate">
                        {photo.title}
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

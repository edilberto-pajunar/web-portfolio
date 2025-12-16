"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, projects } from "../interface/Project";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-4">
            <span className="text-5xl">🚀</span>
            <span>My Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 ml-[72px]">
            Explore my latest work and side projects
          </p>
        </div>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                filter === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      project.status === "live"
                        ? "bg-green-600 text-white"
                        : project.status === "in-progress"
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {project.status === "live"
                      ? "🟢 Live"
                      : project.status === "in-progress"
                      ? "🟡 In Progress"
                      : "✅ Completed"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg">
                    {project.platform}
                  </span>
                  <span className="text-xs font-bold px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors shadow-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg text-xl font-bold text-gray-900 dark:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${
                      selectedProject.status === "live"
                        ? "bg-green-600 text-white"
                        : selectedProject.status === "in-progress"
                        ? "bg-yellow-500 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {selectedProject.status === "live"
                      ? "🟢 Live"
                      : selectedProject.status === "in-progress"
                      ? "🟡 In Progress"
                      : "✅ Completed"}
                  </span>
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-bold">
                    {selectedProject.platform}
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">🛠️</span>
                    <span>Tech Stack</span>
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2.5 bg-gray-700 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl text-sm font-bold transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors text-center shadow-md"
                  >
                    🚀 View Live Demo
                  </a>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-2xl font-bold transition-colors text-center shadow-md"
                    >
                      💻 View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

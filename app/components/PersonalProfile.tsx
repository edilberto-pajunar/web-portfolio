"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    author: "Edilberto Pajunar",
    username: "@edilberto",
    avatar: "👨‍💻",
    content:
      "Just shipped a new feature! The terminal integration is looking amazing 🚀",
    timestamp: "2h ago",
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: "Edilberto Pajunar",
    username: "@edilberto",
    avatar: "👨‍💻",
    content:
      "Working on my portfolio with Next.js and Tailwind. The macOS UI is coming together nicely! 💻✨",
    timestamp: "5h ago",
    likes: 87,
    comments: 15,
    shares: 12,
  },
  {
    id: 3,
    author: "Edilberto Pajunar",
    username: "@edilberto",
    avatar: "👨‍💻",
    content: "Coffee + Code = Perfect Day ☕️",
    timestamp: "1d ago",
    likes: 156,
    comments: 23,
    shares: 8,
  },
];

export default function PersonalProfile() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Edilberto Pajunar
              </h2>
              <p className="text-gray-600 dark:text-gray-400">@edilberto</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="flex gap-6 text-sm">
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                1.2K
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">
                Following
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                3.5K
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-1">
                Followers
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">
              👨‍💻
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 outline-none resize-none text-lg"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full">
                    📷
                  </button>
                  <button className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full">
                    🎥
                  </button>
                  <button className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full">
                    😊
                  </button>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {post.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {post.author}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {post.username}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">·</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {post.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-900 dark:text-white mb-3">
                    {post.content}
                  </p>
                  <div className="flex gap-8 text-gray-600 dark:text-gray-400">
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                      <span>🔄</span>
                      <span>{post.shares}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      <span>❤️</span>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <span>📤</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

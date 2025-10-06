'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectGrid from './ProjectGrid';

export type TabType = 'saved' | 'posted';

export default function LibraryProfile() {
  const [activeTab, setActiveTab] = useState<TabType>('saved');

  // Mock user data
  const userData = {
    username: 'john_doe',
    avatar: '/api/placeholder/150/150',
    stats: {
      created: 24,
      posted: 18,
      likes: 342,
      dislikes: 12
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-gray-700 border-2 border-gray-600 overflow-hidden flex-shrink-0">
            <Image
              src={userData.avatar}
              alt={userData.username}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-4">{userData.username}</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="text-start">
                <div className="text-2xl font-bold text-white">{userData.stats.created}</div>
                <div className="text-sm text-gray-400">Created</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">{userData.stats.posted}</div>
                <div className="text-sm text-gray-400">Posted</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">{userData.stats.likes}</div>
                <div className="text-sm text-gray-400">Likes</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">{userData.stats.dislikes}</div>
                <div className="text-sm text-gray-400">Dislikes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setActiveTab('saved')}
              className={`pb-4 px-2 font-medium transition-all duration-200 ${
                activeTab === 'saved'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
            <button
              onClick={() => setActiveTab('posted')}
              className={`pb-4 px-2 font-medium transition-all duration-200 ${
                activeTab === 'posted'
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Posted
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <ProjectGrid activeTab={activeTab} />
      </div>
    </div>
  );
}
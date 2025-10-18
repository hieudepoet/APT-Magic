'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import FeedContent from './FeedContent';
import RankingSidebar from './RankingSidebar';

export type FilterType = 'feed' | 'explore' | 'restoration' | 'anime' | 'cyberpunk' | 'viral' | 'id' | 'ultra-hd';
export type MobileViewType = 'feed' | 'rankings';

export default function CommunityFeed() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('feed');
  const [mobileView, setMobileView] = useState<MobileViewType>('feed');

  return (
    <div className="h-screen text-white overflow-hidden pt-16 mt-5">
      <div className="max-w-7xl mx-auto h-full">
        {/* Desktop Layout: 3 columns */}
        <div className="hidden md:flex h-full">
          <Sidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <FeedContent activeFilter={activeFilter} />
          <RankingSidebar />
        </div>

        {/* Mobile Layout: Single column with bottom navigation */}
        <div className="md:hidden flex flex-col h-full relative">
          {/* Mobile Horizontal Subtabs (only for feed view) */}
          {mobileView === 'feed' && (
            <div className="border-b border-gray-700 overflow-x-auto flex whitespace-nowrap [scrollbar-width:none]">
              {(['feed', 'explore', 'restoration', 'anime', 'cyberpunk', 'viral', 'id', 'ultra-hd'] as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-4 transition-opacity duration-300">
            {mobileView === 'feed' ? (
              <FeedContent activeFilter={activeFilter} />
            ) : (
              <RankingSidebar />
            )}
          </div>

          {/* Bottom Navigation - Text only */}
          <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 flex justify-around py-2 md:hidden z-100">
            <button
              onClick={() => setMobileView('feed')}
              className={`p-2 text-sm font-medium ${mobileView === 'feed' ? 'text-white' : 'text-gray-400'} transition-colors`}
            >
              Gallery
            </button>
            <button
              onClick={() => setMobileView('rankings')}
              className={`p-2 text-sm font-medium ${mobileView === 'rankings' ? 'text-white' : 'text-gray-400'} transition-colors`}
            >
              Rankings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
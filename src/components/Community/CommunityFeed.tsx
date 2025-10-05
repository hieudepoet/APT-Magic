'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import FeedContent from './FeedContent';
import RankingSidebar from './RankingSidebar';

export type FilterType = 'feed' | 'explore' | 'restoration' | 'anime' | 'cyberpunk' | 'viral' | 'id' | 'ultra-hd';

export default function CommunityFeed() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('feed');

  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex h-full">
        {/* Left Sidebar */}
        <Sidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        {/* Main Feed */}
        <FeedContent activeFilter={activeFilter} />
        
        {/* Right Sidebar - Rankings */}
        <RankingSidebar />
      </div>
    </div>
  );
}
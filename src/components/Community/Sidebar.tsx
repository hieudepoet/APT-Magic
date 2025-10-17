'use client';

import { FilterType } from './CommunityFeed';

interface SidebarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filterOptions = [
  { 
    id: 'explore' as FilterType, 
    label: 'Explore', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  { 
    id: 'feed' as FilterType, 
    label: 'Feed', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
      </svg>
    )
  },
  { 
    id: 'restoration' as FilterType, 
    label: 'Photo Restoration', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    id: 'anime' as FilterType, 
    label: 'Anime Style', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  { 
    id: 'cyberpunk' as FilterType, 
    label: 'Cyberpunk Style', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 'viral' as FilterType, 
    label: 'Viral Prompt', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    id: 'id' as FilterType, 
    label: 'ID Photo', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  { 
    id: 'ultra-hd' as FilterType, 
    label: 'Ultra HD', 
    icon: (
      <div className="text-sm font-bold">4K</div>
    )
  },
];

export default function Sidebar({ activeFilter, onFilterChange }: SidebarProps) {
  return (
    <div className="w-64 h-full border-r border-gray-800 p-4 overflow-y-auto top-0 pt-0">
      <div className="space-y-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
              activeFilter === option.id
                ? 'bg-white/10 border border-white/20 text-white shadow-lg shadow-white/5'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <div className="text-gray-400 group-hover:text-white transition-colors">{option.icon}</div>
            <span className={
              option.id === 'explore' 
              ? "text-xl font-bold"
              : "font-medium"
            }>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
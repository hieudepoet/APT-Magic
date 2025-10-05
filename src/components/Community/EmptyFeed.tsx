'use client';

import { FilterType } from './CommunityFeed';

interface EmptyFeedProps {
  filterType: FilterType;
}

const emptyMessages = {
  feed: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'No posts in your feed',
    description: 'Follow some creators or check back later for new content!'
  },
  explore: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
      </svg>
    ),
    title: 'Nothing to explore yet',
    description: 'Be the first to share your amazing transformations!'
  },
  restoration: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'No photo restorations yet',
    description: 'Share your restored photos to inspire others!'
  },
  anime: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'No anime transformations yet',
    description: 'Create some anime-style art to get started!'
  },
  cyberpunk: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'No cyberpunk creations yet',
    description: 'Bring some futuristic vibes to the community!'
  },
  viral: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'No viral prompts yet',
    description: 'Share your trending transformations!'
  },
  id: {
    icon: (
      <svg className="w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'No ID photos yet',
    description: 'Upload your professional ID photo transformations!'
  },
  'ultra-hd': {
    icon: (
      <div className="text-sm font-bold">4K</div>
    ),
    title: 'No Ultra HD content yet',
    description: 'Share your high-quality transformations!'
  }
};

export default function EmptyFeed({ filterType }: EmptyFeedProps) {
  const message = emptyMessages[filterType];

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-6xl mb-6">{message.icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-3">{message.title}</h3>
      <p className="text-gray-400 text-center max-w-md mb-8">{message.description}</p>
      <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 hover:shadow-lg hover:shadow-white/10">
        Create Your First Post
      </button>
    </div>
  );
}
'use client';

import { FilterType } from './CommunityFeed';
import PostCard from './PostCard';
import ExploreGrid from './ExploreGrid';
import EmptyFeed from './EmptyFeed';

interface FeedContentProps {
  activeFilter: FilterType;
}

// Mock data - replace with real API calls
const mockPosts = [
  {
    id: '1',
    author: 'john_doe',
    avatar: '/api/placeholder/40/40',
    beforeImage: '/api/placeholder/400/400',
    afterImage: '/api/placeholder/400/400',
    transformType: 'restoration' as const,
    likes: 24,
    dislikes: 2,
    timestamp: '2 hours ago',
    isLiked: false,
    isDisliked: false,
  },
  {
    id: '2',
    author: 'anime_lover',
    avatar: '/api/placeholder/40/40',
    beforeImage: '/api/placeholder/400/400',
    afterImage: '/api/placeholder/400/400',
    transformType: 'anime' as const,
    likes: 156,
    dislikes: 8,
    timestamp: '5 hours ago',
    isLiked: true,
    isDisliked: false,
  },
];

export default function FeedContent({ activeFilter }: FeedContentProps) {
  // Filter posts based on active filter
  const filteredPosts = activeFilter === 'feed' 
    ? mockPosts 
    : mockPosts.filter(post => post.transformType === activeFilter);

  if (activeFilter === 'explore') {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6">
        <ExploreGrid posts={mockPosts} />
      </div>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6">
        <EmptyFeed filterType={activeFilter} />
      </div>
    );
  }

  return (
    <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] max-w-2xl mx-auto p-6">
      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
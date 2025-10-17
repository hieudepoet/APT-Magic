'use client';

import { FilterType } from './CommunityFeed';
import { useCommunityPosts } from '@/hooks/useCommunityPosts';
import PostCard from './PostCard';
import ExploreGrid from './ExploreGrid';
import EmptyFeed from './EmptyFeed';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

interface FeedContentProps {
  activeFilter: FilterType;
}



export default function FeedContent({ activeFilter }: FeedContentProps) {
  const { posts, loading, error } = useCommunityPosts(activeFilter);

  if (loading) {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error: {error}</p>
          <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (activeFilter === 'explore') {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6">
        <ExploreGrid posts={posts} />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6 border-t border-gray-800">
        <EmptyFeed filterType={activeFilter} />
      </div>
    );
  }

  return (
    <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] max-w-2xl mx-auto p-6">
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
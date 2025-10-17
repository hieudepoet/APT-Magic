'use client';

import Image from 'next/image';
import { useState } from 'react';
import PostModal from './PostModal';
import EmptyFeed from './EmptyFeed';

interface Post {
  id: string;
  author: string;
  avatar: string;
  beforeImage: string;
  afterImage: string;
  transformType: 'restoration' | 'anime' | 'cyberpunk' | 'viral' | 'id' | 'ultra-hd';
  likes: number;
  dislikes: number;
  timestamp: string;
  isLiked: boolean;
  isDisliked: boolean;
}

interface ExploreGridProps {
  posts: Post[];
}

export default function ExploreGrid({ posts }: ExploreGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  if (posts.length === 0) {
    return (
      <div className="flex-1 h-full overflow-y-auto [scrollbar-width:none] p-6">
        <EmptyFeed filterType={"explore"} />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedPost(post)}
          >
            <Image
              src={post.afterImage}
              alt="Transformed image"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 bg-black/70 rounded px-2 py-1">
                {/* <span className="text-white text-xs">👍</span> */}
                <Image src="/assets/heart.png" alt="like" width={12} height={12} />
                <span className="text-white text-xs">{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}
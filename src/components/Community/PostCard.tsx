'use client';

import { useState } from 'react';
import Image from 'next/image';

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

interface PostCardProps {
  post: Post;
}

const transformLabels = {
  restoration: 'Photo Restoration',
  anime: 'Anime Style',
  cyberpunk: 'Cyberpunk Style',
  viral: 'Viral Prompt',
  id: 'ID Photo',
  'ultra-hd': 'Ultra HD',
};

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isDisliked, setIsDisliked] = useState(post.isDisliked);
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(prev => prev - 1);
    } else {
      setIsLiked(true);
      setLikes(prev => prev + 1);
      if (isDisliked) {
        setIsDisliked(false);
        setDislikes(prev => prev - 1);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setDislikes(prev => prev - 1);
    } else {
      setIsDisliked(true);
      setDislikes(prev => prev + 1);
      if (isLiked) {
        setIsLiked(false);
        setLikes(prev => prev - 1);
      }
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 overflow-hidden">
            <Image
              src={post.avatar}
              alt={post.author}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-white">{post.author}</p>
            <p className="text-sm text-gray-400">{post.timestamp}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
          {transformLabels[post.transformType]}
        </span>
      </div>

      {/* Before/After Images */}
      <div className="grid grid-cols-2 gap-0">
        <div className="relative aspect-square">
          <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-black/70 rounded text-xs text-white">
            Before
          </div>
          <Image
            src={post.beforeImage}
            alt="Before transformation"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square">
          <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-black/70 rounded text-xs text-white">
            After
          </div>
          <Image
            src={post.afterImage}
            alt="After transformation"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              isLiked
                ? 'bg-white/20 text-white border border-white/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-lg">👍</span>
            <span className="font-medium">{likes}</span>
          </button>
          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
              isDisliked
                ? 'bg-white/20 text-white border border-white/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-lg">👎</span>
            <span className="font-medium">{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
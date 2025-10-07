import { useState, useEffect } from 'react';
import { FilterType } from '@/components/Community/CommunityFeed';

interface Post {
  id: string;
  author: string;
  avatar: string;
  beforeImage: string;
  afterImage: string;
  transformType: string;
  likes: number;
  dislikes: number;
  timestamp: string;
  isLiked: boolean;
  isDisliked: boolean;
}

export function useCommunityPosts(filter: FilterType) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams();
      if (filter !== 'feed' && filter !== 'explore') {
        params.append('transformType', filter);
      }
      
      const response = await fetch(`/api/community/posts?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [filter]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts
  };
}
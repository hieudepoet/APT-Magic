import { useState, useEffect } from 'react';
import { FilterType } from '@/components/Community/CommunityFeed';
import api from '@/lib/axios';

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
      
      const response = await api.get(`/community/posts?${params.toString()}`);
      console.log('Fetch posts response:', response);
      
      if (response.data.error) {
        throw new Error('Failed to fetch posts');
      }
      
      setPosts(response.data.posts || []);
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
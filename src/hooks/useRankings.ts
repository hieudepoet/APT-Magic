import api from '@/lib/axios';
import { useState, useEffect } from 'react';

interface RankingUser {
  id: string;
  username: string;
  avatar: string;
  totalLikes: number;
  rank: number;
}

export function useRankings() {
  const [rankings, setRankings] = useState<RankingUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRankings = async () => {
    try {
      setLoading(true);
      
      const response = await api.get('/community/rankings');
      
      if (response.data.error) {
        throw new Error('Failed to fetch rankings');
      }
      
      setRankings(response.data.rankings || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch rankings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRankings();
  }, []);

  return {
    rankings,
    loading,
    error,
    refetch: fetchRankings
  };
}
import { useState, useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import api from '@/lib/axios';

interface Project {
  id: string;
  title?: string;
  transform_type: string;
  before_image_url: string;
  after_image_url: string;
  thumbnail_url?: string;
  status: 'saved' | 'posted';
  created_at: string;
}

export function useProjects(status?: 'saved' | 'posted') {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      
      // Get current user to get cognitoId
      const currentUser = await getCurrentUser();
      
      const params = new URLSearchParams();
      params.append('cognitoId', currentUser.userId);
      if (status) {
        params.append('status', status);
      }
      
      const response = await api.get(`/api/users/projects?${params.toString()}`);

      if (response.data.error) {
        throw new Error('Failed to fetch projects');
      }
      
      setProjects(response.data.projects || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [status]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  };
}
import { useState, useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import supabase from "@/lib/supabase";

interface Project {
  id: string;
  title?: string;
  transform_type: string;
  before_image_url: string;
  after_image_url: string;
  thumbnail_url?: string;
  status: "saved" | "posted";
  created_at: string;
}

export function useProjects(status?: "saved" | "posted") {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const currentUser = await getCurrentUser();

      if (!currentUser.userId) {
        throw new Error("Unable to get current user");
      }

      // Get user from Supabase
      const { data: user, error: userError } = await supabase
        .from("users")
        .select("id")
        .eq("cognito_id", currentUser.userId)
        .single();

      if (userError) {
        throw new Error("Failed to fetch user: " + userError.message);
      }

      if (!user) {
        throw new Error("User not found");
      }

      // Build query
      let query = supabase
        .from("projects")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      // Filter by status if provided
      if (status) {
        query = query.eq("status", status);
      }

      const { data: projects, error: projectsError } = await query;

      if (projectsError) {
        throw new Error("Failed to fetch projects: " + projectsError.message);
      }

      setProjects(projects || []);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
      setProjects([]);
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
    refetch: fetchProjects,
  };
}

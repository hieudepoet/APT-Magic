"use client";

import { useState, useEffect } from "react";
import { getCurrentUser, signOut, fetchAuthSession } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import {
  createSupabaseUser,
  getSupabaseUserByCognitoId,
} from "@/lib/supabase-auth";

interface User {
  id: string;
  username: string;
  email?: string;
  avatar_url?: string;
  stats?: {
    total_created: number;
    total_posted: number;
    total_likes_received: number;
    total_dislikes_received: number;
  };
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      // Check if user has a valid session
      const session = await fetchAuthSession({ forceRefresh: true });
      console.log("Session check:", {
        hasAccessToken: !!session.tokens?.accessToken,
      });

      if (!session.tokens?.accessToken) {
        console.log("No valid session found");
        setUser(null);
        return;
      }

      // Get current user
      const currentUser = await getCurrentUser();
      console.log("currentUser: ", currentUser);

      // Check if user exists in Supabase
      const fullUser = await getSupabaseUserByCognitoId(currentUser.userId);
      console.log("fullUser: ", fullUser);

      if (!fullUser) {
        console.error("User exists in Cognito but not in Supabase");
        throw new Error("User not found in database");
      }

      setUser({
        id: fullUser.id,
        username: fullUser.username,
        email: fullUser.email,
        avatar_url: fullUser.avatar_url,
        stats: fullUser.user_stats?.[0] || {
          total_created: 0,
          total_posted: 0,
          total_likes_received: 0,
          total_dislikes_received: 0,
        },
      });
    } catch (error) {
      console.log("No authenticated user found: ", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({ global: true });
      setUser(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    checkUser();

    // Listen for auth events
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      console.log("Auth event:", payload.event);
      switch (payload.event) {
        case "signedIn":
          // Small delay to ensure session is fully established
          setTimeout(() => checkUser(), 1000);
          break;
        case "signedOut":
          setUser(null);
          break;
      }
    });

    return unsubscribe;
  }, []);

  return {
    user,
    loading,
    signOut: handleSignOut,
    isAuthenticated: !!user,
  };
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import ProjectGrid from "./ProjectGrid";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

export type TabType = "saved" | "posted";

export default function LibraryProfile() {
  const [activeTab, setActiveTab] = useState<TabType>("saved");
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Please sign in to view your library</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-16">
      <div className="max-w-4xl mx-auto p-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-gray-700 border-2 border-gray-600 overflow-hidden flex-shrink-0">
            <Image
              src={user.avatar_url || "/assets/anon-user.png"}
              alt={user.username}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-4">
              {user.username}
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="text-start">
                <div className="text-2xl font-bold text-white">
                  {user.stats?.total_created || 0}
                </div>
                <div className="text-sm text-gray-400">Created</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">
                  {user.stats?.total_posted || 0}
                </div>
                <div className="text-sm text-gray-400">Posted</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">
                  {user.stats?.total_likes_received || 0}
                </div>
                <div className="text-sm text-gray-400">Likes</div>
              </div>
              <div className="text-start">
                <div className="text-2xl font-bold text-white">
                  {user.stats?.total_dislikes_received || 0}
                </div>
                <div className="text-sm text-gray-400">Dislikes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setActiveTab("saved")}
              className={`pb-4 px-2 font-medium transition-all duration-200 ${
                activeTab === "saved"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
            <button
              onClick={() => setActiveTab("posted")}
              className={`pb-4 px-2 font-medium transition-all duration-200 ${
                activeTab === "posted"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Posted
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <ProjectGrid activeTab={activeTab} />
      </div>
    </div>
  );
}

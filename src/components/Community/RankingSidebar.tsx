'use client';

import Image from 'next/image';
import { useRankings } from '@/hooks/useRankings';
import LoadingSpinner from '@/components/Common/LoadingSpinner';

interface RankingUser {
  id: string;
  username: string;
  avatar: string;
  totalLikes: number;
  rank: number;
}



export default function RankingSidebar() {
  const { rankings, loading, error } = useRankings();
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className="w-80 h-full border-l border-gray-800 flex flex-col sticky top-0">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white mb-2">Top Creators</h2>
        <p className="text-sm text-gray-400">Ranked by total likes received</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {loading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-400 text-sm mb-2">Error loading rankings</p>
            <p className="text-gray-500 text-xs">{error}</p>
          </div>
        ) : rankings.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">No rankings available</p>
          </div>
        ) : (
          <div className="space-y-3">
            {rankings.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/5 ${
                user.rank <= 3 ? 'bg-white/5 border border-white/10' : ''
              }`}
            >
              <div className="flex-shrink-0 text-lg font-bold w-8 text-center">
                {user.rank <= 3 ? (
                  <span className="text-xl">{getRankIcon(user.rank)}</span>
                ) : (
                  <span className="text-gray-400">{getRankIcon(user.rank)}</span>
                )}
              </div>
              
              <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 overflow-hidden flex-shrink-0">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{user.username}</p>
                <div className="flex items-center gap-1">
                  {/* <span className="text-xs">👍</span> */}
                  <Image src="/assets/heart.png" alt="like" width={18} height={18} />
                  <span className="text-sm text-gray-400">{user.totalLikes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
          <h3 className="font-semibold text-white mb-2">Want to rank higher?</h3>
          <p className="text-sm text-gray-400 mb-3">
            Create amazing transformations and get more likes from the community!
          </p>
          <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm hover:bg-white/20 transition-all duration-200">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}
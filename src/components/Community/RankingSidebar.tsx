'use client';

import Image from 'next/image';

interface RankingUser {
  id: string;
  username: string;
  avatar: string;
  totalLikes: number;
  rank: number;
}

// Mock ranking data
const mockRankings: RankingUser[] = [
  { id: '1', username: 'ai_master', avatar: '/api/placeholder/40/40', totalLikes: 1247, rank: 1 },
  { id: '2', username: 'photo_wizard', avatar: '/api/placeholder/40/40', totalLikes: 892, rank: 2 },
  { id: '3', username: 'anime_creator', avatar: '/api/placeholder/40/40', totalLikes: 756, rank: 3 },
  { id: '4', username: 'cyber_artist', avatar: '/api/placeholder/40/40', totalLikes: 634, rank: 4 },
  { id: '5', username: 'restoration_pro', avatar: '/api/placeholder/40/40', totalLikes: 521, rank: 5 },
  { id: '6', username: 'viral_maker', avatar: '/api/placeholder/40/40', totalLikes: 445, rank: 6 },
  { id: '7', username: 'hd_specialist', avatar: '/api/placeholder/40/40', totalLikes: 389, rank: 7 },
  { id: '8', username: 'creative_soul', avatar: '/api/placeholder/40/40', totalLikes: 312, rank: 8 },
];

export default function RankingSidebar() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className="w-80 h-screen border-l border-gray-800 flex flex-col sticky top-0">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white mb-2">Top Creators</h2>
        <p className="text-sm text-gray-400">Ranked by total likes received</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {mockRankings.map((user) => (
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
                  <Image src="/heart.png" alt="like" width={18} height={18} />
                  <span className="text-sm text-gray-400">{user.totalLikes.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
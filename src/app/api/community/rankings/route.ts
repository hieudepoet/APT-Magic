import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Get top users by total likes received
    const { data: rankings, error } = await supabase
      .from('user_stats')
      .select(`
        total_likes_received,
        users!inner (
          id,
          username,
          avatar_url
        )
      `)
      .order('total_likes_received', { ascending: false })
      .limit(10);

    if (error) {
      throw error;
    }

    // Transform data to match frontend interface
    const transformedRankings = rankings?.map((item: any, index: number) => ({
      id: item.users.id,
      username: item.users.username,
      avatar: item.users.avatar_url || '/api/placeholder/40/40',
      totalLikes: item.total_likes_received,
      rank: index + 1
    })) || [];

    return NextResponse.json({ rankings: transformedRankings });
  } catch (error) {
    console.error('Get rankings error:', error);
    return NextResponse.json({ error: 'Failed to get rankings' }, { status: 500 });
  }
}
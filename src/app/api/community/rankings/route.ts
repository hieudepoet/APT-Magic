import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RankingItem = any;

export async function GET(request: NextRequest) {
  try {
    const { data: rankings, error } = await supabaseAdmin
      .from("user_stats")
      .select(
        `
        total_likes_received,
        users!inner (
          id,
          username,
          avatar_url
        )
      `
      )
      .order("total_likes_received", { ascending: false })
      .limit(10);

    if (error) {
      throw error;
    }

    // Transform data to match frontend interface
    const transformedRankings =
      rankings
        ?.map((item: RankingItem, index: number) => {
          const user = item.users?.[0] || item.users;
          if (!user) return null;
          return {
            id: user.id,
            username: user.username,
            avatar: user.avatar_url || "/anon-user.png",
            totalLikes: item.total_likes_received,
            rank: index + 1,
          };
        })
        .filter(Boolean) || [];

    return NextResponse.json({ rankings: transformedRankings });
  } catch (error) {
    console.error("Get rankings error:", error);
    return NextResponse.json(
      { error: "Failed to get rankings" },
      { status: 500 }
    );
  }
}

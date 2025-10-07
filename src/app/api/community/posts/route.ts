import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const transformType = searchParams.get('transformType');

    // Build query for posts with user and project data
    let query = supabase
      .from('posts')
      .select(`
        id,
        created_at,
        likes_count,
        dislikes_count,
        projects!inner (
          id,
          transform_type,
          before_image_url,
          after_image_url,
          user_id,
          users!inner (
            id,
            username,
            avatar_url
          )
        )
      `)
      .order('created_at', { ascending: false });

    // Filter by transform type if specified
    if (transformType && transformType !== 'feed' && transformType !== 'explore') {
      query = query.eq('projects.transform_type', transformType);
    }

    const { data: posts, error } = await query;

    if (error) {
      throw error;
    }

    // Transform data to match frontend interface
    const transformedPosts = posts?.map((post: any) => ({
      id: post.id,
      author: post.projects.users.username,
      avatar: post.projects.users.avatar_url || '/api/placeholder/40/40',
      beforeImage: post.projects.before_image_url,
      afterImage: post.projects.after_image_url,
      transformType: post.projects.transform_type,
      likes: post.likes_count,
      dislikes: post.dislikes_count,
      timestamp: new Date(post.created_at).toLocaleString(),
      isLiked: false, // TODO: Check user's reaction
      isDisliked: false
    })) || [];

    return NextResponse.json({ posts: transformedPosts });
  } catch (error) {
    console.error('Get community posts error:', error);
    return NextResponse.json({ error: 'Failed to get posts' }, { status: 500 });
  }
}
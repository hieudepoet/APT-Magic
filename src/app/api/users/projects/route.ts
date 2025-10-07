import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Get cognitoId from query params or headers
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // 'saved' or 'posted'
    const cognitoId = searchParams.get('cognitoId');
    
    if (!cognitoId) {
      return NextResponse.json(
        { error: 'Missing cognitoId parameter' },
        { status: 400 }
      );
    }

    // Get user from Supabase
    const { data: user } = await supabase
      .from('users')
      .select('id')
      .eq('cognito_id', cognitoId)
      .single();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Build query
    let query = supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (status === 'posted') {
      query = query.eq('status', 'posted');
    }

    const { data: projects, error } = await query;

    if (error) {
      throw error;
    }

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json({ error: 'Failed to get projects' }, { status: 500 });
  }
}
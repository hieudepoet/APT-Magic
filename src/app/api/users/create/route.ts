import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseUser, getSupabaseUserByCognitoId } from '@/lib/supabase-auth';

export async function POST(request: NextRequest) {
  try {
    // Get user data from request body (sent from frontend)
    const { cognitoId, email, username } = await request.json();
    
    if (!cognitoId || !email) {
      return NextResponse.json(
        { error: 'Missing required user data' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getSupabaseUserByCognitoId(cognitoId);
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists in database' },
        { status: 409 }
      );
    }

    // Create new user in Supabase
    const newUser = await createSupabaseUser({
      sub: cognitoId,
      email,
      username
    });

    // Get full user data with stats
    const fullUser = await getSupabaseUserByCognitoId(cognitoId);

    return NextResponse.json({
      message: 'User created successfully',
      user: fullUser
    });
  } catch (error) {
    console.error('User creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
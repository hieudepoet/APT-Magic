import { supabase } from '@/lib/supabase';
import { supabaseAdmin } from '@/lib/supabase-admin';

interface CognitoUser {
  sub: string;
  email: string;
  username?: string;
}

export async function createSupabaseUser(cognitoUser: CognitoUser) {
  const { sub: cognitoId, email, username } = cognitoUser;

  // Validate required fields
  if (!cognitoId || !email) {
    throw new Error('Missing required user data from Cognito');
  }

  console.log('Creating new user in Supabase for:', username || email);

  // Create new user using admin client to bypass RLS
  const { data: newUser, error } = await supabaseAdmin
    .from('users')
    .insert({
      cognito_id: cognitoId,
      email,
      username: username || email.split('@')[0], // Use actual username or email prefix
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating user:', error);
    throw error;
  }

  // Initialize user stats using admin client
  await supabaseAdmin
    .from('user_stats')
    .insert({
      user_id: newUser.id,
      total_created: 0,
      total_posted: 0,
      total_likes_received: 0,
      total_dislikes_received: 0,
    });

  return newUser;
}

export async function getSupabaseUserByCognitoId(cognitoId: string) {
  console.log("Cognito_id: ", cognitoId)
  const { data, error } = await supabase
    .from('users')
    .select('*, user_stats(*)')
    .eq('cognito_id', cognitoId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}
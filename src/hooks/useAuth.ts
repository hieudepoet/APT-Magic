'use client'

import { useState, useEffect } from 'react'
import { getCurrentUser, signOut, fetchAuthSession } from 'aws-amplify/auth'
import { Hub } from 'aws-amplify/utils'
import { createSupabaseUser, getSupabaseUserByCognitoId } from '@/lib/supabase-auth'

interface User {
  id: string
  username: string
  email?: string
  avatar_url?: string
  stats?: {
    total_created: number
    total_posted: number
    total_likes_received: number
    total_dislikes_received: number
  }
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const checkUser = async (retryCount = 0) => {
    try {
      // First check if user has valid session
      const session = await fetchAuthSession({ forceRefresh: true })
      console.log('Session check:', {
        hasAccessToken: !!session.tokens?.accessToken,
        retryCount
      })
      
      if (!session.tokens?.accessToken) {
        // Retry up to 3 times with delay for session to be established
        if (retryCount < 3) {
          console.log(`No session found, retrying in ${(retryCount + 1) * 500}ms...`)
          setTimeout(() => checkUser(retryCount + 1), (retryCount + 1) * 500)
          return
        }
        
        console.log('No valid session found after retries')
        setUser(null)
        return
      }

      // Only get user if session is valid
      const currentUser = await getCurrentUser()
      console.log("currentUser: ", currentUser)
      
      // Check if user exists in Supabase
      const fullUser = await getSupabaseUserByCognitoId(currentUser.userId)
      console.log("fullUser: ", fullUser)
      
      // If user doesn't exist in Supabase, throw error
      if (!fullUser) {
        console.error('User exists in Cognito but not in Supabase. User needs to be created first.')
        throw new Error('User not found in database')
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
          total_dislikes_received: 0
        }
      })
    } catch (error) {
      console.log('No authenticated user found: ', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut({ global: true }) // Clear all sessions
      setUser(null)
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  useEffect(() => {
    checkUser()

    // Listen for auth events
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      console.log('Auth event:', payload.event)
      switch (payload.event) {
        case 'signedIn':
          // Add small delay to ensure session is fully established
          setTimeout(() => checkUser(), 1000)
          break
        case 'signedOut':
          setUser(null)
          break
      }
    })

    return unsubscribe
  }, [])

  return {
    user,
    loading,
    signOut: handleSignOut,
    isAuthenticated: !!user
  }
}
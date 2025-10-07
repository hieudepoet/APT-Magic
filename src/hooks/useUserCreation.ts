import { useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export function useUserCreation() {
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async () => {
    setCreating(true);
    setError(null);

    try {
      // Get current user data from Amplify (client-side)
      const currentUser = await getCurrentUser();
      
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cognitoId: currentUser.userId,
          email: currentUser.signInDetails?.loginId || '',
          username: currentUser.username
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }

      return data.user;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create user';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setCreating(false);
    }
  };

  return {
    createUser,
    creating,
    error
  };
}
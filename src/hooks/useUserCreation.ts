import { useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import api from "@/lib/axios";

export function useUserCreation() {
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async () => {
    setCreating(true);
    setError(null);

    try {
      // Get current user data from Amplify (client-side)
      const currentUser = await getCurrentUser();

      const response = await api.post("/users/create", {
        cognitoId: currentUser.userId,
        email: currentUser.signInDetails?.loginId || "",
        username: currentUser.username,
      });

      if (response.data.error) {
        throw new Error(response.data.error || "Failed to create user");
      }

      return response.data.user;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create user";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setCreating(false);
    }
  };

  return {
    createUser,
    creating,
    error,
  };
}

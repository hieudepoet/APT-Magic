"use client";

import { useState } from "react";
import {
  signIn,
  signUp,
  confirmSignUp,
  getCurrentUser,
} from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useUserCreation } from "@/hooks/useUserCreation";
import Button from "@/components/UI/Button";

type AuthMode = "signIn" | "signUp" | "confirmSignUp";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  confirmationCode: string;
}

export default function CustomAuthForm() {
  const router = useRouter();
  const { createUser } = useUserCreation();
  const [mode, setMode] = useState<AuthMode>("signIn");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      const signInResult = await signIn({
        username: formData.username || formData.email,
        password: formData.password,
      });

      console.log("Sign in successful:", signInResult);

      // Small delay before redirect to ensure session is established
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError("");

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      await signUp({
        username: formData.username,
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
          },
        },
      });

      setMode("confirmSignUp");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSignUp = async () => {
    try {
      setLoading(true);
      setError("");

      await confirmSignUp({
        username: formData.username,
        confirmationCode: formData.confirmationCode,
      });

      // Auto sign in after confirmation
      const signInResult = await signIn({
        username: formData.username,
        password: formData.password,
      });

      console.log("Auto sign in after confirmation:", signInResult);

      // Auto create the synced Supabase user
      await createUser();

      // Delay before redirect to ensure session is established
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Confirmation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signIn") {
      handleSignIn();
    } else if (mode === "signUp") {
      handleSignUp();
    } else if (mode === "confirmSignUp") {
      handleConfirmSignUp();
    }
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      {mode !== "confirmSignUp" && (
        <div className="flex justify-center mb-6 border-b border-gray-600/30">
          <button
            onClick={() => setMode("signIn")}
            className={`px-6 py-3 font-semibold transition-all duration-300 ${
              mode === "signIn"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signUp")}
            className={`px-6 py-3 font-semibold transition-all duration-300 ${
              mode === "signUp"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Confirmation Code (only for confirmSignUp) */}
        {mode === "confirmSignUp" && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Check Your Email
              </h3>
              <p className="text-gray-400">
                We sent a confirmation code to {formData.email}
              </p>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Confirmation Code
              </label>
              <input
                type="text"
                value={formData.confirmationCode}
                onChange={(e) =>
                  handleInputChange("confirmationCode", e.target.value)
                }
                placeholder="Enter confirmation code"
                className="w-full bg-gray-800/60 border border-gray-600/50 text-white rounded-lg px-4 py-3 focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                required
              />
            </div>
          </>
        )}

        {/* Username */}
        {mode !== "confirmSignUp" && (
          <div>
            <label className="block text-white font-medium mb-2">
              {mode === "signUp" ? "Username" : "Username or Email"}
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              placeholder={
                mode === "signUp"
                  ? "Choose a username"
                  : "Enter username or email"
              }
              className="w-full bg-gray-800/60 border border-gray-600/50 text-white rounded-lg px-4 py-3 focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
              required
            />
          </div>
        )}

        {/* Email (only for signUp) */}
        {mode === "signUp" && (
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-gray-800/60 border border-gray-600/50 text-white rounded-lg px-4 py-3 focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
              required
            />
          </div>
        )}

        {/* Password */}
        {mode !== "confirmSignUp" && (
          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-gray-800/60 border border-gray-600/50 text-white rounded-lg px-4 py-3 focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
              required
            />
          </div>
        )}

        {/* Confirm Password (only for signUp) */}
        {mode === "signUp" && (
          <div>
            <label className="block text-white font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="Confirm your password"
              className="w-full bg-gray-800/60 border border-gray-600/50 text-white rounded-lg px-4 py-3 focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-6"
          size="lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              {mode === "signIn"
                ? "Signing In..."
                : mode === "signUp"
                ? "Creating Account..."
                : "Confirming..."}
            </div>
          ) : mode === "signIn" ? (
            "Sign In"
          ) : mode === "signUp" ? (
            "Create Account"
          ) : (
            "Confirm Account"
          )}
        </Button>

        {/* Back to Sign In (for confirmSignUp) */}
        {mode === "confirmSignUp" && (
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setMode("signIn")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to Sign In
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

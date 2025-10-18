"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 z-200 w-full duration-300 ${scrolled || isMenuOpen ? "bg-black/96" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/assets/flash-svgrepo-com.svg"
              alt="Logo"
              className="w-10 h-10 group-hover:animate-spin transition-all duration-300"
            />
            <span className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
              APT Magic
            </span>
          </Link>

          {/* Desktop Navigation - Unchanged */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/create"
              className="text-gray-300 hover:text-white font-medium transition-colors relative group"
            >
              Create
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/library"
              className="text-gray-300 hover:text-white font-medium transition-colors relative group"
            >
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/community"
              className="text-gray-300 hover:text-white font-medium transition-colors relative group"
            >
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about-us"
              className="text-gray-300 hover:text-white font-medium transition-colors relative group"
            >
              About us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            {loading ? (
              <div className="w-8 h-8">
                <LoadingSpinner />
              </div>
            ) : user ? (
              <UserMenu />
            ) : (
              <Link
                href="/auth/signin"
                className="text-gray-300 px-4 py-2 rounded-lg border border-gray-300 hover:text-white hover:border-white transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Redesigned as Bottom Sheet for better UX */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Bottom Sheet Menu */}
          <div
            ref={menuRef}
            className={`fixed bottom-0 left-0 right-0 bg-black/96 rounded-t-3xl shadow-2xl transform ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } transition-all duration-300 ease-in-out z-50 md:hidden max-h-[80vh] overflow-y-auto`}
          >
            {/* Drag Handle */}
            <div className="flex justify-center py-2">
              <div className="w-12 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* User Section */}
            {loading ? (
              <div className="flex justify-center py-6">
                <LoadingSpinner />
              </div>
            ) : user ? (
              <div className="px-6 py-4 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600 relative">
                    <Image
                      src={user.avatar_url || "/assets/anon-user.png"}
                      alt={`${user.username}'s avatar`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Hi, {user.username}</p>
                    {user.email && (
                      <p className="text-gray-400 text-sm truncate max-w-xs">{user.email}</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-6 py-4 border-b border-gray-700 text-center">
                <p className="text-gray-400">Welcome, Guest</p>
              </div>
            )}

            {/* Main Menu Items */}
            <div className="px-6 py-4 space-y-1">
              <Link
                href="/create"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium">Create</span>
              </Link>
              <Link
                href="/library"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m-6 4m0 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="font-medium">Library</span>
              </Link>
              <Link
                href="/community"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0-12c-1.358 0-2.623.452-3.648 1.213M3.13 4.87A10.97 10.97 0 0012 2c4.478 0 8.268 2.544 10.024 6.001M21.87 4.87A10.97 10.97 0 0012 2c-4.478 0-8.268 2.544-10.024 6.001m17.744 0a9.06 9.06 0 01-1.508.09m-14.508-.09a9.06 9.06 0 011.508-.09" />
                </svg>
                <span className="font-medium">Community</span>
              </Link>
              <Link
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">About us</span>
              </Link>
            </div>

            {/* User Menu Items - Integrated for unified display */}
            {user && !loading && (
              <div className="px-6 py-4 border-t border-gray-700 space-y-1">
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">Profile</span>
                </Link>
                <Link
                  href="/settings"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Settings</span>
                </Link>
              </div>
            )}

            {/* Sign In / Sign Out */}
            <div className="px-6 py-6 border-t border-gray-700">
              {user ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    signOut();
                  }}
                  className="w-full flex items-center justify-center space-x-4 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Sign Out</span>
                </button>
              ) : (
                <Link
                  href="/auth/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 font-medium"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
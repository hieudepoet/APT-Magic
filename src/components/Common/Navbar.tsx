'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/flash-svgrepo-com.svg" // Đường dẫn SVG trong thư mục public, ví dụ: /logo.svg
              alt="Logo"
              className="w-14 h-14 group-hover:text-gray-300 transition-all duration-300 group-hover:animate-spin"
            />
            <span className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">APT Magic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/create" className="text-gray-400 hover:text-white font-medium transition-colors relative group">
              Create
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/library" className="text-gray-400 hover:text-white font-medium transition-colors relative group">
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/community" className="text-gray-400 hover:text-white font-medium transition-colors relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/auth" className="bg-gray-700/20 border border-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:border-white hover:glow-white transition-all duration-300">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/create" className="text-gray-400 hover:text-white font-medium transition-colors">
                Create
              </Link>
              <Link href="/library" className="text-gray-400 hover:text-white font-medium transition-colors">
                Library
              </Link>
              <Link href="/community" className="text-gray-400 hover:text-white font-medium transition-colors">
                Community
              </Link>
              <Link href="/auth" className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:border-white transition-all text-center">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
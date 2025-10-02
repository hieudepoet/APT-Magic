'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">AI Photo Transformer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/create" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Create
            </Link>
            <Link href="/library" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Library
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Community
            </Link>
            <Link href="/auth" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/create" className="text-gray-700 hover:text-purple-600 font-medium">
                Create
              </Link>
              <Link href="/library" className="text-gray-700 hover:text-purple-600 font-medium">
                Library
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-purple-600 font-medium">
                Community
              </Link>
              <Link href="/auth" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function UserMenu() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user) return null

  const getInitials = (username: string) => {
    return username.slice(0, 2).toUpperCase()
  }

  return (
    <>
      <style jsx>{`
        @keyframes dropdownSlide {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <div className="relative" ref={menuRef}>
      {/* User Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-gray-700/20 border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-800 hover:border-white hover:glow-white transition-all duration-300"
      >
        {/* Avatar */}
        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {getInitials(user.username)}
        </div>
        
        {/* Username */}
        <span className="text-white font-medium hidden sm:block">
          {user.username}
        </span>
        
        {/* Dropdown Arrow */}
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-3 w-64 bg-gray-900/95 backdrop-blur-xl border border-gray-600/40 rounded-2xl shadow-2xl z-50 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.95) 0%, rgba(31, 31, 31, 0.95) 100%)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            animation: 'dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transformOrigin: 'top right'
          }}
        >
          {/* Animated backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          {/* User Info */}
          <div className="px-5 py-4 border-b border-gray-700/50 relative">
            <div className="relative z-10">
              <p className="text-white font-semibold text-lg tracking-wide">{user.username}</p>
              {user.email && (
                <p className="text-gray-400 text-sm mt-1 truncate opacity-80" title={user.email}>
                  {user.email.length > 28 ? `${user.email.substring(0, 28)}...` : user.email}
                </p>
              )}
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Menu Items */}
          <div className="py-3">
            <button
              onClick={() => {
                setIsOpen(false)
                // TODO: Navigate to profile
              }}
              className="group w-full px-5 py-3 text-left text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-100%] group-hover:translate-x-0" />
              <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium relative z-10">Profile</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false)
                // TODO: Navigate to settings
              }}
              className="group w-full px-5 py-3 text-left text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-100%] group-hover:translate-x-0" />
              <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium relative z-10">Settings</span>
            </button>

            <div className="border-t border-gray-700/50 mt-3 pt-3 mx-2">
              <button
                onClick={() => {
                  setIsOpen(false)
                  signOut()
                }}
                className="group w-full px-3 py-3 text-left text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-4 relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-100%] group-hover:translate-x-0" />
                <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-red-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="font-medium relative z-10 group-hover:text-red-400">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
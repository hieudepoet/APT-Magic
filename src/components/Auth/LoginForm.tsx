'use client'

import CustomAuthForm from '../UI/CustomAuthForm'



export default function LoginForm() {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Custom Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 glow-text">Welcome to APT Magic</h1>
          <p className="text-lg text-gray-400">Sign in to start transforming your photos</p>
        </div>
        
        {/* Form Container with translucent background */}
        <div className="bg-gray-700/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-600/30 glow-white">
          <CustomAuthForm />
        </div>
        
        {/* Footer text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            By signing in, you agree to our{' '}
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            {' '}and{' '}
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
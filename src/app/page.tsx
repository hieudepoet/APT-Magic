import Link from 'next/link';
import Button from '@/components/UI/Button';
import SpotlightCard from '@/components/UI/SpotlightCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gray-700/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700 glow-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white glow-text">
              Transform Your Photos with
              <span className="shimmer pulse-glow block mt-2"> AI Magic</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              From restoring old memories to creating stunning anime and cyberpunk art, 
              unleash the power of AI to transform your photos into masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/create">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Creating
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Transformations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our collection of AI-powered transformation tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restore Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Photo Restoration</h3>
              <p className="text-gray-500">Bring old and damaged photos back to life with AI-powered restoration</p>
            </SpotlightCard>

            {/* Anime Feature */}
            <SpotlightCard className="custom-spotlight-card text-center" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Anime Style</h3>
              <p className="text-gray-500">Transform your photos into beautiful anime-style artwork</p>
            </SpotlightCard >

            {/* Cyberpunk Feature */}
            <SpotlightCard className="custom-spotlight-card text-center" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cyberpunk Style</h3>
              <p className="text-gray-500">Add futuristic neon effects and cyberpunk aesthetics</p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}

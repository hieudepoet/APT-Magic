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
                <Button size="lg" className="w-full sm:w-auto hover:cursor-pointer">
                  Start Creating
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:cursor-pointer">
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
          
          {/*line 1*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Restore Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <svg className="w-8 h-8 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Photo Restoration</h3>
              <p className="text-gray-500">Bring old and damaged photos back to life with AI-powered restoration</p>
            </SpotlightCard>

            {/* Anime Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <svg className="w-8 h-8 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Anime Style</h3>
              <p className="text-gray-500">Transform your photos into beautiful anime-style artwork</p>
            </SpotlightCard>

            {/* Cyberpunk Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <svg className="w-8 h-8 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cyberpunk Style</h3>
              <p className="text-gray-500">Add futuristic neon effects and cyberpunk aesthetics</p>
            </SpotlightCard>
          </div>

          {/*line 2*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Viral Prompt Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <svg className="w-8 h-8 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Viral Prompt</h3>
              <p className="text-gray-500">Hot trend AI transformations with prompts shared widely on Facebook, TikTok</p>
            </SpotlightCard>

            {/* ID Photo Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <svg className="w-8 h-8 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ID Photo</h3>
              <p className="text-gray-500">Generate professional ID photos with perfect background and lighting</p>
            </SpotlightCard>

            {/* Ultra HD Feature */}
            <SpotlightCard className="custom-spotlight-card text-center hover:cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.67)">
              <div className="w-16 h-16 border-2 border-gray-600 bg-black/40 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center sharp-border hover:border-white hover:glow-white transition-all duration-300">
                <div className="text-gray-400 hover:text-white transition-colors font-bold text-2xl">
                  4K
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ultra HD</h3>
              <p className="text-gray-500">Enhance image resolution to ultra-high definition with AI upscaling</p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  );
}

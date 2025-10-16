import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/95 backdrop-blur-md text-white relative overflow-hidden border-t border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Team */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/flash-svgrepo-com.svg" // Đường dẫn SVG trong thư mục public, ví dụ: /logo.svg
                alt="Logo"
                className="w-14 h-14 group-hover:text-gray-300 transition-all duration-300 group-hover:animate-spin"
              />
              <span className="text-2xl font-bold text-white">APT Magic</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your photos with cutting-edge AI technology. From restoring old memories to creating unique artistic masterpieces.
            </p>
            
            {/* Team Info */}
            <Link href="/profile/devteam">
              <div className="bg-gray-700/20 hover:bg-gray-800 hover:glow-white transition-all duration-300 backdrop-blur-sm rounded-lg p-4 border border-gray-700 sharp-border w-3/4">
                <h4 className="font-semibold text-white mb-2">Developed by</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center glow-white">
                    <img
                      src="/assets/AIVanguard.png"  
                      alt="App Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-white font-semibold">AIVanguard Team</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Software and AI/ML Experts Team</p>
              </div>
            </Link>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/create" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Photo Restoration</span>
                </Link>
              </li>
              <li>
                <Link href="/create" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Anime Style</span>
                </Link>
              </li>
              <li>
                <Link href="/create" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Cyberpunk Style</span>
                </Link>
              </li>
              <li>
                <Link href="/library" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Personal Library</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Community</h3>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>
                <Link href="/community" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Explore</span>
                </Link>
              </li>
              <li>
                <Link href="/auth" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Join Us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-gray-300"></span>
                  <span>Privacy</span>
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700/20 border border-gray-700 hover:bg-gray-800 hover:border-white hover:glow-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/20 border border-gray-700 hover:bg-gray-800 hover:border-white hover:glow-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/20 border border-gray-700 hover:bg-gray-800 hover:border-white hover:glow-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700/20 border border-gray-700 hover:bg-gray-800 hover:border-white hover:glow-white rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575-.105.79-.251.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.129 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              <p>&copy; 2025 APT Magic by <span className="text-white font-semibold">AIVanguard Team</span>. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { ArrowRight, Users, BookOpen, Globe } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ha';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Shiga Duniya Web3 da Polkadot',
      subtitle: 'Join the largest Hausa blockchain community in Africa',
      description: 'Learn blockchain technology, participate in the Polkadot ecosystem, and build the future of decentralized finance with your community.',
      joinNow: 'Join Now',
      explorePrograms: 'Explore Programs',
      stats: {
        members: 'Community Members',
        programs: 'Active Programs',
        languages: 'Languages Supported'
      }
    },
    ha: {
      title: 'Shiga Duniya Web3 da Polkadot',
      subtitle: 'Shiga babbar al\'ummar blockchain ta Hausa a Afirka',
      description: 'Koyi fasahar blockchain, shiga cikin tsarin Polkadot, kuma gina makomar kudin da ba a rike ba tare da al\'ummarku.',
      joinNow: 'Shiga Yanzu',
      explorePrograms: 'Bincika Shirye-shirye',
      stats: {
        members: 'Membobin Al\'umma',
        programs: 'Shirye-shiryen da ke Aiki',
        languages: 'Harsuna da ake Tallafawa'
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23E6007A%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M30 30l15-15v30l-15-15zM15 15l15 15-15 15V15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {content[language].title}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
                {content[language].subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                {content[language].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://t.me/polkadothausa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {content[language].joinNow}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-pink-600 text-base sm:text-lg font-semibold rounded-lg border-2 border-pink-600 hover:bg-pink-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {content[language].explorePrograms}
                <BookOpen className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full mx-auto mb-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">2,500+</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{content[language].stats.members}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">12</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{content[language].stats.programs}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full mx-auto mb-2">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">3</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{content[language].stats.languages}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl p-6 sm:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-4 sm:p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://res.cloudinary.com/dc5qncppu/image/upload/v1751116232/Untitled_design_csfhus.png" 
                      alt="Polkadot Hausa Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-1"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Polkadot Hausa</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Web3 Community</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
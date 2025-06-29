import React from 'react';
import { Network, Zap, Shield, Globe, ArrowRight, ExternalLink } from 'lucide-react';

interface EcosystemProps {
  language: 'en' | 'ha';
}

const Ecosystem: React.FC<EcosystemProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Polkadot Ecosystem',
      subtitle: 'Discover the interconnected world of Polkadot and its thriving ecosystem',
      polkadot: {
        title: 'Polkadot',
        description: 'The multichain network enabling scalability and interoperability for the future of Web3.',
        features: ['Cross-chain compatibility', 'Shared security', 'Scalable architecture', 'Governance by DOT holders']
      },
      kusama: {
        title: 'Kusama',
        description: 'Polkadot\'s canary network for rapid innovation and testing of new features.',
        features: ['Experimental features', 'Faster governance', 'Risk-taking environment', 'Real economic value']
      },
      parachains: {
        title: 'Parachains',
        description: 'Specialized blockchains that run parallel to Polkadot, each optimized for specific use cases.',
        examples: ['Moonbeam - Ethereum compatibility', 'Astar - Multi-chain dApps', 'Acala - DeFi hub', 'Phala - Privacy computing']
      },
      learnMore: 'Learn More',
      explore: 'Explore'
    },
    ha: {
      title: 'Tsarin Polkadot',
      subtitle: 'Gano duniyar da ke haɗuwa na Polkadot da tsarin sa mai cin gaba',
      polkadot: {
        title: 'Polkadot',
        description: 'Hanyar sadarwar multichain da ke ba da damar girma da haɗin kai don makomar Web3.',
        features: ['Haɗin kai tsakanin chains', 'Tsaro da aka raba', 'Tsarin da ke girma', 'Mulki ta masu DOT']
      },
      kusama: {
        title: 'Kusama',
        description: 'Hanyar sadarwar canary na Polkadot don saurin kirkire-kirkire da gwajin sabbin fasaloli.',
        features: ['Fasalolin gwaji', 'Mulki mai sauri', 'Yanayin ɗaukar haɗari', 'Ƙimar tattalin arziki na gaske']
      },
      parachains: {
        title: 'Parachains',
        description: 'Blockchains na musamman da ke gudana daidai da Polkadot, kowannensu an inganta shi don takamaiman ayyuka.',
        examples: ['Moonbeam - Haɗin kai da Ethereum', 'Astar - dApps na multi-chain', 'Acala - Cibiyar DeFi', 'Phala - Lissafin sirri']
      },
      learnMore: 'Koyo Kara',
      explore: 'Bincika'
    }
  };

  const ecosystemItems = [
    {
      title: content[language].polkadot.title,
      description: content[language].polkadot.description,
      features: content[language].polkadot.features,
      icon: Network,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179389/Diseno-sin-titulo-18_itridn.webp'
    },
    {
      title: content[language].kusama.title,
      description: content[language].kusama.description,
      features: content[language].kusama.features,
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751112250/72gTG-fc_400x400_qmnaoz.jpg'
    },
    {
      title: content[language].parachains.title,
      description: content[language].parachains.description,
      features: content[language].parachains.examples,
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {ecosystemItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full">
                  {/* Card Header */}
                  <div className={`${item.bgColor} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.color} rounded-xl mb-4 shadow-lg overflow-hidden`}>
                        {item.customImage ? (
                          <img 
                            src={item.customImage} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <IconComponent className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                        )}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col h-full">
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`w-full bg-gradient-to-r ${item.color} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm lg:text-base`}>
                      <span>{content[language].learnMore}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Parachains */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Featured Parachains' : 'Parachains Masu Shahara'}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              {language === 'en' 
                ? 'Discover some of the most innovative projects building on Polkadot'
                : 'Gano wasu daga cikin ayyukan kirkire-kirkire masu girma akan Polkadot'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: 'Moonbeam', description: 'Ethereum Compatible', color: 'bg-blue-500' },
              { name: 'Astar', description: 'Multi-chain dApps', color: 'bg-purple-500' },
              { name: 'Acala', description: 'DeFi Hub', color: 'bg-red-500' },
              { name: 'Phala', description: 'Privacy Computing', color: 'bg-green-500' }
            ].map((parachain, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-xl p-4 lg:p-6 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 ${parachain.color} rounded-lg mb-3 lg:mb-4 flex items-center justify-center`}>
                    <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">{parachain.name}</h4>
                  <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-3">{parachain.description}</p>
                  <div className="flex items-center text-xs lg:text-sm text-pink-600 font-medium">
                    <span>{content[language].explore}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
import React from 'react';
import { ExternalLink, Heart, Users, Zap, Shield, Globe } from 'lucide-react';

interface PartnersProps {
  language: 'en' | 'ha';
}

const Partners: React.FC<PartnersProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Technology Partners',
      subtitle: 'Supported by leading organizations in the Web3 ecosystem',
      description: 'We work closely with these ecosystem partners to bring world-class blockchain education to the Hausa community.',
      partners: [
        {
          name: 'Polkadot',
          description: 'The multichain network enabling scalability and interoperability for the future of Web3.',
          role: 'Core Technology Partner',
          icon: Shield,
          color: 'from-pink-500 to-rose-500',
          bgColor: 'bg-pink-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179389/Diseno-sin-titulo-18_itridn.webp'
        },
        {
          name: 'Kusama',
          description: 'Polkadot\'s canary network for rapid innovation and testing of new blockchain features.',
          role: 'Innovation Partner',
          icon: Zap,
          color: 'from-purple-500 to-indigo-500',
          bgColor: 'bg-purple-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751112250/72gTG-fc_400x400_qmnaoz.jpg'
        },
        {
          name: 'Polkadot Africa',
          description: 'Regional Web3 advocacy and education initiative focused on the African continent.',
          role: 'Regional Partner',
          icon: Globe,
          color: 'from-green-500 to-teal-500',
          bgColor: 'bg-green-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751112251/GrT2PeCF_400x400_nkxkhh.jpg'
        },
        {
          name: 'Parity Technologies',
          description: 'The core development team behind Polkadot, Substrate, and the broader ecosystem.',
          role: 'Technical Partner',
          icon: Users,
          color: 'from-blue-500 to-cyan-500',
          bgColor: 'bg-blue-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179925/parity_gvx3cv.png'
        },
        {
          name: 'Web3 Foundation',
          description: 'Supports research and development of decentralized web software protocols.',
          role: 'Foundation Partner',
          icon: Heart,
          color: 'from-orange-500 to-red-500',
          bgColor: 'bg-orange-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179925/web3_fou_pckgtw.png'
        }
      ],
      learnMore: 'Learn More',
      visit: 'Visit Website'
    },
    ha: {
      title: 'Abokan Huldarmu na Fasaha',
      subtitle: 'Ana samun tallafi daga manyan kungiyoyi a cikin tsarin Web3',
      description: 'Muna aiki tare da waɗannan abokan hulda don kawo ilimin blockchain na duniya ga al\'ummar Hausa.',
      partners: [
        {
          name: 'Polkadot',
          description: 'Hanyar sadarwar multichain da ke ba da damar girma da haɗin kai don makomar Web3.',
          role: 'Babban Abokin Hulda na Fasaha',
          icon: Shield,
          color: 'from-pink-500 to-rose-500',
          bgColor: 'bg-pink-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179389/Diseno-sin-titulo-18_itridn.webp'
        },
        {
          name: 'Kusama',
          description: 'Hanyar sadarwar canary na Polkadot don saurin kirkire-kirkire da gwajin sabbin fasalolin blockchain.',
          role: 'Abokin Hulda na Kirkire-kirkire',
          icon: Zap,
          color: 'from-purple-500 to-indigo-500',
          bgColor: 'bg-purple-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751112250/72gTG-fc_400x400_qmnaoz.jpg'
        },
        {
          name: 'Polkadot Africa',
          description: 'Shirin tallafawa da ilimin Web3 na yanki wanda ya mayar da hankali kan nahiyar Afirka.',
          role: 'Abokin Hulda na Yanki',
          icon: Globe,
          color: 'from-green-500 to-teal-500',
          bgColor: 'bg-green-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751112251/GrT2PeCF_400x400_nkxkhh.jpg'
        },
        {
          name: 'Parity Technologies',
          description: 'Babban ƙungiyar ci gaba a bayan Polkadot, Substrate, da tsarin gaba ɗaya.',
          role: 'Abokin Hulda na Fasaha',
          icon: Users,
          color: 'from-blue-500 to-cyan-500',
          bgColor: 'bg-blue-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179925/parity_gvx3cv.png'
        },
        {
          name: 'Web3 Foundation',
          description: 'Yana tallafawa bincike da ci gaban kayan aikin yanar gizo mara tsakiya.',
          role: 'Abokin Hulda na Gidauniya',
          icon: Heart,
          color: 'from-orange-500 to-red-500',
          bgColor: 'bg-orange-50',
          customImage: 'https://res.cloudinary.com/dc5qncppu/image/upload/v1751179925/web3_fou_pckgtw.png'
        }
      ],
      learnMore: 'Koyo Kara',
      visit: 'Ziyarci Shafin'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {content[language].subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {content[language].description}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content[language].partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full">
                  {/* Card Header */}
                  <div className={`${partner.bgColor} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${partner.color} rounded-xl mb-4 shadow-lg overflow-hidden`}>
                        {partner.customImage ? (
                          <img 
                            src={partner.customImage} 
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <IconComponent className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <span className="inline-block px-3 py-1 bg-white/70 text-sm font-medium text-gray-700 rounded-full">
                        {partner.role}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col h-full">
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {partner.description}
                    </p>

                    {/* Action Button */}
                    <button className={`w-full bg-gradient-to-r ${partner.color} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                      <span>{content[language].visit}</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Stats */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-pink-100">
                {language === 'en' ? 'Technology Partners' : 'Abokan Hulda na Fasaha'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-pink-100">
                {language === 'en' ? 'Ecosystem Projects' : 'Ayyukan Tsarin'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-pink-100">
                {language === 'en' ? 'Global Community' : 'Al\'ummar Duniya'}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Want to Partner with Us?' : 'Kuna Son Hulɗa da Mu?'}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Join our mission to bring blockchain education to the Hausa community. We\'re always looking for new partners and collaborators.'
              : 'Shiga manufarmu don kawo ilimin blockchain ga al\'ummar Hausa. Kullum muna neman sabbin abokan hulda da masu haɗin gwiwa.'
            }
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            {language === 'en' ? 'Get in Touch' : 'Tuntuɓe Mu'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
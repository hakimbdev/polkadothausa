import React from 'react';
import { Mail, MessageCircle, Twitter, Github, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ha';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      description: 'Empowering the Hausa community through blockchain education and Web3 adoption.',
      quickLinks: {
        title: 'Quick Links',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Programs', href: '#' },
          { name: 'Events', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'FAQ', href: '#' }
        ]
      },
      programs: {
        title: 'Programs',
        links: [
          { name: '#PolkadotAtYourDesk', href: '#' },
          { name: '#DotBurgerWeek', href: '#' },
          { name: '#DotForNewbies', href: '#' },
          { name: 'Community Workshops', href: '#' },
          { name: 'Mentorship Program', href: '#' }
        ]
      },
      ecosystem: {
        title: 'Ecosystem',
        links: [
          { name: 'Polkadot', href: 'https://polkadot.network' },
          { name: 'Kusama', href: 'https://kusama.network' },
          { name: 'Polkadot Africa', href: '#' },
          { name: 'Web3 Foundation', href: 'https://web3.foundation' },
          { name: 'Parity Technologies', href: 'https://parity.io' }
        ]
      },
      community: {
        title: 'Community',
        links: [
          { name: 'Telegram', href: 'https://t.me/polkadothausa', icon: MessageCircle },
          { name: 'Twitter', href: 'https://twitter.com/polkadothausa', icon: Twitter },
          { name: 'GitHub', href: 'https://github.com/polkadothausa', icon: Github },
          { name: 'Email', href: 'mailto:hello@polkadothausa.org', icon: Mail }
        ]
      },
      newsletter: {
        title: 'Stay Updated',
        description: 'Subscribe to our newsletter for the latest updates and blockchain education content.',
        placeholder: 'Your email address',
        button: 'Subscribe'
      },
      copyright: '© 2024 Polkadot Hausa. All rights reserved.',
      madeWith: 'Made with',
      forCommunity: 'for the Hausa community'
    },
    ha: {
      description: 'Ƙarfafa al\'ummar Hausa ta hanyar ilimin blockchain da karɓar Web3.',
      quickLinks: {
        title: 'Hanyoyin Gaggawa',
        links: [
          { name: 'Game da Mu', href: '#' },
          { name: 'Shirye-shirye', href: '#' },
          { name: 'Abubuwa', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Tambayoyi', href: '#' }
        ]
      },
      programs: {
        title: 'Shirye-shirye',
        links: [
          { name: '#PolkadotAtYourDesk', href: '#' },
          { name: '#DotBurgerWeek', href: '#' },
          { name: '#DotForNewbies', href: '#' },
          { name: 'Tarurrukan Al\'umma', href: '#' },
          { name: 'Shirin Jagora', href: '#' }
        ]
      },
      ecosystem: {
        title: 'Tsarin Aiki',
        links: [
          { name: 'Polkadot', href: 'https://polkadot.network' },
          { name: 'Kusama', href: 'https://kusama.network' },
          { name: 'Polkadot Africa', href: '#' },
          { name: 'Web3 Foundation', href: 'https://web3.foundation' },
          { name: 'Parity Technologies', href: 'https://parity.io' }
        ]
      },
      community: {
        title: 'Al\'umma',
        links: [
          { name: 'Telegram', href: 'https://t.me/polkadothausa', icon: MessageCircle },
          { name: 'Twitter', href: 'https://twitter.com/polkadothausa', icon: Twitter },
          { name: 'GitHub', href: 'https://github.com/polkadothausa', icon: Github },
          { name: 'Email', href: 'mailto:hello@polkadothausa.org', icon: Mail }
        ]
      },
      newsletter: {
        title: 'Kasance a Sabunta',
        description: 'Yi rajista ga takardar labarinmu don samun sabbin labari da kayan ilimin blockchain.',
        placeholder: 'Adireshin email ɗin ku',
        button: 'Yi Rajista'
      },
      copyright: '© 2024 Polkadot Hausa. Duk haƙƙoƙin sun kasance.',
      madeWith: 'An yi shi da',
      forCommunity: 'don al\'ummar Hausa'
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1751116232/Untitled_design_csfhus.png" 
                alt="Polkadot Hausa Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="ml-3 text-2xl font-bold">Polkadot Hausa</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content[language].description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {content[language].community.links.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-200 transform hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].quickLinks.title}</h3>
            <ul className="space-y-2">
              {content[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-pink-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].programs.title}</h3>
            <ul className="space-y-2">
              {content[language].programs.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-pink-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].ecosystem.title}</h3>
            <ul className="space-y-2">
              {content[language].ecosystem.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{content[language].newsletter.title}</h3>
            <p className="text-gray-300 mb-6">{content[language].newsletter.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={content[language].newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                {content[language].newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {content[language].copyright}
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>{content[language].madeWith}</span>
              <Heart className="h-4 w-4 text-pink-500 mx-1 fill-current" />
              <span>{content[language].forCommunity}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
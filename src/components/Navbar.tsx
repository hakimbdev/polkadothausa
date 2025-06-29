import React, { useState } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'ha';
  onLanguageChange: (lang: 'en' | 'ha') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const content = {
    en: {
      home: 'Home',
      about: 'About Polkadot Hausa',
      programs: 'Programs',
      ecosystem: 'Ecosystem',
      partners: 'Tech Partners',
      resources: 'Resources',
      getInvolved: 'Get Involved',
      joinUs: 'Join Us',
      polkadotAtDesk: '#PolkadotAtYourDesk',
      dotBurger: '#DotBurgerWeek',
      dotNewbies: '#DotForNewbies',
      polkadotNet: 'Polkadot',
      kusama: 'Kusama',
      polkadotParachains: 'Polkadot Parachains',
      kusamaParachains: 'Kusama Parachains',
      polkadotAfrica: 'Polkadot Africa',
      parity: 'Parity Technologies',
      web3Foundation: 'Web3 Foundation',
      learnHausa: 'Learn in Hausa',
      blog: 'Blog',
      events: 'Community Events',
      volunteer: 'Volunteer',
      translate: 'Translate',
      hostMeetup: 'Host a Meetup'
    },
    ha: {
      home: 'Gida',
      about: 'Game da Polkadot Hausa',
      programs: 'Shirye-shirye',
      ecosystem: 'Tsarin Aiki',
      partners: 'Abokan Hulda',
      resources: 'Kayan Aiki',
      getInvolved: 'Shiga Mu',
      joinUs: 'Shiga Mu',
      polkadotAtDesk: '#PolkadotAtYourDesk',
      dotBurger: '#DotBurgerWeek',
      dotNewbies: '#DotForNewbies',
      polkadotNet: 'Polkadot',
      kusama: 'Kusama',
      polkadotParachains: 'Polkadot Parachains',
      kusamaParachains: 'Kusama Parachains',
      polkadotAfrica: 'Polkadot Africa',
      parity: 'Parity Technologies',
      web3Foundation: 'Web3 Foundation',
      learnHausa: 'Koyo da Hausa',
      blog: 'Blog',
      events: 'Abubuwan Al\'umma',
      volunteer: 'Aikin Son Rai',
      translate: 'Fassara',
      hostMeetup: 'Gudanar da Taro'
    }
  };

  const navItems = [
    { key: 'about', label: content[language].about },
    {
      key: 'programs',
      label: content[language].programs,
      dropdown: [
        { key: 'polkadotAtDesk', label: content[language].polkadotAtDesk },
        { key: 'dotBurger', label: content[language].dotBurger },
        { key: 'dotNewbies', label: content[language].dotNewbies }
      ]
    },
    {
      key: 'ecosystem',
      label: content[language].ecosystem,
      dropdown: [
        { key: 'polkadotNet', label: content[language].polkadotNet },
        { key: 'kusama', label: content[language].kusama },
        { key: 'polkadotParachains', label: content[language].polkadotParachains },
        { key: 'kusamaParachains', label: content[language].kusamaParachains }
      ]
    },
    {
      key: 'partners',
      label: content[language].partners,
      dropdown: [
        { key: 'polkadotNet', label: content[language].polkadotNet },
        { key: 'kusama', label: content[language].kusama },
        { key: 'polkadotAfrica', label: content[language].polkadotAfrica },
        { key: 'parity', label: content[language].parity },
        { key: 'web3Foundation', label: content[language].web3Foundation }
      ]
    },
    {
      key: 'resources',
      label: content[language].resources,
      dropdown: [
        { key: 'learnHausa', label: content[language].learnHausa },
        { key: 'blog', label: content[language].blog },
        { key: 'events', label: content[language].events }
      ]
    },
    {
      key: 'getInvolved',
      label: content[language].getInvolved,
      dropdown: [
        { key: 'volunteer', label: content[language].volunteer },
        { key: 'translate', label: content[language].translate },
        { key: 'hostMeetup', label: content[language].hostMeetup }
      ]
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1751116232/Untitled_design_csfhus.png" 
                alt="Polkadot Hausa Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">Polkadot Hausa</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {content[language].home}
              </a>
              {navItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.dropdown ? (
                    <button
                      className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a href="#" className="text-gray-900 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      {item.label}
                    </a>
                  )}
                  {item.dropdown && activeDropdown === item.key && (
                    <div
                      className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      onMouseEnter={() => setActiveDropdown(item.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.key}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Language Toggle & Join Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ha' : 'en')}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'HA' : 'EN'}</span>
            </button>
            <a
              href="https://t.me/polkadothausa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              {content[language].joinUs}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
              {content[language].home}
            </a>
            {navItems.map((item) => (
              <div key={item.key}>
                <a href="#" className="text-gray-900 hover:text-pink-600 block px-3 py-2 rounded-md text-base font-medium">
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.key}
                        href="#"
                        className="text-gray-600 hover:text-pink-600 block px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'ha' : 'en')}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'HA' : 'EN'}</span>
              </button>
              <a
                href="https://t.me/polkadothausa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
              >
                {content[language].joinUs}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
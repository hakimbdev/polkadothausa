import React from 'react';
import { Monitor, Coffee, GraduationCap, Calendar, Users, Award } from 'lucide-react';

interface ProgramsProps {
  language: 'en' | 'ha';
}

const Programs: React.FC<ProgramsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Programs',
      subtitle: 'Comprehensive blockchain education tailored for the Hausa community',
      programs: [
        {
          title: '#PolkadotAtYourDesk',
          description: 'Online learning series delivered in Hausa, simplifying blockchain knowledge for everyone.',
          features: ['Weekly online sessions', 'Hausa language instruction', 'Interactive Q&A', 'Digital certificates'],
          icon: Monitor,
          color: 'from-pink-500 to-rose-500',
          bgColor: 'bg-pink-50',
          textColor: 'text-pink-600'
        },
        {
          title: '#DotBurgerWeek',
          description: 'A fun outreach event combining local Hausa meals with blockchain conversations.',
          features: ['Local food meetups', 'Blockchain discussions', 'Community networking', 'Cultural exchange'],
          icon: Coffee,
          color: 'from-purple-500 to-indigo-500',
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-600'
        },
        {
          title: '#DotForNewbies',
          description: 'Hands-on workshops for complete beginners, covering wallets, staking, and parachains.',
          features: ['Beginner-friendly', 'Practical workshops', 'Wallet setup', 'Staking tutorials'],
          icon: GraduationCap,
          color: 'from-indigo-500 to-blue-500',
          bgColor: 'bg-indigo-50',
          textColor: 'text-indigo-600'
        }
      ],
      joinProgram: 'Join Program',
      learnMore: 'Learn More'
    },
    ha: {
      title: 'Shirye-shiryenmu',
      subtitle: 'Cikakken ilimin blockchain da aka tsara don al\'ummar Hausa',
      programs: [
        {
          title: '#PolkadotAtYourDesk',
          description: 'Jerin koyo na kan layi da ake gabatarwa da Hausa, yana sauƙaƙe ilimin blockchain ga kowa.',
          features: ['Zamantakewar kan layi na mako-mako', 'Koyarwa da harshen Hausa', 'Tambayoyi masu hulɗa', 'Takaddun shaida na dijital'],
          icon: Monitor,
          color: 'from-pink-500 to-rose-500',
          bgColor: 'bg-pink-50',
          textColor: 'text-pink-600'
        },
        {
          title: '#DotBurgerWeek',
          description: 'Taron nishaɗi na haɗa abincin gida na Hausa da tattaunawar blockchain.',
          features: ['Tarurrukan abinci na gida', 'Tattaunawar blockchain', 'Saɗar al\'umma', 'Musayar al\'ada'],
          icon: Coffee,
          color: 'from-purple-500 to-indigo-500',
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-600'
        },
        {
          title: '#DotForNewbies',
          description: 'Taron aiki don masu farawa, yana rufe wallet, staking, da parachains.',
          features: ['Mai sauƙi ga masu farawa', 'Taron aiki mai amfani', 'Kafa wallet', 'Koyarwar staking'],
          icon: GraduationCap,
          color: 'from-indigo-500 to-blue-500',
          bgColor: 'bg-indigo-50',
          textColor: 'text-indigo-600'
        }
      ],
      joinProgram: 'Shiga Shiri',
      learnMore: 'Koyo Kara'
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content[language].programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* Card Header */}
                  <div className={`${program.bgColor} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${program.color} rounded-xl mb-4 shadow-lg`}>
                        <IconComponent className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">{program.title}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color} flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className={`flex-1 bg-gradient-to-r ${program.color} text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm`}>
                        {content[language].joinProgram}
                      </button>
                      <button className={`flex-1 border-2 border-current ${program.textColor} px-4 py-2.5 rounded-lg font-medium hover:bg-current hover:text-white transition-all duration-200 text-sm`}>
                        {content[language].learnMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              {language === 'en' ? 'Ready to Start Your Web3 Journey?' : 'Shirye ka Fara Tafiyar Web3?'}
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
              {language === 'en' 
                ? 'Join our community of blockchain enthusiasts and start learning today. All programs are free and designed for beginners.'
                : 'Shiga al\'ummarmu na masu sha\'awar blockchain kuma fara koyo yau. Duk shirye-shiryenmu kyauta ne kuma an tsara su don masu farawa.'
              }
            </p>
            <a
              href="https://t.me/polkadothausa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 lg:px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm lg:text-base"
            >
              <Users className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              {language === 'en' ? 'Join Our Community' : 'Shiga Al\'ummarmu'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
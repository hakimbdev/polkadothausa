import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Users, Calendar, BookOpen } from 'lucide-react';

interface NewsletterProps {
  language: 'en' | 'ha';
}

const Newsletter: React.FC<NewsletterProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      title: 'Stay Connected with Polkadot Hausa',
      subtitle: 'Get the latest updates on programs, events, and blockchain education',
      placeholder: 'Enter your email address',
      button: 'Subscribe Now',
      success: 'Thank you for subscribing!',
      benefits: [
        'Weekly blockchain tutorials in Hausa',
        'Early access to new programs',
        'Exclusive community events',
        'Latest Polkadot ecosystem updates'
      ],
      joinTelegram: 'Join our Telegram',
      upcomingEvents: 'Upcoming Events',
      events: [
        {
          title: '#DotForNewbies Workshop',
          date: 'March 15, 2024',
          time: '2:00 PM WAT',
          type: 'Online'
        },
        {
          title: '#DotBurgerWeek Kano',
          date: 'March 22, 2024',
          time: '6:00 PM WAT',
          type: 'In-person'
        },
        {
          title: 'Polkadot Governance Session',
          date: 'March 29, 2024',
          time: '3:00 PM WAT',
          type: 'Online'
        }
      ]
    },
    ha: {
      title: 'Kasance tare da Polkadot Hausa',
      subtitle: 'Samun sabbin labari kan shirye-shirye, abubuwa, da ilimin blockchain',
      placeholder: 'Shigar da adireshin imel ɗin ku',
      button: 'Yi Rajista Yanzu',
      success: 'Godiya don yin rajista!',
      benefits: [
        'Koyarwar blockchain na mako-mako da Hausa',
        'Farkon damar zuwa sabbin shirye-shirye',
        'Abubuwan al\'umma na keɓe',
        'Sabbin labari na tsarin Polkadot'
      ],
      joinTelegram: 'Shiga Telegram ɗinmu',
      upcomingEvents: 'Abubuwan da ke Zuwa',
      events: [
        {
          title: 'Taron #DotForNewbies',
          date: 'Maris 15, 2024',
          time: '2:00 PM WAT',
          type: 'Kan layi'
        },
        {
          title: '#DotBurgerWeek Kano',
          date: 'Maris 22, 2024',
          time: '6:00 PM WAT',
          type: 'Gaban gaba'
        },
        {
          title: 'Zaman Mulkin Polkadot',
          date: 'Maris 29, 2024',
          time: '3:00 PM WAT',
          type: 'Kan layi'
        }
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Newsletter */}
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                {content[language].title}
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                {content[language].subtitle}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {content[language].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-pink-200 flex-shrink-0" />
                    <span className="text-pink-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={content[language].placeholder}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>{content[language].button}</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {content[language].success}
                </h3>
                <p className="text-pink-100">
                  {language === 'en' 
                    ? 'Check your email for confirmation and join our Telegram for instant updates.'
                    : 'Duba imel ɗin ku don tabbatarwa kuma ku shiga Telegram ɗinmu domin samun sabbin labari nan take.'
                  }
                </p>
              </div>
            )}

            {/* Telegram CTA */}
            <div className="mt-6">
              <a
                href="https://t.me/polkadothausa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-pink-200 hover:text-white transition-colors"
              >
                <Users className="h-5 w-5" />
                <span className="font-medium">{content[language].joinTelegram}</span>
              </a>
            </div>
          </div>

          {/* Right Column - Upcoming Events */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-white" />
              <h3 className="text-2xl font-bold text-white">
                {content[language].upcomingEvents}
              </h3>
            </div>

            <div className="space-y-4">
              {content[language].events.map((event, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-pink-200">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-pink-200 hover:text-white transition-colors font-medium">
                {language === 'en' ? 'View All Events' : 'Duba Dukkan Abubuwa'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
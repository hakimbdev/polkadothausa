import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: 'en' | 'ha';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      title: 'Community Success Stories',
      subtitle: 'Hear from our community members about their Web3 journey',
      testimonials: [
        {
          name: 'Amina Yusuf',
          role: 'Blockchain Developer',
          location: 'Kano, Nigeria',
          content: 'Polkadot Hausa opened my eyes to the world of blockchain technology. The #DotForNewbies program helped me understand complex concepts in my native language.',
          rating: 5,
          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Ibrahim Musa',
          role: 'Community Manager',
          location: 'Kaduna, Nigeria',
          content: 'The #DotBurgerWeek events create a perfect blend of local culture and blockchain education. It\'s amazing how food brings people together to learn.',
          rating: 5,
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Fatima Abdullahi',
          role: 'DeFi Enthusiast',
          location: 'Sokoto, Nigeria',
          content: 'Thanks to #PolkadotAtYourDesk, I now understand staking and parachain auctions. The Hausa explanations made all the difference.',
          rating: 5,
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Usman Garba',
          role: 'Student',
          location: 'Zaria, Nigeria',
          content: 'Being part of this community has given me confidence in the blockchain space. The support from fellow Hausa speakers is incredible.',
          rating: 5,
          image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ]
    },
    ha: {
      title: 'Labaran Nasara na Al\'umma',
      subtitle: 'Ku ji daga membobin al\'ummarmu game da tafiyar su ta Web3',
      testimonials: [
        {
          name: 'Amina Yusuf',
          role: 'Mai Haɓaka Blockchain',
          location: 'Kano, Najeriya',
          content: 'Polkadot Hausa ya buɗe min ido ga duniyar fasahar blockchain. Shirin #DotForNewbies ya taimake ni fahimtar hadaddun ra\'ayoyi da harshen mahaifata.',
          rating: 5,
          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Ibrahim Musa',
          role: 'Manajan Al\'umma',
          location: 'Kaduna, Najeriya',
          content: 'Abubuwan #DotBurgerWeek suna haɗa al\'adar gida da ilimin blockchain. Yana da ban mamaki yadda abinci ke haɗa mutane don koyo.',
          rating: 5,
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Fatima Abdullahi',
          role: 'Mai son DeFi',
          location: 'Sokoto, Najeriya',
          content: 'Godiya ga #PolkadotAtYourDesk, yanzu na fahimci staking da parachain auctions. Bayanin Hausa ya kawo babban bambanci.',
          rating: 5,
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          name: 'Usman Garba',
          role: 'Ɗalibi',
          location: 'Zaria, Najeriya',
          content: 'Kasancewa cikin wannan al\'umma ya ba ni kwarin gwiwa a fagen blockchain. Tallafin daga \'yan uwana masu magana da Hausa yana da ban mamaki.',
          rating: 5,
          image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ]
    }
  };

  const testimonials = content[language].testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-80">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-pink-500 mb-4" />
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                          "{testimonial.content}"
                        </p>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-pink-600 font-medium mb-1">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-pink-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">2,500+</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Active Members' : 'Membobi Masu Aiki'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Satisfaction Rate' : 'Adadin Gamsuwa'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Workshops Completed' : 'Tarurrukan da aka Kammala'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">
                {language === 'en' ? 'States Reached' : 'Jihohi da aka Kai'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
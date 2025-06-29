import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Ecosystem from './components/Ecosystem';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'ha'>('en');

  const handleLanguageChange = (lang: 'en' | 'ha') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Programs language={language} />
      <Ecosystem language={language} />
      <Partners language={language} />
      <Testimonials language={language} />
      <Newsletter language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
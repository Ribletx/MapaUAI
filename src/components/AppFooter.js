import React from 'react';
import { useLanguage } from './LanguageContext';

const AppFooter = () => {
  const { translations, language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">{translations[language].footerText}</h2>
          <p className="text-gray-400">Universidad Adolfo Ibáñez</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-300 transition-colors">Facebook</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Instagram</a>
          <a href="#" className="hover:text-blue-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;

// DONE

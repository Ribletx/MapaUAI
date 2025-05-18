import React from 'react';
import { useLanguage } from './LanguageContext';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const BuildingRoomDetail = ({ roomType, onBackClick }) => {
  const { translations, language } = useLanguage();

  const getRoomData = () => {
    switch(roomType) {
      case 'studyRoom':
        return { title: translations[language].studyRoom, description: translations[language].studyRoomDesc };
      case '104':
        return { title: '104', description: translations[language].s104 };
      case 'bathroom':
        return { title: translations[language].bathroom, description: translations[language].bathroomDesc };
      case 'cafeteria':
        return { title: translations[language].cafeteria, description: translations[language].cafeteriaDesc };
      default:
        return { title: '', description: '' };
    }
  };

  const { title, description } = getRoomData();

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader 
        onHomeClick={onBackClick}
        onBackClick={onBackClick}
        showBackButton={true}
      />
      
      <main className="flex-grow bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <button 
              onClick={onBackClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              {translations[language].backButton}
            </button>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default BuildingRoomDetail;

// DONE
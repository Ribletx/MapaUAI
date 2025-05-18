import React, { useState } from 'react';
import BuildingRoomDetail from './BuildingRoomDetail';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { useLanguage } from './LanguageContext';
import CafeteriaDetail from './CafeteriaDetail'; 

const BuildingMap = () => {
  const [currentView, setCurrentView] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const { translations, language } = useLanguage();

  const handleRoomClick = (room) => {
    setCurrentView(room);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleHomeClick = () => {
    setCurrentView('map');
    setSearchQuery('');
  };

  const renderMap = () => {
    const buttons = [
      {
        id: 'studyRoom',
        label: translations[language].studyRoom,
        style: 'top-[62%] left-[13%]',
      },
      {
        id: '104',
        label: '104',
        style: 'top-[44%] left-[7%]',
      },
      {
        id: 'bathroom',
        label: translations[language].bathroom,
        style: 'top-[41%] left-[50%]',
      },
      {
        id: 'cafeteria',
        label: translations[language].cafeteria,
        style: 'top-[46%] right-[6%]',
      },
    ];

    const filteredButtons = buttons.filter(button => 
      searchQuery === '' || 
      button.label.toLowerCase().includes(searchQuery)
    );

    return (
      <div className="flex flex-col min-h-screen">
        <AppHeader 
          onSearch={handleSearch}
          onHomeClick={handleHomeClick}
          onBackClick={handleHomeClick}
          showBackButton={false}
        />

        <div className="relative flex-grow bg-gray-100">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0oQxeRBgDjdvqUQH6XhKYIiaSc3LCtrM1fen0" 
            alt="Planta del edificio" 
            className="w-full h-full object-contain"
          />

          {/* Renderizar solo los botones filtrados */}
          {filteredButtons.map(({ id, label, style }) => (
            <button
              key={id}
              onClick={() => handleRoomClick(id)}
              className={`absolute ${style} bg-white bg-opacity-80 hover:bg-opacity-100 px-4 py-2 rounded-lg shadow-md transition-all`}
            >
              {label}
            </button>
          ))}
        </div>

        <AppFooter />
      </div>
    );
  };

  switch(currentView) {
    case 'cafeteria':
      return (
        <CafeteriaDetail 
          onBackClick={() => setCurrentView('map')}
        />
      );
    case 'studyRoom':
    case '104':
    case 'bathroom':
      return (
        <BuildingRoomDetail 
          roomType={currentView} 
          onBackClick={() => setCurrentView('map')}
        />
      );
    default:
      return renderMap();
  }  
};

export default BuildingMap;

import React, { useState } from 'react';
import BuildingRoomDetail from './BuildingRoomDetail';
import { useLanguage } from './LanguageContext';
import CafeteriaDetail from './CafeteriaDetail'; 

const BuildingMap = () => {
  const [currentView, setCurrentView] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const { translations, language, setLanguage } = useLanguage();

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

  const handleCategoryClick = (category) => {
    // Filtrar por categoría - puedes expandir esta lógica
    setSearchQuery(category.toLowerCase());
  };

  // Iconos SVG
  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"></path>
    </svg>
  );

  const renderMap = () => {
    const buttons = [
      {
        id: 'studyRoom',
        label: translations[language].studyRoom,
        style: 'top-[62%] left-[18%]',
        category: 'salas'
      },
      {
        id: '104',
        label: '104',
        style: 'top-[44%] left-[13%]',
        category: 'salas'
      },
      {
        id: 'bathroom',
        label: translations[language].bathroom,
        style: 'top-[38%] left-[45%]',
        category: 'servicios'
      },
      {
        id: 'cafeteria',
        label: translations[language].cafeteria,
        style: 'top-[46%] right-[19%]',
        category: 'casinos'
      },
    ];

    const filteredButtons = buttons.filter(button => 
      searchQuery === '' || 
      button.label.toLowerCase().includes(searchQuery) ||
      button.category.toLowerCase().includes(searchQuery)
    );

    const categories = [
      { 
        name: translations[language].studyRoom, 
        key: 'salas',
        rooms: ['Sala de Estudio', '104'] 
      },
      { 
        name: 'Casinos', 
        key: 'casinos',
        rooms: [translations[language].cafeteria] 
      },
      { 
        name: 'Servicios', 
        key: 'servicios',
        rooms: [translations[language].bathroom] 
      }
    ];

    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg flex flex-col">
          {/* Header del sidebar */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={handleHomeClick}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <HomeIcon />
                <span className="ml-2 text-lg font-semibold">
                  {translations[language].headerTitle || 'Campus Map'}
                </span>
              </button>
              
              {/* Language Selector */}
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇬🇧 EN</option>
              </select>
            </div>

            {/* Dropdown Menus */}
            <div className="flex gap-3 mb-4">
              {/* Building Selector */}
              <select
                value={selectedBuilding}
                onChange={(e) => setSelectedBuilding(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Edificio</option>
                <option value="edificio-a">Edificio A</option>
                <option value="edificio-b">Edificio B</option>
                <option value="edificio-c">Edificio C</option>
              </select>

              {/* Floor Selector */}
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Piso</option>
                <option value="piso-1">Piso 1</option>
                <option value="piso-2">Piso 2</option>
                <option value="piso-3">Piso 3</option>
                <option value="piso-4">Piso 4</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder={translations[language].searchPlaceholder || 'Buscar salas...'}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-[#009ee2]"
                style={{ borderColor: '#009ee2' }}
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex-1 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorías</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryClick(category.key)}
                  className={`w-full text-left p-3 transition-colors ${
                    searchQuery.includes(category.key) 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {category.rooms.join(', ')}
                  </div>
                </button>
              ))}
            </div>

            {/* Clear search button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="w-full mt-4 p-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Limpiar búsqueda
              </button>
            )}
          </div>
        </div>

        {/* Main Content - Map */}
        <div className="flex-1 relative bg-gray-50">
          <img 
            src="/PlanoF.jpeg" 
            alt="Planta del edificio" 
            className="w-full h-full object-contain"
          />

          {/* Room buttons */}
          {filteredButtons.map(({ id, label, style }) => (
            <button
              key={id}
              onClick={() => handleRoomClick(id)}
              className={`absolute ${style} bg-white bg-opacity-90 hover:bg-opacity-100 px-4 py-2 shadow-md transition-all hover:shadow-lg hover:scale-105`}
            >
              {label}
            </button>
          ))}

          {/* No results message */}
          {searchQuery && filteredButtons.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 shadow-lg">
                <p className="text-gray-600">No se encontraron resultados para "{searchQuery}"</p>
              </div>
            </div>
          )}
        </div>
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
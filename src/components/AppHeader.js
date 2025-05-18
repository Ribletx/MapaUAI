import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const AppHeader = ({ onSearch, onHomeClick, onBackClick, showBackButton }) => {
  const { translations, language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (onSearch) onSearch(searchQuery); // Solo llama si está definido
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"></path>
    </svg>
  );

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const LanguageSelector = () => (
    <select 
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="ml-4 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );

  return (
    <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        {showBackButton && (
          <button 
            onClick={onBackClick}
            className="mr-4 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BackIcon />
          </button>
        )}
        <button 
          onClick={onHomeClick}
          className="mr-4 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <HomeIcon />
        </button>
        <h1 className="text-xl font-bold text-gray-800">
          {translations?.[language]?.appTitle || 'Campus Map'}
        </h1>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder={translations?.[language]?.searchPlaceholder || 'Search...'}
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-3 text-gray-400">
            <SearchIcon />
          </div>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default AppHeader;
